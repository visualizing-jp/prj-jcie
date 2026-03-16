import * as d3 from 'd3';
import * as vennjs from '@upsetjs/venn.js';
import { annotation, annotationXYThreshold, annotationCalloutElbow, annotationCalloutCurve } from 'd3-svg-annotation';

const VIEWBOX_WIDTH = 1440;
const VIEWBOX_HEIGHT = 900;
const PANEL_PADDING = 24;
const MIN_MOBILE_WIDTH = 768;
const MIN_HEADER_SAFE = 56;
const MAX_HEADER_SAFE = 130;

const ANNOTATION_DEFAULTS = {
  color: '#374151',
  fontSize: 11,
  fontWeight: 500,
  lineOpacity: 0.8,
  lineDash: '4 4',
  wrapWidth: 140,
  verticalLine: { dx: 30, dy: -40 },
  horizontalLine: { dx: 40, dy: -20 },
  callout: { dx: 50, dy: -30 },
};

export class ChartLayer {
  constructor(container) {
    this.container = container;
    this.svg = null;
    this.root = null;
    this.dataCache = new Map();
    this.lineSpanState = new Map();
    this.onResize = () => {
      // レスポンシブ再計算は次回step enter時に行う。
    };
    window.addEventListener('resize', this.onResize);
  }

  async render(chartConfig, renderOptions = {}) {
    if (!chartConfig?.visible) return;

    const normalized = this.normalizeChartConfig(chartConfig, renderOptions);
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

  normalizeChartConfig(chartConfig, renderOptions = {}) {
    const layout = chartConfig.layout || (Array.isArray(chartConfig.charts) && chartConfig.charts.length === 2 ? 'dual' : 'single');
    const span = chartConfig.span || (renderOptions.spanId ? { id: renderOptions.spanId } : null);
    const transitionFromPrevious = Boolean(renderOptions.transitionFromPrevious);

    const charts = Array.isArray(chartConfig.charts) && chartConfig.charts.length > 0
      ? chartConfig.charts.map((chart) => ({ ...chart, span, transitionFromPrevious }))
      : [
          {
            id: chartConfig.id || 'chart-1',
            type: chartConfig.type || 'line',
            dataFile: chartConfig.dataFile,
            dataFormat: chartConfig.dataFormat || 'auto',
            config: chartConfig.config || {},
            span,
            transitionFromPrevious,
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
      const dualTitle = config.dualTitle || null;
      const dualTitleH = dualTitle ? 32 : 0;
      if (dualTitle && this.root) {
        this.root
          .append('text')
          .attr('x', bounds.left + (bounds.right - bounds.left) / 2)
          .attr('y', bounds.top + 20)
          .attr('text-anchor', 'middle')
          .attr('fill', '#1f2937')
          .attr('font-size', 16)
          .attr('font-weight', 700)
          .text(dualTitle);
      }
      const adjustedBounds = dualTitleH
        ? { ...bounds, top: bounds.top + dualTitleH }
        : bounds;
      return this.buildDualPanels(charts, adjustedBounds);
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
    const rowTitles = Array.isArray(grid.rowTitles) ? grid.rowTitles : [];

    const gridTitleH = grid.title ? 32 : 0;
    if (grid.title && this.root) {
      this.root
        .append('text')
        .attr('x', bounds.left + (bounds.right - bounds.left) / 2)
        .attr('y', bounds.top + 20)
        .attr('text-anchor', 'middle')
        .attr('fill', '#1f2937')
        .attr('font-size', 16)
        .attr('font-weight', 700)
        .text(grid.title);
    }

    const maxColumns = Math.max(...rowPattern);
    const rowGap = 18;
    const colGap = 18;
    const totalRows = rowPattern.length;
    const areaWidth = bounds.right - bounds.left;
    const areaHeight = bounds.bottom - bounds.top - gridTitleH;
    const rowTitleH = rowTitles.length > 0 ? 22 : 0;
    const rowHeight = (areaHeight - rowTitleH * totalRows - rowGap * (totalRows - 1)) / totalRows;
    const colWidth = (areaWidth - colGap * (maxColumns - 1)) / maxColumns;

    const panels = [];
    let chartIndex = 0;

    rowPattern.forEach((colsInRow, rowIndex) => {
      const rowY = bounds.top + gridTitleH + rowIndex * (rowHeight + rowTitleH + rowGap);

      if (rowTitles[rowIndex] && this.root) {
        this.root
          .append('text')
          .attr('x', bounds.left + areaWidth / 2)
          .attr('y', rowY + 15)
          .attr('text-anchor', 'middle')
          .attr('fill', '#4b5563')
          .attr('font-size', 14)
          .attr('font-weight', 600)
          .text(rowTitles[rowIndex]);
      }

      const panelStartY = rowY + rowTitleH;
      const rowContentWidth = colsInRow * colWidth + (colsInRow - 1) * colGap;
      const rowStartX = bounds.left + (areaWidth - rowContentWidth) / 2;

      for (let col = 0; col < colsInRow; col += 1) {
        const chart = charts[chartIndex] || null;
        if (!chart && !allowEmpty) break;

        panels.push({
          chart,
          x: rowStartX + col * (colWidth + colGap),
          y: panelStartY,
          width: colWidth,
          height: rowHeight,
          _gridIndex: panels.length,
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

    const base = import.meta.env.BASE_URL;
    const stripped = dataFile.startsWith('/') ? dataFile.slice(1) : dataFile;
    const resolvedPath = `${base}${stripped}`;
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
        this.renderLine(panel, dataset, panel.chart.config || {}, panel.chart);
      } else if (chartType === 'pie') {
        this.renderPie(panel, dataset, panel.chart.config || {});
      } else if (chartType === 'sankey') {
        this.renderSankey(panel, dataset, panel.chart.config || {});
      } else if (chartType === 'venn') {
        this.renderVenn(panel, dataset, panel.chart.config || {});
      } else if (chartType === 'bump') {
        this.renderBump(panel, dataset, panel.chart.config || {});
      } else {
        this.renderUnsupported(panel, `未対応チャート: ${chartType}`);
      }
    } catch (error) {
      this.renderUnsupported(panel, `描画エラー: ${chartType}`);
      console.error(error);
    }
  }

  renderLine(panel, dataset, config, chartMeta = {}) {
    if (!Array.isArray(dataset)) {
      this.renderUnsupported(panel, 'lineデータ形式が不正です');
      return;
    }

    const xField = config.xField || 'year';
    const yField = config.yField || 'value';
    const seriesField = config.seriesField || 'series';
    const baseRows = dataset.filter((d) => Number.isFinite(Number(d[xField])) && (Number.isFinite(Number(d[yField])) || d[yField] == null || String(d[yField]).trim() === '' || String(d[yField]).trim() === '―'));
    if (baseRows.length === 0) {
      this.renderUnsupported(panel, 'lineデータが空です');
      return;
    }

    const defaultXDomain = d3.extent(baseRows, (d) => Number(d[xField]));
    const configuredXDomain = Array.isArray(config.xDomain) && config.xDomain.length === 2
      ? [Number(config.xDomain[0]), Number(config.xDomain[1])]
      : null;
    const targetXDomain = configuredXDomain && configuredXDomain.every(Number.isFinite)
      ? [Math.min(configuredXDomain[0], configuredXDomain[1]), Math.max(configuredXDomain[0], configuredXDomain[1])]
      : [Number(defaultXDomain[0]), Number(defaultXDomain[1])];
    if (!targetXDomain.every(Number.isFinite) || targetXDomain[0] === targetXDomain[1]) {
      this.renderUnsupported(panel, 'lineのx軸設定が不正です');
      return;
    }

    const rows = baseRows.filter((d) => {
      const xValue = Number(d[xField]);
      return xValue >= targetXDomain[0] && xValue <= targetXDomain[1];
    });
    if (rows.length === 0) {
      this.renderUnsupported(panel, 'lineデータが空です');
      return;
    }

    const yMax = d3.max(rows, (d) => Number(d[yField])) || 0;
    const configYDomain = Array.isArray(config.yDomain) && config.yDomain.length === 2
      ? config.yDomain.map(Number)
      : null;
    const targetYScale = d3.scaleLinear().domain(configYDomain || [0, yMax * 1.1]).nice();
    const targetYDomain = configYDomain || targetYScale.domain();

    const spanIdRaw = chartMeta?.span?.id;
    const spanId = spanIdRaw == null ? null : String(spanIdRaw).trim();
    const shouldAnimateSpan = Boolean(chartMeta?.transitionFromPrevious && spanId);
    const previousSpanState = shouldAnimateSpan ? this.lineSpanState.get(spanId) : null;
    const startXDomain = previousSpanState?.xDomain || targetXDomain;
    const startYDomain = previousSpanState?.yDomain || targetYDomain;

    const title = config.title || '折れ線グラフ';
    const inner = this.createPanelInner(panel, title);
    const width = inner.width;
    const height = inner.height;
    const grouped = d3.groups(rows, (d) => (d[seriesField] == null ? '__single__' : String(d[seriesField])));
    const hasMultiSeries = grouped.length > 1 && grouped.some(([key]) => key !== '__single__');
    const labelGutter = hasMultiSeries ? this.resolveLineLabelGutter(width) : 0;
    const leftGutter = this.resolveYAxisLabelGutter(rows, yField);
    const topInset = 6;
    const bottomInset = 24;
    const plotWidth = Math.max(80, width - leftGutter - labelGutter);
    const plotHeight = Math.max(80, height - topInset - bottomInset);

    const plotGroup = inner.group
      .append('g')
      .attr('transform', `translate(${leftGutter}, ${topInset})`);

    const x = d3
      .scaleLinear()
      .domain(startXDomain)
      .range([0, plotWidth]);
    const y = d3
      .scaleLinear()
      .domain(startYDomain)
      .range([plotHeight, 0]);

    const xAxis = d3.axisBottom(x).ticks(5).tickFormat(d3.format('d'));
    const yAxis = d3.axisLeft(y).ticks(5);
    const styleAxisText = (g) => g.selectAll('text').attr('fill', '#4b5563').attr('font-size', 11);
    const styleAxisLines = (g) => g.selectAll('line,path').attr('stroke', '#d1d5db').attr('opacity', 0.5);

    // グリッドライン（水平）
    let gridGroup = null;
    if (config.gridLines !== false) {
      gridGroup = plotGroup.append('g').attr('class', 'grid-lines');
      const gridTicks = y.ticks(5);
      gridGroup
        .selectAll('line')
        .data(gridTicks)
        .enter()
        .append('line')
        .attr('x1', 0)
        .attr('y1', (d) => y(d))
        .attr('x2', plotWidth)
        .attr('y2', (d) => y(d))
        .attr('stroke', '#d1d5db')
        .attr('stroke-opacity', 0.12)
        .attr('stroke-dasharray', '2 4');
    }

    const xAxisGroup = plotGroup
      .append('g')
      .attr('transform', `translate(0, ${plotHeight})`)
      .call(xAxis)
      .call(styleAxisText)
      .call(styleAxisLines);

    const yAxisGroup = plotGroup
      .append('g')
      .call(yAxis)
      .call(styleAxisText)
      .call(styleAxisLines);

    const isDefined = (d) => d[yField] != null && d[yField] !== '' && Number.isFinite(Number(d[yField]));

    const line = d3
      .line()
      .defined(isDefined)
      .x((d) => x(Number(d[xField])))
      .y((d) => y(Number(d[yField])))
      .curve(d3.curveMonotoneX);

    // Area fill ジェネレータ
    const areaGen = config.areaFill !== false
      ? d3.area()
          .defined(isDefined)
          .x((d) => x(Number(d[xField])))
          .y0(plotHeight)
          .y1((d) => y(Number(d[yField])))
          .curve(d3.curveMonotoneX)
      : null;

    if (!hasMultiSeries) {
      const themeColor = this.getThemePrimary();

      // Area fill
      let areaPath = null;
      if (areaGen) {
        const gradId = `area-grad-single-${panel.x}-${panel.y}`;
        this.defs
          .append('linearGradient')
          .attr('id', gradId)
          .attr('x1', '0%').attr('y1', '0%')
          .attr('x2', '0%').attr('y2', '100%')
          .selectAll('stop')
          .data([
            { offset: '0%', color: themeColor, opacity: 0.25 },
            { offset: '100%', color: themeColor, opacity: 0 },
          ])
          .enter()
          .append('stop')
          .attr('offset', (d) => d.offset)
          .attr('stop-color', (d) => d.color)
          .attr('stop-opacity', (d) => d.opacity);

        areaPath = plotGroup
          .append('path')
          .datum(rows)
          .attr('fill', `url(#${gradId})`)
          .attr('opacity', 0)
          .attr('d', areaGen);
      }

      const path = plotGroup
        .append('path')
        .datum(rows)
        .attr('fill', 'none')
        .attr('stroke', themeColor)
        .attr('stroke-width', 2.5)
        .attr('d', line);

      const points = plotGroup
        .selectAll('.point')
        .data(rows.filter(isDefined))
        .enter()
        .append('circle')
        .attr('cx', (d) => x(Number(d[xField])))
        .attr('cy', (d) => y(Number(d[yField])))
        .attr('r', 2.7)
        .attr('fill', themeColor);

      if (shouldAnimateSpan && previousSpanState) {
        x.domain(targetXDomain);
        y.domain(targetYDomain);
        const transition = d3.transition().duration(850).ease(d3.easeCubicInOut);

        // グリッドライン更新
        if (gridGroup) {
          gridGroup.selectAll('line').remove();
          const newTicks = y.ticks(5);
          gridGroup.selectAll('line').data(newTicks).enter().append('line')
            .attr('x1', 0).attr('y1', (d) => y(d)).attr('x2', plotWidth).attr('y2', (d) => y(d))
            .attr('stroke', '#d1d5db').attr('stroke-opacity', 0.12).attr('stroke-dasharray', '2 4');
        }

        xAxisGroup
          .transition(transition)
          .call(xAxis)
          .call(styleAxisText)
          .call(styleAxisLines);
        yAxisGroup
          .transition(transition)
          .call(yAxis)
          .call(styleAxisText)
          .call(styleAxisLines);
        path.transition(transition).attr('d', line).on('end', () => {
          this.renderLineAnnotations(plotGroup, x, y, plotWidth, plotHeight, config.annotations);
        });
        if (areaPath) areaPath.transition(transition).attr('d', areaGen).attr('opacity', 1);
        points
          .transition(transition)
          .attr('cx', (d) => x(Number(d[xField])))
          .attr('cy', (d) => y(Number(d[yField])));
      } else {
        this.renderLineAnnotations(plotGroup, x, y, plotWidth, plotHeight, config.annotations);
        const len = path.node()?.getTotalLength() || 0;
        path
          .attr('stroke-dasharray', `${len} ${len}`)
          .attr('stroke-dashoffset', len)
          .transition()
          .duration(700)
          .ease(d3.easeCubicOut)
          .attr('stroke-dashoffset', 0);
        if (areaPath) areaPath.transition().duration(700).ease(d3.easeCubicOut).attr('opacity', 1);
      }

      // ツールチップ（単一系列）
      this.attachLineTooltip(plotGroup, [{ name: '__single__', values: rows }], x, y, plotWidth, plotHeight, xField, yField, () => themeColor);

      if (spanId) {
        this.lineSpanState.set(spanId, { xDomain: [...targetXDomain], yDomain: [...targetYDomain] });
      }
      return;
    }

    const seriesData = grouped
      .map(([name, values]) => ({
        name,
        values: [...values].sort((a, b) => Number(a[xField]) - Number(b[xField])),
      }))
      .filter((s) => s.values.length > 0);

    const palette = this.buildPalette(seriesData.length);
    const color = d3.scaleOrdinal().domain(seriesData.map((s) => s.name)).range(palette);

    const seriesGroup = plotGroup.append('g').attr('class', 'line-series');
    const pathNodes = [];
    const pointNodes = [];
    const areaNodes = [];

    seriesData.forEach((series, si) => {
      // Area fill (multi-series)
      let seriesArea = null;
      if (areaGen) {
        const gradId = `area-grad-${si}-${panel.x}-${panel.y}`;
        const seriesColor = color(series.name);
        this.defs
          .append('linearGradient')
          .attr('id', gradId)
          .attr('x1', '0%').attr('y1', '0%')
          .attr('x2', '0%').attr('y2', '100%')
          .selectAll('stop')
          .data([
            { offset: '0%', color: seriesColor, opacity: 0.18 },
            { offset: '100%', color: seriesColor, opacity: 0 },
          ])
          .enter()
          .append('stop')
          .attr('offset', (d) => d.offset)
          .attr('stop-color', (d) => d.color)
          .attr('stop-opacity', (d) => d.opacity);

        seriesArea = seriesGroup
          .append('path')
          .datum(series.values)
          .attr('fill', `url(#${gradId})`)
          .attr('opacity', 0)
          .attr('d', areaGen);
      }
      areaNodes.push(seriesArea);

      const path = seriesGroup
        .append('path')
        .datum(series.values)
        .attr('fill', 'none')
        .attr('stroke', color(series.name))
        .attr('stroke-width', 2.2)
        .attr('d', line);

      pathNodes.push(path);

      const points = seriesGroup
        .selectAll(`.point-${this.toSafeCssToken(series.name)}`)
        .data(series.values.filter(isDefined))
        .enter()
        .append('circle')
        .attr('cx', (d) => x(Number(d[xField])))
        .attr('cy', (d) => y(Number(d[yField])))
        .attr('r', 2.2)
        .attr('fill', color(series.name));

      pointNodes.push(points);
    });

    if (shouldAnimateSpan && previousSpanState) {
      x.domain(targetXDomain);
      y.domain(targetYDomain);
      const transition = d3.transition().duration(850).ease(d3.easeCubicInOut);

      // グリッドライン更新
      if (gridGroup) {
        gridGroup.selectAll('line').remove();
        const newTicks = y.ticks(5);
        gridGroup.selectAll('line').data(newTicks).enter().append('line')
          .attr('x1', 0).attr('y1', (d) => y(d)).attr('x2', plotWidth).attr('y2', (d) => y(d))
          .attr('stroke', '#d1d5db').attr('stroke-opacity', 0.12).attr('stroke-dasharray', '2 4');
      }

      xAxisGroup
        .transition(transition)
        .call(xAxis)
        .call(styleAxisText)
        .call(styleAxisLines);
      yAxisGroup
        .transition(transition)
        .call(yAxis)
        .call(styleAxisText)
        .call(styleAxisLines);

      pathNodes.forEach((path, index) => {
        path.transition(transition).attr('d', line).on('end', () => {
          if (index === 0) {
            this.renderLineAnnotations(plotGroup, x, y, plotWidth, plotHeight, config.annotations);
            this.drawLineEndLabels(plotGroup, seriesData, color, x, y, plotWidth, plotHeight, xField, yField);
          }
        });
      });
      areaNodes.forEach((ap) => {
        if (ap) ap.transition(transition).attr('d', areaGen).attr('opacity', 1);
      });
      pointNodes.forEach((points) => {
        points
          .transition(transition)
          .attr('cx', (d) => x(Number(d[xField])))
          .attr('cy', (d) => y(Number(d[yField])));
      });
    } else {
      this.renderLineAnnotations(plotGroup, x, y, plotWidth, plotHeight, config.annotations);
      pathNodes.forEach((path) => {
        const len = path.node()?.getTotalLength() || 0;
        path
          .attr('stroke-dasharray', `${len} ${len}`)
          .attr('stroke-dashoffset', len)
          .transition()
          .duration(700)
          .ease(d3.easeCubicOut)
          .attr('stroke-dashoffset', 0);
      });
      areaNodes.forEach((ap) => {
        if (ap) ap.transition().duration(700).ease(d3.easeCubicOut).attr('opacity', 1);
      });
      this.drawLineEndLabels(plotGroup, seriesData, color, x, y, plotWidth, plotHeight, xField, yField);
    }

    // ツールチップ（複数系列）
    this.attachLineTooltip(plotGroup, seriesData, x, y, plotWidth, plotHeight, xField, yField, (name) => color(name));

    if (spanId) {
      this.lineSpanState.set(spanId, { xDomain: [...targetXDomain], yDomain: [...targetYDomain] });
    }
  }

  attachLineTooltip(plotGroup, seriesData, xScale, yScale, plotWidth, plotHeight, xField, yField, colorFn) {
    const overlay = plotGroup
      .append('rect')
      .attr('width', plotWidth)
      .attr('height', plotHeight)
      .attr('fill', 'none')
      .style('pointer-events', 'all')
      .style('cursor', 'crosshair');

    const guideLine = plotGroup.append('line')
      .attr('y1', 0).attr('y2', plotHeight)
      .attr('stroke', '#ffffff').attr('stroke-opacity', 0)
      .attr('stroke-width', 0.8).attr('stroke-dasharray', '3 3');

    const tooltipGroup = plotGroup.append('g').attr('class', 'line-tooltip').attr('opacity', 0);

    // 全系列の全データポイントからユニークなx値を収集
    const allXValues = [...new Set(
      seriesData.flatMap((s) => s.values.map((d) => Number(d[xField])))
    )].sort((a, b) => a - b);

    const bisect = d3.bisector((d) => d).left;

    overlay.on('mousemove', (event) => {
      const [mx] = d3.pointer(event);
      const xVal = xScale.invert(mx);
      const idx = bisect(allXValues, xVal);
      const x0 = allXValues[idx - 1];
      const x1 = allXValues[idx];
      const nearest = x0 == null ? x1 : x1 == null ? x0 : (xVal - x0 < x1 - xVal ? x0 : x1);
      if (nearest == null) return;

      const px = xScale(nearest);
      guideLine.attr('x1', px).attr('x2', px).attr('stroke-opacity', 0.3);

      tooltipGroup.selectAll('*').remove();
      tooltipGroup.attr('opacity', 1);

      let ty = 0;
      seriesData.forEach((series) => {
        const point = series.values.find((d) => Number(d[xField]) === nearest);
        if (!point) return;
        const py = yScale(Number(point[yField]));
        const c = colorFn(series.name);

        // ハイライト円
        tooltipGroup.append('circle')
          .attr('cx', px).attr('cy', py).attr('r', 4)
          .attr('fill', c).attr('stroke', '#fff').attr('stroke-width', 1.5);

        // 値ラベル
        const labelX = px + 8;
        const labelY = 12 + ty * 16;
        tooltipGroup.append('rect')
          .attr('x', labelX - 2).attr('y', labelY - 10)
          .attr('width', 70).attr('height', 14)
          .attr('rx', 3).attr('fill', 'rgba(255,255,255,0.92)');
        tooltipGroup.append('text')
          .attr('x', labelX).attr('y', labelY)
          .attr('fill', c).attr('font-size', 10).attr('font-weight', 500)
          .text(d3.format(',')(Number(point[yField])));
        ty += 1;
      });

      // 年ラベル
      tooltipGroup.append('text')
        .attr('x', px).attr('y', plotHeight + 16)
        .attr('text-anchor', 'middle').attr('fill', '#4b5563').attr('font-size', 10)
        .text(d3.format('d')(nearest));
    });

    overlay.on('mouseleave', () => {
      guideLine.attr('stroke-opacity', 0);
      tooltipGroup.attr('opacity', 0);
    });
  }

  drawLineEndLabels(group, seriesData, color, xScale, yScale, plotWidth, plotHeight, xField, yField) {
    if (!Array.isArray(seriesData) || seriesData.length === 0) return;

    const labelX = plotWidth + 10;
    const minGap = 12;
    const minY = 8;
    const maxY = Math.max(minY, plotHeight - 8);

    const labelNodes = seriesData
      .map((series) => {
        const last = series.values[series.values.length - 1];
        if (!last) return null;
        const xValue = Number(last[xField]);
        const yValue = Number(last[yField]);
        if (!Number.isFinite(xValue) || !Number.isFinite(yValue)) return null;
        return {
          name: series.name,
          xEnd: xScale(xValue),
          yTarget: yScale(yValue),
          y: yScale(yValue),
        };
      })
      .filter(Boolean)
      .sort((a, b) => a.yTarget - b.yTarget);

    if (labelNodes.length === 0) return;

    // まず理想位置を維持しつつ、上から順に最小間隔を確保する
    labelNodes.forEach((node, i) => {
      if (i === 0) {
        node.y = Math.max(minY, node.yTarget);
      } else {
        node.y = Math.max(node.yTarget, labelNodes[i - 1].y + minGap);
      }
    });

    // 下端超えを解消するため、下から逆方向にも詰める
    labelNodes[labelNodes.length - 1].y = Math.min(labelNodes[labelNodes.length - 1].y, maxY);
    for (let i = labelNodes.length - 2; i >= 0; i -= 1) {
      labelNodes[i].y = Math.min(labelNodes[i].y, labelNodes[i + 1].y - minGap);
    }

    // 系列数が多く収まらない場合は、均等配置にフォールバック
    if (labelNodes[0].y < minY) {
      if (labelNodes.length === 1) {
        labelNodes[0].y = (minY + maxY) / 2;
      } else {
        const step = (maxY - minY) / (labelNodes.length - 1);
        labelNodes.forEach((node, i) => {
          node.y = minY + step * i;
        });
      }
    }

    const layer = group.append('g').attr('class', 'line-end-labels');

    layer
      .selectAll('line')
      .data(labelNodes)
      .enter()
      .append('line')
      .attr('x1', (d) => d.xEnd + 2)
      .attr('y1', (d) => d.yTarget)
      .attr('x2', labelX - 4)
      .attr('y2', (d) => d.y)
      .attr('stroke', (d) => color(d.name))
      .attr('stroke-opacity', 0.8)
      .attr('stroke-width', 1);

    layer
      .selectAll('text')
      .data(labelNodes)
      .enter()
      .append('text')
      .attr('x', labelX)
      .attr('y', (d) => d.y)
      .attr('dominant-baseline', 'middle')
      .attr('fill', (d) => color(d.name))
      .attr('font-size', 10)
      .attr('font-weight', 600)
      .text((d) => d.name);
  }

  renderLineAnnotations(group, xScale, yScale, width, height, annotations) {
    if (!Array.isArray(annotations) || annotations.length === 0) return;

    const xDomain = xScale.domain();
    const yDomain = yScale.domain();
    const descriptors = [];

    for (const ann of annotations) {
      const type = ann?.type;
      const label = String(ann?.label || '');
      const color = ann?.color || ANNOTATION_DEFAULTS.color;
      const wrap = ann?.wrap || ANNOTATION_DEFAULTS.wrapWidth;

      if (type === 'verticalLine') {
        const raw = ann.year ?? ann.x ?? ann.value;
        const value = Number(raw);
        if (!Number.isFinite(value)) continue;
        if (value < Math.min(...xDomain) || value > Math.max(...xDomain)) continue;

        const x = xScale(value);
        descriptors.push({
          type: annotationXYThreshold,
          note: { label, wrap },
          color,
          x,
          y: 0,
          dx: ann.dx ?? ANNOTATION_DEFAULTS.verticalLine.dx,
          dy: ann.dy ?? ANNOTATION_DEFAULTS.verticalLine.dy,
          subject: { y1: 0, y2: height },
        });
      } else if (type === 'horizontalLine') {
        const raw = ann.y ?? ann.value;
        const value = Number(raw);
        if (!Number.isFinite(value)) continue;
        if (value < Math.min(...yDomain) || value > Math.max(...yDomain)) continue;

        const y = yScale(value);
        descriptors.push({
          type: annotationXYThreshold,
          note: { label, wrap },
          color,
          x: 0,
          y,
          dx: ann.dx ?? ANNOTATION_DEFAULTS.horizontalLine.dx,
          dy: ann.dy ?? ANNOTATION_DEFAULTS.horizontalLine.dy,
          subject: { x1: 0, x2: width },
        });
      } else if (type === 'callout') {
        const xVal = Number(ann.x);
        const yVal = Number(ann.y);
        if (!Number.isFinite(xVal) || !Number.isFinite(yVal)) continue;

        const connectorType = ann.connector === 'curve' ? annotationCalloutCurve : annotationCalloutElbow;
        descriptors.push({
          type: connectorType,
          note: { label, wrap },
          color,
          x: xScale(xVal),
          y: yScale(yVal),
          dx: ann.dx ?? ANNOTATION_DEFAULTS.callout.dx,
          dy: ann.dy ?? ANNOTATION_DEFAULTS.callout.dy,
        });
      }
    }

    if (descriptors.length === 0) return;

    const makeAnnotations = annotation()
      .annotations(descriptors);

    const layer = group.append('g')
      .attr('class', 'chart-annotations')
      .call(makeAnnotations);

    // subject線（閾値線）を破線スタイルに
    layer.selectAll('.annotation .subject path, .annotation .subject line')
      .attr('stroke-dasharray', ANNOTATION_DEFAULTS.lineDash)
      .attr('stroke-opacity', ANNOTATION_DEFAULTS.lineOpacity);
  }

  renderPie(panel, dataset, config) {
    const pieData = this.resolvePieDataset(dataset, config);
    if (!Array.isArray(pieData) || pieData.length === 0) {
      this.renderUnsupported(panel, 'pieデータが空です');
      return;
    }

    const labelField = config.labelField || 'label';
    const valueField = config.valueField || 'value';
    const rows = pieData
      .map((d) => ({
        ...d,
        __pieValue: this.parsePieNumericValue(d[valueField]),
      }))
      .filter((d) => d[labelField] != null && Number.isFinite(d.__pieValue));
    if (rows.length === 0) {
      this.renderUnsupported(panel, 'pieデータが不正です');
      return;
    }

    const title = config.title || config.groupTitle || '円グラフ';
    const inner = this.createPanelInner(panel, title, { compact: true });
    const radius = Math.max(24, Math.min(inner.width, inner.height) * 0.33);

    const pie = d3.pie().value((d) => d.__pieValue).sort(null);
    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    const palette = this.buildPalette(rows.length);
    if (config.remainderColor && rows.length === 2) {
      palette[1] = config.remainderColor;
    }
    const root = inner.group
      .append('g')
      .attr('transform', `translate(${inner.width / 2}, ${inner.height / 2 - 8})`);

    const staggerDelay = panel._gridIndex != null ? panel._gridIndex * 80 : 0;

    const arcsData = pie(rows);
    const totalEndAngle = arcsData[arcsData.length - 1].endAngle;

    root
      .selectAll('path')
      .data(arcsData)
      .enter()
      .append('path')
      .attr('fill', (_, i) => palette[i])
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 1)
      .attr('opacity', 0.95)
      .attr('d', (d) => arc({ ...d, endAngle: d.startAngle }))
      .transition()
      .duration(800)
      .delay(staggerDelay)
      .ease(d3.easeCubicOut)
      .attrTween('d', (d) => {
        return (t) => {
          const sweep = t * totalEndAngle;
          if (sweep <= d.startAngle) {
            return arc({ ...d, endAngle: d.startAngle });
          }
          return arc({ ...d, endAngle: Math.min(d.endAngle, sweep) });
        };
      });

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
        .attr('fill', '#4b5563')
        .attr('font-size', 10)
        .text(`${row[labelField]}: ${row[valueField]}`);
    });
  }

  resolvePieDataset(dataset, config) {
    if (Array.isArray(dataset)) {
      const rowField = config.rowField;
      const rowValue = config.rowValue;
      if (rowField && rowValue != null) {
        const row = dataset.find((d) => String(d?.[rowField] ?? '').trim() === String(rowValue).trim());
        if (!row) return [];

        const categoryColumns = Array.isArray(config.categoryColumns) && config.categoryColumns.length > 0
          ? config.categoryColumns
          : Object.keys(row).filter((key) => key !== rowField);

        const selected = categoryColumns
          .map((label) => ({ label, value: this.parsePieNumericValue(row[label]) }))
          .filter((d) => Number.isFinite(d.value));

        if (selected.length === 0) return [];

        if (selected.length === 1 && config.primaryLabel) {
          selected[0].label = String(config.primaryLabel);
        }

        if (selected.length === 1 && Number.isFinite(Number(config.normalizeTo))) {
          const total = Number(config.normalizeTo);
          const remainder = Math.max(0, total - selected[0].value);
          selected.push({
            label: config.remainderLabel || '未治療',
            value: remainder,
          });
        }

        return selected;
      }
      return dataset;
    }
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

  parsePieNumericValue(value) {
    if (Number.isFinite(value)) return Number(value);
    if (typeof value === 'string') {
      const normalized = value.replace(/,/g, '').replace(/%/g, '').trim();
      const numeric = Number(normalized);
      if (Number.isFinite(numeric)) return numeric;
    }
    return NaN;
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

    // ノードにレベルベースの色を割り当て
    const nodePalette = this.buildPalette(Math.max(levelKeys.length, 2));
    const nodes = [...nodeById.values()];
    nodes.forEach((node) => {
      node.color = nodePalette[Math.min(node.level, nodePalette.length - 1)];
    });

    const linkLayer = inner.group.append('g').attr('fill', 'none');
    const linkPaths = [];
    const levelDelay = 600; // レベルごとの遅延ms

    links.forEach((link, li) => {
      const thickness = Math.max(1.5, link.value * unit);
      const x1 = link.source.x + link.source.w;
      const y1 = link.source.y + link.source.outOffset + thickness / 2;
      const x2 = link.target.x;
      const y2 = link.target.y + link.target.inOffset + thickness / 2;
      link.source.outOffset += thickness;
      link.target.inOffset += thickness;

      const c1 = x1 + (x2 - x1) * 0.45;
      const c2 = x1 + (x2 - x1) * 0.55;
      const pathD = `M${x1},${y1} C${c1},${y1} ${c2},${y2} ${x2},${y2}`;

      // リンクグラデーション
      const gradId = `sankey-link-grad-${li}-${panel.x}-${panel.y}`;
      this.defs
        .append('linearGradient')
        .attr('id', gradId)
        .attr('gradientUnits', 'userSpaceOnUse')
        .attr('x1', x1).attr('y1', y1)
        .attr('x2', x2).attr('y2', y2)
        .selectAll('stop')
        .data([
          { offset: '0%', color: link.source.color },
          { offset: '100%', color: link.target.color },
        ])
        .enter()
        .append('stop')
        .attr('offset', (d) => d.offset)
        .attr('stop-color', (d) => d.color);

      const pathEl = linkLayer
        .append('path')
        .attr('d', pathD)
        .attr('stroke', `url(#${gradId})`)
        .attr('stroke-width', thickness)
        .attr('stroke-opacity', 0);

      // リンクのパス長を取得してstroke-dashで流れるアニメーション
      const pathNode = pathEl.node();
      const pathLength = pathNode.getTotalLength();
      pathEl
        .attr('stroke-dasharray', pathLength)
        .attr('stroke-dashoffset', pathLength);

      // リンクはソースノードの次のレベルタイミングで描画（ノード登場後に流れ出す）
      const linkDelay = link.source.level * levelDelay + 300;
      pathEl
        .transition()
        .delay(linkDelay)
        .duration(500)
        .ease(d3.easeCubicOut)
        .attr('stroke-opacity', 0.35)
        .attr('stroke-dashoffset', 0);

      linkPaths.push({ el: pathEl, link });
    });

    const nodeLayer = inner.group.append('g');

    const nodeRects = nodeLayer
      .selectAll('rect')
      .data(nodes)
      .enter()
      .append('rect')
      .attr('x', (d) => d.x)
      .attr('y', (d) => d.y)
      .attr('width', (d) => d.w)
      .attr('height', 0)
      .attr('fill', (d) => d.color)
      .attr('fill-opacity', 0)
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 0.6)
      .style('pointer-events', 'all')
      .style('cursor', 'pointer');

    // レベルごとに段階的にフェードイン
    nodeRects
      .transition()
      .delay((d) => d.level * levelDelay)
      .duration(400)
      .ease(d3.easeCubicOut)
      .attr('height', (d) => d.h)
      .attr('fill-opacity', 0.88);

    // ホバー強調
    nodeRects
      .on('mouseenter', (_event, hoveredNode) => {
        linkPaths.forEach(({ el, link }) => {
          const isRelated = link.source.id === hoveredNode.id || link.target.id === hoveredNode.id;
          el.transition().duration(200).attr('stroke-opacity', isRelated ? 0.7 : 0.08);
        });
      })
      .on('mouseleave', () => {
        linkPaths.forEach(({ el }) => {
          el.transition().duration(200).attr('stroke-opacity', 0.35);
        });
      });

    // ラベルもレベルごとにフェードイン
    nodeLayer
      .selectAll('text.sankey-label')
      .data(nodes)
      .enter()
      .append('text')
      .attr('class', 'sankey-label')
      .attr('x', (d) => (d.level === 0 ? d.x + d.w + 6 : d.x - 6))
      .attr('y', (d) => d.y + d.h / 2 + 3)
      .attr('text-anchor', (d) => (d.level === 0 ? 'start' : 'end'))
      .attr('fill', '#1f2937')
      .attr('font-size', 11)
      .attr('opacity', 0)
      .text((d) => d.label)
      .transition()
      .delay((d) => d.level * levelDelay + 200)
      .duration(300)
      .attr('opacity', 1);
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
    const vennData = this.resolveVennDataset(dataset, config);
    if (!vennData || !Array.isArray(vennData.sets) || vennData.sets.length === 0) {
      this.renderUnsupported(panel, 'vennデータが不正です');
      return;
    }

    const title = config.title || vennData.title || 'ベン図';
    const inner = this.createPanelInner(panel, title, { compact: true });

    const areas = vennData.sets
      .filter((d) => Array.isArray(d?.sets) && d.sets.length >= 1 && Number.isFinite(Number(d.size)))
      .map((d) => ({ sets: d.sets.map((s) => String(s)), size: Math.max(0, Number(d.size)) }));

    const setNames = [...new Set(areas.filter((d) => d.sets.length === 1).map((d) => d.sets[0]))];
    if (setNames.length < 2 || setNames.length > 3) {
      this.renderUnsupported(panel, 'ベン図は2〜3集合を想定しています');
      return;
    }
    if (areas.length === 0) {
      this.renderUnsupported(panel, 'vennデータが不正です');
      return;
    }

    const palette = this.buildPalette(setNames.length);
    const colorBySet = new Map(setNames.map((name, idx) => [name, palette[idx]]));
    const areaKey = (sets) => sets.slice().sort().join('&');
    const areaMap = new Map(areas.map((d) => [areaKey(d.sets), d]));

    let layout;
    try {
      layout = vennjs.layout(areas, {
        width: inner.width,
        height: inner.height,
        padding: 6,
        round: 2,
      });
    } catch (error) {
      console.warn('venn layout failed', error);
      this.renderUnsupported(panel, 'vennレイアウトの計算に失敗しました');
      return;
    }
    if (!Array.isArray(layout) || layout.length === 0) {
      this.renderUnsupported(panel, 'vennレイアウト結果が空です');
      return;
    }

    // Gooey SVGフィルター定義（円の重なりを有機的に融合）
    const filterId = `gooey-${Math.random().toString(36).slice(2, 8)}`;
    let defs = inner.group.select('defs');
    if (defs.empty()) defs = inner.group.append('defs');
    const filter = defs.append('filter').attr('id', filterId);
    filter.append('feGaussianBlur')
      .attr('in', 'SourceGraphic')
      .attr('stdDeviation', 5)
      .attr('result', 'blur');
    filter.append('feColorMatrix')
      .attr('in', 'blur')
      .attr('mode', 'matrix')
      .attr('values', '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7')
      .attr('result', 'gooey');

    const gooeyGroup = inner.group.append('g')
      .style('filter', `url(#${filterId})`);
    const g = inner.group.append('g');

    // ベン図のスケール＋フェードアニメーション
    const cx = inner.width / 2;
    const cy = inner.height / 2;

    // layoutから実際の円データ（x, y, radius）を抽出して<circle>で描画
    const singletonLayout = layout.filter((d) => d.data.sets.length === 1);
    singletonLayout.forEach((entry) => {
      const setName = entry.data.sets[0];
      const circleData = entry.circles.find((c) => c.set === setName) || entry.circles[0];
      if (!circleData) return;

      gooeyGroup.append('circle')
        .attr('cx', circleData.x)
        .attr('cy', circleData.y)
        .attr('r', circleData.radius)
        .attr('fill', colorBySet.get(setName) || '#5fb3ff')
        .attr('fill-opacity', 0)
        .attr('stroke', 'none')
        .attr('transform', `translate(${cx - circleData.x * 0.7},${cy - circleData.y * 0.7}) scale(0.3)`)
        .transition()
        .duration(600)
        .ease(d3.easeCubicOut)
        .attr('fill-opacity', 0.55)
        .attr('transform', 'translate(0,0) scale(1)');
    });

    singletonLayout.forEach((entry) => {
      const setName = entry.data.sets[0];
      const circleData2 = entry.circles.find((c) => c.set === setName) || entry.circles[0];
      if (!circleData2) return;

      g.append('text')
        .attr('x', circleData2.x)
        .attr('y', Math.max(10, circleData2.y - circleData2.radius - 8))
        .attr('text-anchor', 'middle')
        .attr('fill', '#1f2937')
        .attr('font-size', 10)
        .attr('opacity', 0)
        .transition()
        .duration(400)
        .delay(200)
        .attr('opacity', 1)
        .text(setName);
    });

    // 数値ラベルの配置データを収集
    const labelEntries = [];

    if (setNames.length === 2) {
      const leftName = setNames[0];
      const rightName = setNames[1];
      const inter = areaMap.get(areaKey([leftName, rightName]))?.size ?? 0;
      const leftTotal = areaMap.get(areaKey([leftName]))?.size ?? 0;
      const rightTotal = areaMap.get(areaKey([rightName]))?.size ?? 0;
      const valueByArea = new Map([
        [areaKey([leftName]), Math.max(0, leftTotal - inter)],
        [areaKey([rightName]), Math.max(0, rightTotal - inter)],
        [areaKey([leftName, rightName]), Math.max(0, inter)],
      ]);

      layout
        .filter((d) => valueByArea.has(areaKey(d.data.sets)))
        .forEach((d) => {
          const value = valueByArea.get(areaKey(d.data.sets));
          if (!Number.isFinite(value)) return;
          labelEntries.push({ x: d.text.x, y: d.text.y + 3, text: d3.format(',')(value), sets: d.data.sets });
        });
    }

    if (setNames.length === 3) {
      layout
        .filter((d) => d.data.sets.length >= 2)
        .forEach((d) => {
          const area = areaMap.get(areaKey(d.data.sets));
          if (!area) return;
          labelEntries.push({ x: d.text.x, y: d.text.y + 3, text: d3.format(',')(area.size), sets: d.data.sets });
        });
    }

    // ラベル衝突検出＋自動オフセット
    const fontSize = 10;
    const charWidth = 5.5;
    const labelHeight = fontSize + 2;
    const padding = 4;

    const resolvedLabels = labelEntries.map((l) => ({
      ...l,
      width: l.text.length * charWidth,
      height: labelHeight,
      finalX: l.x,
      finalY: l.y,
    }));

    // 重なり検出：全ペアでバウンディングボックスの衝突をチェックし、Y方向にオフセット
    for (let i = 0; i < resolvedLabels.length; i++) {
      for (let j = i + 1; j < resolvedLabels.length; j++) {
        const a = resolvedLabels[i];
        const b = resolvedLabels[j];
        const overlapX = Math.abs(a.finalX - b.finalX) < (a.width + b.width) / 2 + padding;
        const overlapY = Math.abs(a.finalY - b.finalY) < (a.height + b.height) / 2 + padding;
        if (overlapX && overlapY) {
          // 交差領域（sets.length > 1）のラベルを上に移動、それ以外は下に
          if (a.sets.length > 1) {
            a.finalY -= labelHeight + padding;
          } else if (b.sets.length > 1) {
            b.finalY -= labelHeight + padding;
          } else {
            // 両方とも単一セット：右側を下にオフセット
            if (a.finalX < b.finalX) {
              b.finalY += labelHeight + padding;
            } else {
              a.finalY += labelHeight + padding;
            }
          }
        }
      }
    }

    // ラベル描画
    resolvedLabels.forEach((l) => {
      g.append('text')
        .attr('x', l.finalX)
        .attr('y', l.finalY)
        .attr('text-anchor', 'middle')
        .attr('fill', '#1f2937')
        .attr('font-size', fontSize)
        .attr('opacity', 0)
        .text(l.text)
        .transition()
        .duration(400)
        .delay(350)
        .attr('opacity', 1);
    });
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

  renderBump(panel, dataset, config) {
    if (!Array.isArray(dataset) || dataset.length === 0) {
      this.renderUnsupported(panel, 'bumpデータが空です');
      return;
    }

    const xField = config.xField || 'year';
    const yField = config.yField || 'rank';
    const seriesField = config.seriesField || 'country';
    const maxRank = config.maxRank || 5;
    const title = config.title || '順位推移';
    const highlightSet = new Set(
      Array.isArray(config.highlight) ? config.highlight : config.highlight ? [config.highlight] : []
    );
    const hasHighlight = highlightSet.size > 0;

    const xMin = config.xMin != null ? Number(config.xMin) : -Infinity;
    const xMax = config.xMax != null ? Number(config.xMax) : Infinity;
    const rows = dataset.filter(
      (d) => d[xField] != null && Number.isFinite(Number(d[yField])) &&
             Number(d[xField]) >= xMin && Number(d[xField]) <= xMax
    );
    if (rows.length === 0) {
      this.renderUnsupported(panel, 'bumpデータが空です');
      return;
    }

    const inner = this.createPanelInner(panel, title, { source: config.source });
    const width = inner.width;
    const height = inner.height;

    const xValues = [...new Set(rows.map((d) => Number(d[xField])))].sort((a, b) => a - b);
    const seriesNames = [...new Set(rows.map((d) => String(d[seriesField])))];
    const palette = this.buildPalette(seriesNames.length);
    const color = d3.scaleOrdinal().domain(seriesNames).range(palette);

    const labelGutter = this.resolveLineLabelGutter(width);
    const leftGutter = 32;
    const topInset = 6;
    const bottomInset = 24;
    const plotWidth = Math.max(80, width - leftGutter - labelGutter);
    const plotHeight = Math.max(80, height - topInset - bottomInset);

    const plotGroup = inner.group
      .append('g')
      .attr('transform', `translate(${leftGutter}, ${topInset})`);

    const x = d3
      .scalePoint()
      .domain(xValues.map(String))
      .range([0, plotWidth])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0.5, maxRank + 0.5])
      .range([0, plotHeight]);

    // グリッドライン（水平 - 各順位）
    if (config.gridLines !== false) {
      const gridGroup = plotGroup.append('g').attr('class', 'grid-lines');
      for (let rank = 1; rank <= maxRank; rank += 1) {
        gridGroup
          .append('line')
          .attr('x1', 0)
          .attr('y1', y(rank))
          .attr('x2', plotWidth)
          .attr('y2', y(rank))
          .attr('stroke', '#d1d5db')
          .attr('stroke-opacity', 0.15)
          .attr('stroke-dasharray', '2 4');
      }
    }

    // X軸
    const xAxis = d3.axisBottom(x).tickFormat(d3.format('d'));
    const styleAxisText = (g) => g.selectAll('text').attr('fill', '#4b5563').attr('font-size', 11);
    const styleAxisLines = (g) => g.selectAll('line,path').attr('stroke', '#d1d5db').attr('opacity', 0.5);

    plotGroup
      .append('g')
      .attr('transform', `translate(0, ${plotHeight})`)
      .call(xAxis)
      .call(styleAxisText)
      .call(styleAxisLines);

    // Y軸（順位ラベル）
    const yAxis = d3
      .axisLeft(y)
      .tickValues(d3.range(1, maxRank + 1))
      .tickFormat((d) => `${d}位`);

    plotGroup
      .append('g')
      .call(yAxis)
      .call(styleAxisText)
      .call(styleAxisLines);

    // 系列データ構築
    const seriesData = seriesNames.map((name) => {
      const values = rows
        .filter((d) => String(d[seriesField]) === name)
        .sort((a, b) => Number(a[xField]) - Number(b[xField]));
      return { name, values };
    }).filter((s) => s.values.length > 0);

    // 線描画
    const line = d3
      .line()
      .x((d) => x(String(Number(d[xField]))))
      .y((d) => y(Number(d[yField])))
      .curve(d3.curveBumpX);

    const seriesGroup = plotGroup.append('g').attr('class', 'bump-series');

    seriesData.forEach((series) => {
      const seriesColor = color(series.name);
      const isHighlighted = !hasHighlight || highlightSet.has(series.name);
      const strokeW = isHighlighted ? 3.5 : 1.5;
      const strokeOp = isHighlighted ? 0.95 : 0.25;
      const circleR = isHighlighted ? 6 : 3.5;
      const circleOp = isHighlighted ? 1 : 0.3;

      // パス
      const path = seriesGroup
        .append('path')
        .datum(series.values)
        .attr('fill', 'none')
        .attr('stroke', seriesColor)
        .attr('stroke-width', strokeW)
        .attr('stroke-opacity', strokeOp)
        .attr('d', line);

      // ドローインアニメーション
      const len = path.node()?.getTotalLength() || 0;
      path
        .attr('stroke-dasharray', `${len} ${len}`)
        .attr('stroke-dashoffset', len)
        .transition()
        .duration(800)
        .ease(d3.easeCubicOut)
        .attr('stroke-dashoffset', 0);

      // データポイント円
      seriesGroup
        .selectAll(`.bump-point-${this.toSafeCssToken(series.name)}`)
        .data(series.values)
        .enter()
        .append('circle')
        .attr('cx', (d) => x(String(Number(d[xField]))))
        .attr('cy', (d) => y(Number(d[yField])))
        .attr('r', circleR)
        .attr('fill', seriesColor)
        .attr('stroke', '#fff')
        .attr('stroke-width', isHighlighted ? 2 : 1)
        .attr('opacity', 0)
        .transition()
        .delay(600)
        .duration(300)
        .attr('opacity', circleOp);
    });

    // 右端ラベル（最右のx値にデータがある系列のみ表示）
    const lastXValue = xValues[xValues.length - 1];
    const labelX = plotWidth + 10;
    const labelLayer = plotGroup.append('g').attr('class', 'bump-end-labels');
    seriesData.forEach((series) => {
      const last = series.values[series.values.length - 1];
      if (!last) return;
      if (Number(last[xField]) !== lastXValue) return;
      const ly = y(Number(last[yField]));
      labelLayer
        .append('text')
        .attr('x', labelX)
        .attr('y', ly)
        .attr('dominant-baseline', 'middle')
        .attr('fill', color(series.name))
        .attr('font-size', 10)
        .attr('font-weight', 600)
        .attr('opacity', 0)
        .text(series.name)
        .transition()
        .delay(800)
        .duration(300)
        .attr('opacity', 1);
    });

    // ツールチップ
    this.attachBumpTooltip(plotGroup, seriesData, x, y, plotWidth, plotHeight, xField, yField, color);
  }

  attachBumpTooltip(plotGroup, seriesData, xScale, yScale, plotWidth, plotHeight, xField, yField, color) {
    const overlay = plotGroup
      .append('rect')
      .attr('width', plotWidth)
      .attr('height', plotHeight)
      .attr('fill', 'none')
      .style('pointer-events', 'all')
      .style('cursor', 'crosshair');

    const guideLine = plotGroup.append('line')
      .attr('y1', 0).attr('y2', plotHeight)
      .attr('stroke', '#ffffff').attr('stroke-opacity', 0)
      .attr('stroke-width', 0.8).attr('stroke-dasharray', '3 3');

    const tooltipGroup = plotGroup.append('g').attr('class', 'bump-tooltip').attr('opacity', 0);

    const xDomain = xScale.domain();

    overlay.on('mousemove', (event) => {
      const [mx] = d3.pointer(event);
      // 最も近いx位置を見つける
      let nearest = xDomain[0];
      let minDist = Infinity;
      xDomain.forEach((xVal) => {
        const dist = Math.abs(xScale(xVal) - mx);
        if (dist < minDist) {
          minDist = dist;
          nearest = xVal;
        }
      });

      const px = xScale(nearest);
      guideLine.attr('x1', px).attr('x2', px).attr('stroke-opacity', 0.3);

      tooltipGroup.selectAll('*').remove();
      tooltipGroup.attr('opacity', 1);

      let ty = 0;
      seriesData.forEach((series) => {
        const point = series.values.find((d) => String(Number(d[xField])) === nearest);
        if (!point) return;
        const py = yScale(Number(point[yField]));
        const c = color(series.name);

        tooltipGroup.append('circle')
          .attr('cx', px).attr('cy', py).attr('r', 6)
          .attr('fill', c).attr('stroke', '#fff').attr('stroke-width', 2);

        const labelX = px + 10;
        const labelY = 12 + ty * 16;
        tooltipGroup.append('rect')
          .attr('x', labelX - 2).attr('y', labelY - 10)
          .attr('width', 90).attr('height', 14)
          .attr('rx', 3).attr('fill', 'rgba(255,255,255,0.92)');
        tooltipGroup.append('text')
          .attr('x', labelX).attr('y', labelY)
          .attr('fill', c).attr('font-size', 10).attr('font-weight', 500)
          .text(`${series.name}: ${point[yField]}位`);
        ty += 1;
      });

      tooltipGroup.append('text')
        .attr('x', px).attr('y', plotHeight + 16)
        .attr('text-anchor', 'middle').attr('fill', '#4b5563').attr('font-size', 10)
        .text(nearest);
    });

    overlay.on('mouseleave', () => {
      guideLine.attr('stroke-opacity', 0);
      tooltipGroup.attr('opacity', 0);
    });
  }

  renderUnsupported(panel, message) {
    const g = this.root
      .append('g')
      .attr('transform', `translate(${panel.x}, ${panel.y})`);

    g.append('rect')
      .attr('width', panel.width)
      .attr('height', panel.height)
      .attr('rx', 10)
      .attr('fill', '#f3f4f6')
      .attr('fill-opacity', 0.7)
      .attr('stroke', '#d1d5db')
      .attr('stroke-opacity', 0.5);

    g.append('text')
      .attr('x', panel.width / 2)
      .attr('y', panel.height / 2)
      .attr('text-anchor', 'middle')
      .attr('fill', '#374151')
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
      .attr('fill', '#f3f4f6')
      .attr('fill-opacity', 0.2)
      .attr('stroke', '#d1d5db')
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

    // Glow枠（背面）
    group
      .append('rect')
      .attr('width', panel.width)
      .attr('height', panel.height)
      .attr('rx', 10)
      .attr('fill', 'none')
      .attr('stroke', this.getThemePrimary())
      .attr('stroke-width', 1.5)
      .attr('stroke-opacity', 0.15)
      .attr('filter', 'url(#panel-glow)');

    group
      .append('rect')
      .attr('width', panel.width)
      .attr('height', panel.height)
      .attr('rx', 10)
      .attr('fill', '#f3f4f6')
      .attr('fill-opacity', 0.63)
      .attr('stroke', '#d1d5db')
      .attr('stroke-opacity', 0.35);

    if (title) {
      group
        .append('text')
        .attr('x', innerPad)
        .attr('y', innerPad + 3)
        .attr('dominant-baseline', 'hanging')
        .attr('fill', '#111827')
        .attr('font-size', compact ? 12 : 14)
        .attr('font-weight', 600)
        .text(title);
    }

    const sourceH = options.source ? 16 : 0;

    const innerGroup = group.append('g').attr('transform', `translate(${innerPad}, ${innerPad + titleH})`);
    const width = panel.width - innerPad * 2;
    const height = panel.height - innerPad * 2 - titleH - sourceH;

    // データソース表示
    if (options.source) {
      const src = options.source;
      const sourceY = panel.height - innerPad + 2;
      if (src.url) {
        const link = group.append('a')
          .attr('href', src.url)
          .attr('target', '_blank');
        link.append('text')
          .attr('x', panel.width - innerPad)
          .attr('y', sourceY)
          .attr('text-anchor', 'end')
          .attr('fill', '#6b7280')
          .attr('font-size', 9)
          .attr('text-decoration', 'underline')
          .text(`出典: ${src.name || src.url}`);
      } else {
        group.append('text')
          .attr('x', panel.width - innerPad)
          .attr('y', sourceY)
          .attr('text-anchor', 'end')
          .attr('fill', '#6b7280')
          .attr('font-size', 9)
          .text(`出典: ${src.name || ''}`);
      }
    }

    return { group: innerGroup, width, height };
  }

  drawBackdrop() {
    this.root
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', VIEWBOX_WIDTH)
      .attr('height', VIEWBOX_HEIGHT)
      .attr('fill', '#ffffff')
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
    this.defs = this.svg.append('defs');

    // パネルGlowフィルター
    const glowFilter = this.defs
      .append('filter')
      .attr('id', 'panel-glow')
      .attr('x', '-20%').attr('y', '-20%')
      .attr('width', '140%').attr('height', '140%');
    glowFilter.append('feGaussianBlur').attr('in', 'SourceGraphic').attr('stdDeviation', 3).attr('result', 'blur');
    glowFilter.append('feMerge')
      .selectAll('feMergeNode')
      .data(['blur', 'SourceGraphic'])
      .enter()
      .append('feMergeNode')
      .attr('in', (d) => d);
  }

  getThemePrimary() {
    return getComputedStyle(document.documentElement).getPropertyValue('--theme-primary').trim() || '#66c2a5';
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

  toSafeCssToken(value) {
    return String(value).replaceAll(/[^a-zA-Z0-9_-]/g, '-');
  }

  resolveLineLabelGutter(width) {
    if (width < 280) return 70;
    if (width < 420) return 96;
    return 130;
  }

  resolveYAxisLabelGutter(rows, yField) {
    const values = rows
      .map((d) => Number(d[yField]))
      .filter((v) => Number.isFinite(v));

    if (values.length === 0) {
      return 56;
    }

    const maxAbs = d3.max(values.map((v) => Math.abs(v))) || 0;
    const probe = [0, maxAbs * 0.25, maxAbs * 0.5, maxAbs * 0.75, maxAbs];
    const maxLabelLength = d3.max(
      probe.map((v) => d3.format(',')(Math.round(v)).length)
    ) || 4;

    const estimated = 14 + maxLabelLength * 7;
    return Math.max(56, Math.min(110, estimated));
  }

  clear() {
    if (this.container) {
      this.container.innerHTML = '';
    }
    this.svg = null;
    this.root = null;
    this.defs = null;
  }

  destroy() {
    window.removeEventListener('resize', this.onResize);
    this.clear();
  }
}
