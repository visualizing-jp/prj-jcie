import * as d3 from 'd3';

const VIEWBOX_WIDTH = 1440;
const VIEWBOX_HEIGHT = 900;
const PANEL_PADDING = 24;
const MIN_MOBILE_WIDTH = 768;
const MIN_HEADER_SAFE = 56;
const MAX_HEADER_SAFE = 130;

export class ChartLayer {
  constructor(container) {
    this.container = container;
    this.svg = null;
    this.root = null;
    this.dataCache = new Map();
    this.onResize = () => {
      // レスポンシブ再計算は次回step enter時に行う。
    };
    window.addEventListener('resize', this.onResize);
  }

  async render(chartConfig) {
    if (!chartConfig?.visible) return;

    const normalized = this.normalizeChartConfig(chartConfig);
    this.ensureSvg();
    if (!this.root) return;

    this.root.selectAll('*').remove();
    this.drawBackdrop();

    const isMobile = window.innerWidth < MIN_MOBILE_WIDTH;
    const panelSpecs = this.buildPanelSpecs(normalized, isMobile);
    if (panelSpecs.length === 0) return;

    const chartJobs = panelSpecs
      .filter((panel) => panel.chart)
      .map(async (panel) => {
        const dataset = await this.loadDataset(panel.chart);
        this.renderChart(panel, dataset);
      });

    await Promise.all(chartJobs);
  }

  normalizeChartConfig(chartConfig) {
    const layout = chartConfig.layout || (Array.isArray(chartConfig.charts) && chartConfig.charts.length === 2 ? 'dual' : 'single');

    const charts = Array.isArray(chartConfig.charts) && chartConfig.charts.length > 0
      ? chartConfig.charts
      : [
          {
            id: chartConfig.id || 'chart-1',
            type: chartConfig.type || 'line',
            dataFile: chartConfig.dataFile,
            dataFormat: chartConfig.dataFormat || 'auto',
            config: chartConfig.config || {},
          },
        ];

    return {
      visible: chartConfig.visible,
      layout,
      responsive: chartConfig.responsive || { mobileStack: true },
      grid: chartConfig.grid || null,
      charts,
      position: chartConfig.position || null,
    };
  }

  buildPanelSpecs(config, isMobile) {
    const charts = config.charts || [];
    if (charts.length === 0) return [];
    const bounds = this.getPlotBounds();

    const mobileStack = config.responsive?.mobileStack !== false;
    const forceStack = isMobile && mobileStack && (config.layout === 'dual' || config.layout === 'grid');

    if (config.layout === 'single' || forceStack) {
      return this.buildStackedPanels(charts, bounds);
    }

    if (config.layout === 'dual') {
      return this.buildDualPanels(charts, bounds);
    }

    if (config.layout === 'grid') {
      return this.buildGridPanels(charts, config.grid || {}, bounds);
    }

    return this.buildStackedPanels(charts, bounds);
  }

  getPlotBounds() {
    const header = document.getElementById('header-nav');
    const rawHeaderHeight = header?.offsetHeight ?? MIN_HEADER_SAFE;
    const headerSafe = Math.min(Math.max(rawHeaderHeight, MIN_HEADER_SAFE), MAX_HEADER_SAFE);

    return {
      left: PANEL_PADDING,
      right: VIEWBOX_WIDTH - PANEL_PADDING,
      top: PANEL_PADDING + headerSafe,
      bottom: VIEWBOX_HEIGHT - PANEL_PADDING,
    };
  }

  buildStackedPanels(charts, bounds) {
    const count = charts.length;
    const gap = 20;
    const availableHeight = bounds.bottom - bounds.top - gap * (count - 1);
    const panelHeight = availableHeight / count;

    return charts.map((chart, i) => ({
      chart,
      x: bounds.left,
      y: bounds.top + i * (panelHeight + gap),
      width: bounds.right - bounds.left,
      height: panelHeight,
    }));
  }

  buildDualPanels(charts, bounds) {
    const gap = 20;
    const columns = 2;
    const rows = Math.ceil(charts.length / columns);
    const panelWidth = (bounds.right - bounds.left - gap) / 2;
    const panelHeight = (bounds.bottom - bounds.top - gap * (rows - 1)) / rows;

    return charts.map((chart, i) => {
      const col = i % columns;
      const row = Math.floor(i / columns);
      return {
        chart,
        x: bounds.left + col * (panelWidth + gap),
        y: bounds.top + row * (panelHeight + gap),
        width: panelWidth,
        height: panelHeight,
      };
    });
  }

  buildGridPanels(charts, grid, bounds) {
    const allowEmpty = grid.allowEmptyCells !== false;
    const rowPattern = Array.isArray(grid.rowPattern) && grid.rowPattern.length > 0
      ? grid.rowPattern
      : this.makeDefaultRowPattern(grid, charts.length);

    const maxColumns = Math.max(...rowPattern);
    const rowGap = 18;
    const colGap = 18;
    const totalRows = rowPattern.length;
    const areaWidth = bounds.right - bounds.left;
    const areaHeight = bounds.bottom - bounds.top;
    const rowHeight = (areaHeight - rowGap * (totalRows - 1)) / totalRows;
    const colWidth = (areaWidth - colGap * (maxColumns - 1)) / maxColumns;

    const panels = [];
    let chartIndex = 0;

    rowPattern.forEach((colsInRow, rowIndex) => {
      const rowContentWidth = colsInRow * colWidth + (colsInRow - 1) * colGap;
      const rowStartX = bounds.left + (areaWidth - rowContentWidth) / 2;

      for (let col = 0; col < colsInRow; col += 1) {
        const chart = charts[chartIndex] || null;
        if (!chart && !allowEmpty) break;

        panels.push({
          chart,
          x: rowStartX + col * (colWidth + colGap),
          y: bounds.top + rowIndex * (rowHeight + rowGap),
          width: colWidth,
          height: rowHeight,
        });

        if (chart) chartIndex += 1;
      }
    });

    return panels;
  }

  makeDefaultRowPattern(grid, chartCount) {
    const columns = Number.isFinite(grid.columns) ? Math.max(1, grid.columns) : chartCount;
    const rows = Number.isFinite(grid.rows) ? Math.max(1, grid.rows) : Math.ceil(chartCount / columns);
    const pattern = [];

    for (let r = 0; r < rows; r += 1) {
      const remaining = chartCount - r * columns;
      if (remaining <= 0) {
        pattern.push(columns);
      } else {
        pattern.push(Math.min(columns, remaining));
      }
    }

    return pattern;
  }

  async loadDataset(chart) {
    const dataFile = chart.dataFile;
    if (!dataFile) {
      return null;
    }

    const resolvedPath = dataFile.startsWith('/') ? dataFile : `/${dataFile}`;
    const dataFormat = (chart.dataFormat || 'auto').toLowerCase();
    const format = dataFormat === 'auto' ? this.detectFormatFromPath(resolvedPath) : dataFormat;

    const cacheKey = `${format}:${resolvedPath}`;
    if (this.dataCache.has(cacheKey)) {
      return this.dataCache.get(cacheKey);
    }

    let data;
    if (format === 'json') {
      data = await d3.json(resolvedPath);
    } else if (format === 'csv') {
      data = await d3.csv(resolvedPath, d3.autoType);
    } else {
      throw new Error(`Unsupported data format: ${format}`);
    }

    this.dataCache.set(cacheKey, data);
    return data;
  }

  detectFormatFromPath(path) {
    if (path.endsWith('.json')) return 'json';
    if (path.endsWith('.csv')) return 'csv';
    throw new Error(`Cannot detect data format from path: ${path}`);
  }

  renderChart(panel, dataset) {
    if (!panel.chart) {
      this.drawEmptyPanel(panel);
      return;
    }

    const chartType = panel.chart.type || 'line';

    try {
      if (chartType === 'line') {
        this.renderLine(panel, dataset, panel.chart.config || {});
      } else if (chartType === 'pie') {
        this.renderPie(panel, dataset, panel.chart.config || {});
      } else if (chartType === 'sankey') {
        this.renderSankey(panel, dataset, panel.chart.config || {});
      } else if (chartType === 'venn') {
        this.renderVenn(panel, dataset, panel.chart.config || {});
      } else {
        this.renderUnsupported(panel, `未対応チャート: ${chartType}`);
      }
    } catch (error) {
      this.renderUnsupported(panel, `描画エラー: ${chartType}`);
      console.error(error);
    }
  }

  renderLine(panel, dataset, config) {
    if (!Array.isArray(dataset)) {
      this.renderUnsupported(panel, 'lineデータ形式が不正です');
      return;
    }

    const xField = config.xField || 'year';
    const yField = config.yField || 'value';
    const rows = dataset.filter((d) => Number.isFinite(Number(d[xField])) && Number.isFinite(Number(d[yField])));
    if (rows.length === 0) {
      this.renderUnsupported(panel, 'lineデータが空です');
      return;
    }

    const title = config.title || '折れ線グラフ';
    const inner = this.createPanelInner(panel, title);
    const width = inner.width;
    const height = inner.height;

    const x = d3
      .scaleLinear()
      .domain(d3.extent(rows, (d) => Number(d[xField])))
      .range([0, width]);
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(rows, (d) => Number(d[yField])) * 1.1])
      .nice()
      .range([height, 0]);

    const xAxis = d3.axisBottom(x).ticks(5).tickFormat(d3.format('d'));
    const yAxis = d3.axisLeft(y).ticks(5);

    inner.group
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis)
      .call((g) => g.selectAll('text').attr('fill', '#d8dee9').attr('font-size', 11))
      .call((g) => g.selectAll('line,path').attr('stroke', '#8ca0b3').attr('opacity', 0.5));

    inner.group
      .append('g')
      .call(yAxis)
      .call((g) => g.selectAll('text').attr('fill', '#d8dee9').attr('font-size', 11))
      .call((g) => g.selectAll('line,path').attr('stroke', '#8ca0b3').attr('opacity', 0.5));

    this.renderLineAnnotations(inner.group, x, y, width, height, config.annotations);
    const line = d3
      .line()
      .x((d) => x(Number(d[xField])))
      .y((d) => y(Number(d[yField])))
      .curve(d3.curveMonotoneX);

    const path = inner.group
      .append('path')
      .datum(rows)
      .attr('fill', 'none')
      .attr('stroke', this.getThemePrimary())
      .attr('stroke-width', 2.5)
      .attr('d', line);

    const len = path.node()?.getTotalLength() || 0;
    path
      .attr('stroke-dasharray', `${len} ${len}`)
      .attr('stroke-dashoffset', len)
      .transition()
      .duration(700)
      .ease(d3.easeCubicOut)
      .attr('stroke-dashoffset', 0);

    inner.group
      .selectAll('.point')
      .data(rows)
      .enter()
      .append('circle')
      .attr('cx', (d) => x(Number(d[xField])))
      .attr('cy', (d) => y(Number(d[yField])))
      .attr('r', 2.7)
      .attr('fill', '#ffffff');
  }

  renderPie(panel, dataset, config) {
    const pieData = this.resolvePieDataset(dataset, config);
    if (!Array.isArray(pieData) || pieData.length === 0) {
      this.renderUnsupported(panel, 'pieデータが空です');
      return;
    }

    const labelField = config.labelField || 'label';
    const valueField = config.valueField || 'value';
    const rows = pieData.filter((d) => d[labelField] != null && Number.isFinite(Number(d[valueField])));
    if (rows.length === 0) {
      this.renderUnsupported(panel, 'pieデータが不正です');
      return;
    }

    const title = config.title || config.groupTitle || '円グラフ';
    const inner = this.createPanelInner(panel, title, { compact: true });
    const radius = Math.max(24, Math.min(inner.width, inner.height) * 0.33);

    const pie = d3.pie().value((d) => Number(d[valueField])).sort(null);
    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    const palette = this.buildPalette(rows.length);
    const root = inner.group
      .append('g')
      .attr('transform', `translate(${inner.width / 2}, ${inner.height / 2 - 8})`);

    root
      .selectAll('path')
      .data(pie(rows))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (_, i) => palette[i])
      .attr('stroke', '#0b1726')
      .attr('stroke-width', 1)
      .attr('opacity', 0)
      .transition()
      .duration(500)
      .attr('opacity', 0.95);

    const legend = inner.group
      .append('g')
      .attr('transform', `translate(0, ${inner.height - Math.min(rows.length * 15, inner.height * 0.38)})`);

    rows.slice(0, 6).forEach((row, i) => {
      const y = i * 15;
      legend
        .append('rect')
        .attr('x', 0)
        .attr('y', y - 9)
        .attr('width', 9)
        .attr('height', 9)
        .attr('fill', palette[i]);
      legend
        .append('text')
        .attr('x', 14)
        .attr('y', y)
        .attr('fill', '#d8dee9')
        .attr('font-size', 10)
        .text(`${row[labelField]}: ${row[valueField]}`);
    });
  }

  resolvePieDataset(dataset, config) {
    if (Array.isArray(dataset)) return dataset;
    if (Array.isArray(dataset?.groups)) {
      const groupId = config.groupId;
      const group = groupId
        ? dataset.groups.find((g) => g.id === groupId)
        : dataset.groups[config.groupIndex ?? 0];
      if (!group) return [];
      return group.values || [];
    }
    return [];
  }

  renderSankey(panel, dataset, config) {
    const graph = this.normalizeSankeyData(dataset);
    if (!graph || graph.nodes.length === 0 || graph.links.length === 0) {
      this.renderUnsupported(panel, 'sankeyデータが不正です');
      return;
    }

    const title = config.title || 'サンキー・ダイアグラム';
    const inner = this.createPanelInner(panel, title);
    const width = inner.width;
    const height = inner.height;

    const nodeById = new Map(graph.nodes.map((n) => [n.id, { ...n, in: [], out: [], level: 0 }]));
    const links = graph.links
      .map((l) => ({
        source: nodeById.get(l.source),
        target: nodeById.get(l.target),
        value: Number(l.value),
      }))
      .filter((l) => l.source && l.target && Number.isFinite(l.value) && l.value > 0);

    links.forEach((l) => {
      l.source.out.push(l);
      l.target.in.push(l);
    });

    this.assignNodeLevels(nodeById);

    const levels = new Map();
    [...nodeById.values()].forEach((node) => {
      if (!levels.has(node.level)) levels.set(node.level, []);
      levels.get(node.level).push(node);
    });

    const levelKeys = [...levels.keys()].sort((a, b) => a - b);
    const maxLevel = Math.max(...levelKeys, 1);
    const nodeGap = 12;
    const nodeWidth = Math.max(8, Math.min(18, width * 0.03));
    const maxTotal = Math.max(
      ...levelKeys.map((lv) => levels.get(lv).reduce((sum, n) => sum + this.nodeValue(n), 0)),
      1
    );
    const unit = (height - nodeGap * 6) / maxTotal;

    levelKeys.forEach((lv) => {
      const nodes = levels.get(lv);
      const totalValue = nodes.reduce((sum, n) => sum + this.nodeValue(n), 0);
      const usedHeight = totalValue * unit + (nodes.length - 1) * nodeGap;
      let cursorY = (height - usedHeight) / 2;

      nodes.forEach((node) => {
        node.h = Math.max(8, this.nodeValue(node) * unit);
        node.w = nodeWidth;
        node.x = (lv / maxLevel) * (width - nodeWidth);
        node.y = cursorY;
        node.inOffset = 0;
        node.outOffset = 0;
        cursorY += node.h + nodeGap;
      });
    });

    const linkLayer = inner.group.append('g').attr('fill', 'none');

    links.forEach((link) => {
      const thickness = Math.max(1.5, link.value * unit);
      const x1 = link.source.x + link.source.w;
      const y1 = link.source.y + link.source.outOffset + thickness / 2;
      const x2 = link.target.x;
      const y2 = link.target.y + link.target.inOffset + thickness / 2;
      link.source.outOffset += thickness;
      link.target.inOffset += thickness;

      const c1 = x1 + (x2 - x1) * 0.45;
      const c2 = x1 + (x2 - x1) * 0.55;
      const path = `M${x1},${y1} C${c1},${y1} ${c2},${y2} ${x2},${y2}`;

      linkLayer
        .append('path')
        .attr('d', path)
        .attr('stroke', this.getThemePrimary())
        .attr('stroke-width', thickness)
        .attr('stroke-opacity', 0.28);
    });

    const nodeLayer = inner.group.append('g');
    const nodes = [...nodeById.values()];

    nodeLayer
      .selectAll('rect')
      .data(nodes)
      .enter()
      .append('rect')
      .attr('x', (d) => d.x)
      .attr('y', (d) => d.y)
      .attr('width', (d) => d.w)
      .attr('height', (d) => d.h)
      .attr('fill', '#dbe7f3')
      .attr('fill-opacity', 0.88)
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 0.6);

    nodeLayer
      .selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .attr('x', (d) => (d.level === 0 ? d.x + d.w + 6 : d.x - 6))
      .attr('y', (d) => d.y + d.h / 2 + 3)
      .attr('text-anchor', (d) => (d.level === 0 ? 'start' : 'end'))
      .attr('fill', '#e6edf5')
      .attr('font-size', 10)
      .text((d) => d.label);
  }

  normalizeSankeyData(dataset) {
    if (dataset?.nodes && dataset?.links) {
      const nodes = dataset.nodes.map((n, i) => ({
        id: n.id ?? n.name ?? String(i),
        label: n.name ?? n.id ?? String(i),
      }));
      const nodeIds = nodes.map((n) => n.id);
      const links = dataset.links.map((l) => ({
        source: typeof l.source === 'number' ? nodeIds[l.source] : l.source,
        target: typeof l.target === 'number' ? nodeIds[l.target] : l.target,
        value: Number(l.value),
      }));
      return { nodes, links };
    }

    if (Array.isArray(dataset)) {
      const nodeSet = new Set();
      const links = dataset.map((row) => {
        const source = String(row.source ?? row.from ?? '');
        const target = String(row.target ?? row.to ?? '');
        nodeSet.add(source);
        nodeSet.add(target);
        return {
          source,
          target,
          value: Number(row.value ?? row.count ?? 0),
        };
      });
      const nodes = [...nodeSet].filter(Boolean).map((id) => ({ id, label: id }));
      return { nodes, links };
    }

    return null;
  }

  assignNodeLevels(nodeById) {
    const nodes = [...nodeById.values()];
    const indegree = new Map(nodes.map((n) => [n.id, n.in.length]));
    const queue = nodes.filter((n) => n.in.length === 0);

    if (queue.length === 0) {
      nodes.forEach((n) => {
        n.level = 0;
      });
      return;
    }

    while (queue.length > 0) {
      const node = queue.shift();
      node.out.forEach((link) => {
        const target = link.target;
        target.level = Math.max(target.level, node.level + 1);
        indegree.set(target.id, indegree.get(target.id) - 1);
        if (indegree.get(target.id) === 0) {
          queue.push(target);
        }
      });
    }
  }

  nodeValue(node) {
    const inSum = d3.sum(node.in, (l) => l.value);
    const outSum = d3.sum(node.out, (l) => l.value);
    return Math.max(inSum, outSum, 1);
  }

  renderVenn(panel, dataset, config) {
    const venn = this.resolveVennDataset(dataset, config);
    if (!venn || !Array.isArray(venn.sets) || venn.sets.length === 0) {
      this.renderUnsupported(panel, 'vennデータが不正です');
      return;
    }

    const title = config.title || venn.title || 'ベン図';
    const inner = this.createPanelInner(panel, title, { compact: true });

    const setNames = [...new Set(venn.sets.filter((d) => d.sets?.length === 1).map((d) => d.sets[0]))];
    if (setNames.length < 2 || setNames.length > 3) {
      this.renderUnsupported(panel, 'ベン図は2〜3集合を想定しています');
      return;
    }

    const singleton = new Map(
      venn.sets
        .filter((d) => d.sets?.length === 1)
        .map((d) => [d.sets[0], Number(d.size) || 0])
    );

    const interMap = new Map(
      venn.sets
        .filter((d) => d.sets?.length > 1)
        .map((d) => [d.sets.join('&'), Number(d.size) || 0])
    );

    const cx = inner.width / 2;
    const cy = inner.height / 2;
    const baseR = Math.max(26, Math.min(inner.width, inner.height) * 0.22);

    const positions = this.resolveVennPositions(setNames.length, cx, cy, baseR);
    const palette = this.buildPalette(setNames.length);

    const g = inner.group.append('g');

    setNames.forEach((name, idx) => {
      const p = positions[idx];
      const scale = Math.max(0.75, Math.min(1.3, Math.sqrt((singleton.get(name) || 1) / (d3.max([...singleton.values()]) || 1))));
      const r = baseR * scale;

      g.append('circle')
        .attr('cx', p.x)
        .attr('cy', p.y)
        .attr('r', r)
        .attr('fill', palette[idx])
        .attr('fill-opacity', 0.35)
        .attr('stroke', palette[idx])
        .attr('stroke-width', 1.2);

      g.append('text')
        .attr('x', p.x)
        .attr('y', p.y - r - 8)
        .attr('text-anchor', 'middle')
        .attr('fill', '#e6edf5')
        .attr('font-size', 10)
        .text(name);
    });

    if (setNames.length === 2) {
      const key = `${setNames[0]}&${setNames[1]}`;
      const inter = interMap.get(key) ?? interMap.get(`${setNames[1]}&${setNames[0]}`);
      if (inter != null) {
        g.append('text')
          .attr('x', cx)
          .attr('y', cy + 3)
          .attr('text-anchor', 'middle')
          .attr('fill', '#ffffff')
          .attr('font-size', 10)
          .text(d3.format(',')(inter));
      }
    }

    if (setNames.length === 3) {
      const inter3 = interMap.get(`${setNames[0]}&${setNames[1]}&${setNames[2]}`) ?? interMap.get(`${setNames[0]}&${setNames[2]}&${setNames[1]}`);
      if (inter3 != null) {
        g.append('text')
          .attr('x', cx)
          .attr('y', cy + 4)
          .attr('text-anchor', 'middle')
          .attr('fill', '#ffffff')
          .attr('font-size', 10)
          .text(d3.format(',')(inter3));
      }
    }
  }

  resolveVennDataset(dataset, config) {
    if (dataset?.sets) {
      return dataset;
    }

    if (Array.isArray(dataset?.groups)) {
      const group = config.groupId
        ? dataset.groups.find((g) => g.id === config.groupId)
        : dataset.groups[config.groupIndex ?? 0];
      return group || null;
    }

    return null;
  }

  resolveVennPositions(setCount, cx, cy, r) {
    if (setCount === 2) {
      return [
        { x: cx - r * 0.55, y: cy },
        { x: cx + r * 0.55, y: cy },
      ];
    }

    return [
      { x: cx, y: cy - r * 0.55 },
      { x: cx - r * 0.7, y: cy + r * 0.45 },
      { x: cx + r * 0.7, y: cy + r * 0.45 },
    ];
  }

  renderUnsupported(panel, message) {
    const g = this.root
      .append('g')
      .attr('transform', `translate(${panel.x}, ${panel.y})`);

    g.append('rect')
      .attr('width', panel.width)
      .attr('height', panel.height)
      .attr('rx', 10)
      .attr('fill', '#0f1b2a')
      .attr('fill-opacity', 0.7)
      .attr('stroke', '#42536a')
      .attr('stroke-opacity', 0.5);

    g.append('text')
      .attr('x', panel.width / 2)
      .attr('y', panel.height / 2)
      .attr('text-anchor', 'middle')
      .attr('fill', '#e7edf6')
      .attr('font-size', 12)
      .text(message);
  }

  drawEmptyPanel(panel) {
    const g = this.root
      .append('g')
      .attr('transform', `translate(${panel.x}, ${panel.y})`);

    g.append('rect')
      .attr('width', panel.width)
      .attr('height', panel.height)
      .attr('rx', 8)
      .attr('fill', '#0e1a28')
      .attr('fill-opacity', 0.2)
      .attr('stroke', '#42536a')
      .attr('stroke-dasharray', '4 4')
      .attr('stroke-opacity', 0.35);
  }

  createPanelInner(panel, title = '', options = {}) {
    const compact = options.compact === true;
    const titleH = title ? (compact ? 20 : 28) : 0;
    const innerPad = compact ? 10 : 14;

    const group = this.root
      .append('g')
      .attr('transform', `translate(${panel.x}, ${panel.y})`);

    group
      .append('rect')
      .attr('width', panel.width)
      .attr('height', panel.height)
      .attr('rx', 10)
      .attr('fill', '#091523')
      .attr('fill-opacity', 0.63)
      .attr('stroke', '#5f738a')
      .attr('stroke-opacity', 0.35);

    if (title) {
      group
        .append('text')
        .attr('x', innerPad)
        .attr('y', innerPad + 3)
        .attr('dominant-baseline', 'hanging')
        .attr('fill', '#ffffff')
        .attr('font-size', compact ? 12 : 14)
        .attr('font-weight', 600)
        .text(title);
    }

    const innerGroup = group.append('g').attr('transform', `translate(${innerPad}, ${innerPad + titleH})`);
    const width = panel.width - innerPad * 2;
    const height = panel.height - innerPad * 2 - titleH;

    return { group: innerGroup, width, height };
  }

  drawBackdrop() {
    this.root
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', VIEWBOX_WIDTH)
      .attr('height', VIEWBOX_HEIGHT)
      .attr('fill', '#06111e')
      .attr('fill-opacity', 0.64);
  }

  ensureSvg() {
    if (!this.container) return;
    if (this.svg && this.svg.node()?.isConnected) return;

    this.clear();
    this.svg = d3
      .select(this.container)
      .append('svg')
      .attr('viewBox', `0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`)
      .attr('preserveAspectRatio', 'xMidYMid meet')
      .attr('aria-label', 'chart layer');

    this.root = this.svg.append('g');
  }

  getThemePrimary() {
    return getComputedStyle(document.documentElement).getPropertyValue('--theme-primary').trim() || '#ff6b6b';
  }

  buildPalette(count) {
    const base = [
      '#5fb3ff',
      '#f59e0b',
      '#34d399',
      '#f87171',
      '#a78bfa',
      '#2dd4bf',
      '#f472b6',
      '#60a5fa',
      '#fbbf24',
      '#4ade80',
    ];

    if (count <= base.length) {
      return base.slice(0, count);
    }

    return Array.from({ length: count }, (_, i) => d3.interpolateRainbow(i / count));
  }

  clear() {
    if (this.container) {
      this.container.innerHTML = '';
    }
    this.svg = null;
    this.root = null;
  }

  destroy() {
    window.removeEventListener('resize', this.onResize);
    this.clear();
  }
}
