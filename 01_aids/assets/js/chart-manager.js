class ChartManager {
    constructor() {
        // 固定の内部座標系
        this.viewBox = {
            width: 960,
            height: 400
        };
        
        // アスペクト比
        this.aspectRatio = 16/9;
        
        // マージン（内部座標系に対する相対値）
        this.margins = {
            top: 40,
            right: 100,
            bottom: 80,
            left: 80
        };

        // 内部座標系での実際の描画領域
        this.width = this.viewBox.width - this.margins.left - this.margins.right;
        this.height = this.viewBox.height - this.margins.top - this.margins.bottom;
        
        this.svg = null;
        this.currentChart = null;
        this.resizeObserver = null;
    }

    // チャートの初期化
    initializeCharts() {
        // SVGの作成と基本設定
        this.svg = d3.select('#mainFigure')
            .append('svg')
            .attr('viewBox', `0 0 ${this.viewBox.width} ${this.viewBox.height}`)
            .attr('preserveAspectRatio', 'xMidYMid');

        // 背景の追加
        this.svg.append('rect')
            .attr('width', this.viewBox.width)
            .attr('height', this.viewBox.height)
            .attr('fill', '#f8f9fa');

        // ResizeObserverの設定
        this.setupResizeObserver();
    }

    // ResizeObserverの設定
    setupResizeObserver() {
        const container = document.getElementById('mainFigure');
        if (!container) return;

        this.resizeObserver = new ResizeObserver(this.debounce(() => {
            this.handleResize();
        }, 250));

        this.resizeObserver.observe(container);
    }

    // デバウンス関数
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // リサイズ処理
    handleResize() {
        if (!this.svg) return;

        const container = d3.select('#mainFigure');
        const containerWidth = container.node().getBoundingClientRect().width;
        const containerHeight = containerWidth / this.aspectRatio;

        // SVGのサイズをコンテナに合わせて更新
        this.svg
            .attr('width', containerWidth)
            .attr('height', containerHeight);

        // 現在のチャートを再描画
        if (this.currentChart) {
            this.redrawCurrentChart();
        }
    }

    // 現在のチャートを再描画
    redrawCurrentChart() {
        if (this.currentChart === 'line') {
            // 折れ線グラフの再描画
            this.redrawLineChart();
        } else if (this.currentChart === 'pie') {
            // 円グラフの再描画
            this.redrawPieChart();
        }
    }

    // 折れ線グラフの描画
    async drawLineChart(data, title) {
        // 凡例を表示するか判定
        const showLegend = title !== 'エイズ関連死亡者数の推移' && title !== '母子感染の推移';
        if (this.currentChart) {
            // 既存のチャートをフェードアウト
            this.svg.selectAll('*')
                .transition()
                .duration(500)
                .style('opacity', 0)
                .remove();
        }

        // データの整形
        const years = Object.keys(data[0]).filter(key => !isNaN(key) && key !== '地域名');
        const regions = data.map(d => d['地域名']);

        // スケールの設定
        const x = d3.scalePoint()
            .domain(years)
            .range([0, this.width]);

        // 最大値の計算
        const maxValue = d3.max(data, d => 
            d3.max(years, year => {
                const value = +d[year];
                return isNaN(value) ? 0 : value;
            })
        );

        const y = d3.scaleLinear()
            .domain([0, maxValue])
            .range([this.height, 0]);

        // 色スケール
        const color = d3.scaleOrdinal(d3.schemeCategory10);

        // 線の生成
        const line = d3.line()
            .x(d => x(d.year))
            .y(d => y(d.value))
            .defined(d => !isNaN(d.value));

        // グラフの描画グループを作成
        const chartGroup = this.svg.append('g')
            .attr('transform', `translate(${this.margins.left},${this.margins.top})`);

        // X軸の描画
        const xAxis = chartGroup.append('g')
            .attr('transform', `translate(0,${this.height})`)
            .call(d3.axisBottom(x));

        // X軸のラベルを回転
        xAxis.selectAll('text')
            .attr('transform', 'rotate(-45)')
            .style('text-anchor', 'end')
            .attr('dx', '-.8em')
            .attr('dy', '.15em');

        // Y軸の描画
        const yAxis = chartGroup.append('g')
            .call(d3.axisLeft(y));

        // Y軸のラベルを追加（資金不足データの場合）
        if (title === 'エイズ対策の資金不足の推移') {
            chartGroup.append('text')
                .attr('transform', 'rotate(-90)')
                .attr('y', -this.margins.left + 20)
                .attr('x', -(this.height / 2))
                .attr('text-anchor', 'middle')
                .style('font-size', '12px')
                .text('金額（10億ドル）');
        }

        // タイトルの追加
        this.svg.append('text')
            .attr('x', this.viewBox.width / 2)
            .attr('y', this.margins.top / 2)
            .attr('text-anchor', 'middle')
            .style('font-size', '16px')
            .text(title);

        // 各地域の線を描画
        regions.forEach(region => {
            const regionData = years.map(year => ({
                year: year,
                value: +data.find(d => d['地域名'] === region)[year] || 0
            }));

            chartGroup.append('path')
                .datum(regionData)
                .attr('fill', 'none')
                .attr('stroke', color(region))
                .attr('stroke-width', 2)
                .attr('d', line)
                .style('opacity', 0)
                .transition()
                .duration(1000)
                .style('opacity', 1);
        });

        // 凡例の追加
        if (showLegend) {
            const legend = this.svg.append('g')
                .attr('transform', `translate(${this.viewBox.width - this.margins.right - 100},${this.margins.top})`);

            regions.forEach((region, i) => {
                legend.append('g')
                    .attr('transform', `translate(0, ${i * 20})`)
                    .call(g => g.append('rect')
                        .attr('width', 10)
                        .attr('height', 10)
                        .attr('fill', color(region)))
                    .call(g => g.append('text')
                        .attr('x', 15)
                        .attr('y', 10)
                        .text(region)
                        .style('font-size', '10px'));
            });
        }

        this.currentChart = 'line';
    }

    // 円グラフの描画
    async drawPieCharts(data) {
        if (this.currentChart) {
            this.svg.selectAll('*')
                .transition()
                .duration(500)
                .style('opacity', 0)
                .remove();
        }

        const radius = Math.min(this.width, this.height) / 3;
        const pie = d3.pie()
            .value(d => parseFloat(d['抗HIV治療を受けているHIV陽性者の割合(合計)'].replace('%', '')));

        const arc = d3.arc()
            .innerRadius(0)
            .outerRadius(radius);

        const color = d3.scaleOrdinal(d3.schemeCategory10);

        // データの整形
        const chartData = data.filter(d => d[''] !== '全世界');

        // 円グラフの描画
        const pieGroup = this.svg.append('g')
            .attr('transform', `translate(${this.viewBox.width / 2},${this.viewBox.height / 2})`);

        const paths = pieGroup.selectAll('path')
            .data(pie(chartData))
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', (d, i) => color(i))
            .style('opacity', 0)
            .transition()
            .duration(1000)
            .style('opacity', 1);

        // ラベルの追加
        pieGroup.selectAll('text')
            .data(pie(chartData))
            .enter()
            .append('text')
            .attr('transform', d => `translate(${arc.centroid(d)})`)
            .attr('dy', '.35em')
            .text(d => d.data[''])
            .style('font-size', '12px')
            .style('text-anchor', 'middle')
            .style('opacity', 0)
            .transition()
            .duration(1000)
            .style('opacity', 1);
            
        // 円グラフの凡例
        const legendPie = this.svg.append('g')
            .attr('transform', `translate(${this.viewBox.width - this.margins.right - 100},${this.margins.top})`);
        
        chartData.forEach((d, i) => {
            legendPie.append('g')
                .attr('transform', `translate(0, ${i * 20})`)
                .call(g => g.append('circle')
                    .attr('r', 5)
                    .attr('cy', 5)
                    .attr('fill', color(i)))
                .call(g => g.append('text')
                    .attr('x', 15)
                    .attr('y', 10)
                    .text(d[''])
                    .style('font-size', '10px'));
        });

        this.currentChart = 'pie';
    }

    // 折れ線グラフの再描画
    redrawLineChart() {
        // 現在のデータを保持
        const currentData = this.currentData;
        const currentTitle = this.currentTitle;
        if (currentData && currentTitle) {
            this.drawLineChart(currentData, currentTitle);
        }
    }

    // 円グラフの再描画
    redrawPieChart() {
        // 現在のデータを保持
        const currentData = this.currentData;
        if (currentData) {
            this.drawPieCharts(currentData);
        }
    }

    // クリーンアップ
    cleanup() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    }
} 