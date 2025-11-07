/**
 * ChartSVGDrawer - SVG上でチャートを描画する専門ユーティリティクラス
 * 複数系列対応・色スケール対応の統一描画ロジック
 * ChartManager と ChartSVGRenderer から共通化
 */
class ChartSVGDrawer {
    /**
     * SVG内で単一チャートを直接描画（レンダラー非使用）
     * @param {d3.Selection} svgGroup - SVGグループ
     * @param {Object} chartConfig - チャート設定
     * @param {Object} layout - レイアウト情報
     * @param {string} position - 位置 ('left' | 'right')
     */
    static drawSingleChartInSVG(svgGroup, chartConfig, layout, position) {
        if (chartConfig.type !== 'line') {
            console.error(`ChartSVGDrawer: Direct rendering only supports line charts, got: ${chartConfig.type}`);
            return;
        }

        // データを取得
        const data = chartConfig.data;
        if (!data || data.length === 0) {
            console.error(`ChartSVGDrawer: No data available for ${position} chart`);
            return;
        }

        // チャート描画エリアを準備
        let margin = chartConfig.config.margin || { top: 40, right: 30, bottom: 60, left: 80 };

        // 複数系列でインラインレジェンドの場合、右マージンを拡大
        if (chartConfig.config.multiSeries && chartConfig.config.legendType === 'inline') {
            margin = { ...margin, right: Math.max(margin.right, 240) };
        }

        const width = layout.chartWidth - margin.left - margin.right;
        const height = layout.chartHeight - margin.top - margin.bottom;

        const chartGroup = svgGroup.append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);

        // タイトルを追加
        if (chartConfig.title) {
            svgGroup.append('text')
                .attr('class', 'chart-title')
                .attr('x', layout.chartWidth / 2)
                .attr('y', 20)
                .attr('text-anchor', 'middle')
                .style('font-size', '14px')
                .style('font-weight', 'bold')
                .text(chartConfig.title);
        }

        // フィールド設定
        const xField = chartConfig.config.xField || 'year';
        const yField = chartConfig.config.yField || 'value';
        const config = chartConfig.config;

        // ★重要: データを系列別に変換（複数系列対応）
        const series = this.transformToSeries(data, chartConfig.config);

        // 全データからドメインを計算
        const allValues = series.flatMap(s => s.values);

        // X軸とY軸のドメインを計算
        const xDomain = d3.extent(allValues, d => +d[xField]);
        let yDomain;
        if (config.yRange && config.yRange.length === 2) {
            yDomain = config.yRange;
        } else {
            yDomain = d3.extent(allValues, d => +d[yField]);
        }

        const xScale = d3.scaleLinear()
            .domain(xDomain)
            .range([0, width]);

        const yScale = d3.scaleLinear()
            .domain(yDomain)
            .range([height, 0]);

        // ★重要: 色スケールを作成（系列ごとの色設定）
        const colorScale = this.createColorScale(series, config);

        // 軸を描画
        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);

        // 日本語フォーマットが設定されている場合
        if (config.yAxisFormat && config.yAxisFormat.type === 'japanese') {
            yAxis.tickFormat(d => {
                if (d >= 10000) {
                    return (d / 10000) + '万';
                }
                return d;
            });
        }

        chartGroup.append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0, ${height})`)
            .call(xAxis);

        chartGroup.append('g')
            .attr('class', 'y-axis')
            .call(yAxis);

        // 軸ラベル
        if (config.yAxisLabel) {
            chartGroup.append('text')
                .attr('class', 'y-axis-label')
                .attr('transform', 'rotate(-90)')
                .attr('y', 0 - margin.left)
                .attr('x', 0 - (height / 2))
                .attr('dy', '1em')
                .style('text-anchor', 'middle')
                .style('font-size', '12px')
                .text(config.yAxisLabel);
        }

        // ライン生成器
        const line = d3.line()
            .x(d => xScale(+d[xField]))
            .y(d => yScale(+d[yField]))
            .curve(d3.curveMonotoneX);

        // ★重要: 系列ごとにグループを作成し、ラインとドットを描画
        const seriesGroups = chartGroup.selectAll('.series-group')
            .data(series)
            .enter()
            .append('g')
            .attr('class', 'series-group');

        // 各系列にラインを追加
        seriesGroups.append('path')
            .attr('class', 'chart-line')
            .datum(d => d)
            .attr('stroke', d => colorScale(d.name))
            .attr('stroke-width', 2)
            .attr('fill', 'none')
            .attr('d', d => line(d.values));

        // 各系列にドット（データポイント）を追加
        seriesGroups.each(function(seriesData) {
            const group = d3.select(this);

            group.selectAll('.chart-circle')
                .data(seriesData.values)
                .enter().append('circle')
                .attr('class', 'chart-circle')
                .attr('cx', d => xScale(+d[xField]))
                .attr('cy', d => yScale(+d[yField]))
                .attr('r', 3)
                .attr('fill', colorScale(seriesData.name));
        });

        // インラインラベルを追加（複数系列の場合）
        if (series.length > 1 && config.legendType === 'inline') {
            this.addInlineLabelsToGroup(chartGroup, series, colorScale, width, height, xField, yField);
        }

        // データソースを表示
        if (config.dataSource) {
            svgGroup.append('text')
                .attr('class', 'chart-data-source')
                .attr('x', 0)
                .attr('y', layout.chartHeight - 5)
                .attr('text-anchor', 'start')
                .style('font-size', '12px')
                .style('fill', '#888')
                .style('font-style', 'normal')
                .text(`出典: ${config.dataSource}`);
        }
    }

    /**
     * データを系列別に変換
     * @param {Array} data - 生データ
     * @param {Object} config - 設定
     * @returns {Array} 系列別データ
     */
    static transformToSeries(data, config) {
        const { xField = 'year', yField = 'value', seriesField = 'series' } = config;

        // multiSeriesがfalseの場合は単一系列として扱う
        if (config.multiSeries === false) {
            const result = [{
                name: config.seriesName || 'Data',
                values: data.map(d => ({
                    [xField]: d[xField],
                    [yField]: d[yField]
                }))
            }];
            return result;
        }

        // 複数系列の場合
        const seriesNames = [...new Set(data.map(d => d[seriesField]))];

        if (seriesNames.length === 1 && seriesNames[0] === undefined) {
            // seriesFieldが存在しない場合は単一系列として扱う
            const result = [{
                name: config.title || 'Data',
                values: data.map(d => ({
                    [xField]: d[xField],
                    [yField]: d[yField]
                }))
            }];
            return result;
        }

        const result = seriesNames.map(name => ({
            name,
            values: data
                .filter(d => d[seriesField] === name)
                .map(d => ({
                    [xField]: d[xField],
                    [yField]: d[yField]
                }))
        }));
        return result;
    }

    /**
     * 色スケールを作成
     * @param {Array} series - 系列データ
     * @param {Object} config - 設定
     * @returns {Function} 色スケール関数
     */
    static createColorScale(series, config) {
        // 単一色設定が指定されている場合（dualレイアウト対応）
        if (config.color) {
            return () => config.color;
        } else if (config.colors && config.colors.length > 0 && config.multiSeries === false) {
            // 単一系列の明示色
            return d3.scaleOrdinal(config.colors).domain(series.map(d => d.name));
        } else if (window.ColorScheme && config.useUnifiedColors !== false) {
            // 統一カラースキーム：地域名→色の直接マッピング
            let colorScheme = window.colorScheme;
            if (!colorScheme) {
                colorScheme = new ColorScheme();
                window.colorScheme = colorScheme;
            }

            const regionColors = series.map(s => {
                const color = colorScheme.getRegionColor(s.name);
                return color;
            });
            return d3.scaleOrdinal()
                .domain(series.map(s => s.name))
                .range(regionColors);
        } else {
            // フォールバック
            const colors = config.colors || window.AppConstants?.APP_COLORS?.PRIMARY_PALETTE || d3.schemeCategory10;
            return d3.scaleOrdinal(colors).domain(series.map(d => d.name));
        }
    }

    /**
     * インラインラベルを追加
     * @param {d3.Selection} g - グループ
     * @param {Array} series - 系列データ
     * @param {Function} colorScale - 色スケール
     * @param {number} width - 幅
     * @param {number} height - 高さ
     * @param {string} xField - X軸フィールド
     * @param {string} yField - Y軸フィールド
     */
    static addInlineLabelsToGroup(g, series, colorScale, width, height, xField, yField) {
        if (!series || series.length <= 1) return;

        // 最後のデータポイント位置から系列ラベルを配置
        series.forEach((seriesData, index) => {
            if (seriesData.values.length === 0) return;

            const lastDataPoint = seriesData.values[seriesData.values.length - 1];
            const x = width + 10;
            const y = 0; // グループ内相対座標（調整は必要に応じて）

            g.append('text')
                .attr('class', 'series-label inline-label')
                .attr('x', x)
                .attr('y', y)
                .attr('dy', '0.35em')
                .attr('font-size', '12px')
                .attr('fill', colorScale(seriesData.name))
                .style('font-weight', 'bold')
                .text(seriesData.name);
        });
    }
}

// グローバルスコープで提供
window.ChartSVGDrawer = ChartSVGDrawer;
