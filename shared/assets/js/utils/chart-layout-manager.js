/**
 * ChartLayoutManager - レイアウト処理の統合管理クラス
 * BaseLayout を継承し、Dual/Triple レイアウトの処理を集約
 *
 * 責務:
 * - 複数チャートのレイアウト管理（Dual, Triple）
 * - レイアウト寸法計算（position 設定対応）
 * - SVG 作成と チャート描画の統合
 * - 各レンダラーのインスタンス管理
 *
 * 使用例:
 * const layoutManager = new ChartLayoutManager('chart-container');
 * layoutManager.createDualLayout(chartData);
 */
class ChartLayoutManager extends BaseLayout {
    /**
     * コンストラクタ
     * @param {string} containerId - コンテナの ID
     */
    constructor(containerId) {
        super(containerId);
        this.layoutType = null; // 'dual', 'triple', 'single'
        this.layoutState = {};
        this.renderers = {}; // レンダラーキャッシュ
        this.chartsData = {}; // チャートデータキャッシュ
    }

    /**
     * レイアウトを初期化
     * @param {string} type - レイアウトタイプ
     * @param {Object} config - レイアウト設定
     */
    initializeLayout(type, config = {}) {
        this.layoutType = type;
        this.layoutState = {
            type,
            config,
            initialized: true,
            timestamp: Date.now()
        };
        console.log(`ChartLayoutManager: Initialized ${type} layout`);
    }

    /**
     * レイアウト状態を更新
     * @param {string} type - レイアウトタイプ
     * @param {Object} data - チャートデータ
     */
    updateLayoutState(type, data) {
        this.layoutType = type;
        this.layoutState = {
            type,
            data,
            timestamp: Date.now()
        };
    }

    /**
     * 現在のレイアウト状態を取得
     * @returns {Object} レイアウト状態
     */
    getCurrentLayoutState() {
        return { ...this.layoutState };
    }

    /**
     * デュアルレイアウトを作成
     * @param {Object} chartData - チャートデータ
     */
    createDualLayout(chartData) {
        try {
            this.initializeLayout('dual', chartData);
            this.renderDualLayout(chartData);
        } catch (error) {
            console.error('ChartLayoutManager: Error creating dual layout:', error);
            if (window.ErrorHandler) {
                ErrorHandler.handle(error, 'ChartLayoutManager.createDualLayout', {
                    type: ErrorHandler.ERROR_TYPES.RENDER,
                    severity: ErrorHandler.SEVERITY.HIGH,
                    context: { chartData }
                });
            }
        }
    }

    /**
     * デュアルレイアウトを描画
     * @param {Object} chartData - チャートデータ
     */
    renderDualLayout(chartData) {
        const { config = {}, position = {} } = chartData;

        // コンテナを準備
        this.clearContainer();

        // レイアウト寸法を計算
        const layout = this.calculateDualDimensions(position);

        // SVG を作成
        const svg = this.createDualLayoutSVG({
            ...layout,
            ...config
        });

        // 各チャートを描画
        this.renderChartsInDualLayout(svg, chartData, layout);
    }

    /**
     * デュアルレイアウトの寸法を計算
     * @param {Object} position - position 設定
     * @returns {Object} レイアウト寸法設定
     */
    calculateDualDimensions(position = {}) {
        const containerSize = this.getContainerBounds();
        if (!containerSize) {
            return {
                totalWidth: 800,
                totalHeight: 600,
                leftWidth: 390,
                rightWidth: 390,
                height: 600
            };
        }

        // position 設定から寸法を計算
        const leftWidth = this.calculateDimensionFromValue(
            position.left?.width || '45%',
            containerSize.width,
            'width'
        );
        const rightWidth = this.calculateDimensionFromValue(
            position.right?.width || '45%',
            containerSize.width,
            'width'
        );
        const height = this.calculateDimensionFromValue(
            position.height || '100%',
            containerSize.height,
            'height'
        );

        return {
            totalWidth: containerSize.width,
            totalHeight: containerSize.height,
            leftWidth,
            rightWidth,
            height,
            gap: position.gap || 20
        };
    }

    /**
     * デュアルレイアウト用 SVG を作成
     * @param {Object} config - SVG 設定
     * @returns {d3.Selection} SVG 要素
     */
    createDualLayoutSVG(config) {
        const {
            totalWidth = 1600,
            totalHeight = 600,
            leftWidth = 390,
            rightWidth = 390,
            height = 600,
            gap = 20
        } = config;

        // SVG コンテナ
        const svgContainer = this.container
            .append('div')
            .attr('class', 'chart-dual-layout-container')
            .style('display', 'flex')
            .style('gap', `${gap}px`)
            .style('width', '100%')
            .style('height', `${height}px`);

        // 左のグラフ
        const leftDiv = svgContainer.append('div')
            .style('flex', '1')
            .style('min-width', 0);

        const leftSvg = leftDiv.append('svg')
            .attr('class', 'chart-dual-left')
            .attr('width', leftWidth)
            .attr('height', height)
            .attr('viewBox', `0 0 ${leftWidth} ${height}`)
            .attr('preserveAspectRatio', 'xMidYMid meet')
            .style('width', '100%')
            .style('height', 'auto');

        // 右のグラフ
        const rightDiv = svgContainer.append('div')
            .style('flex', '1')
            .style('min-width', 0);

        const rightSvg = rightDiv.append('svg')
            .attr('class', 'chart-dual-right')
            .attr('width', rightWidth)
            .attr('height', height)
            .attr('viewBox', `0 0 ${rightWidth} ${height}`)
            .attr('preserveAspectRatio', 'xMidYMid meet')
            .style('width', '100%')
            .style('height', 'auto');

        return { leftSvg, rightSvg, container: svgContainer };
    }

    /**
     * デュアルレイアウト内のチャートを描画
     * @param {Object} svgObj - SVG オブジェクト
     * @param {Object} chartData - チャートデータ
     * @param {Object} layout - レイアウト情報
     */
    renderChartsInDualLayout(svgObj, chartData, layout) {
        const { leftChart = {}, rightChart = {} } = chartData;
        const { leftSvg, rightSvg } = svgObj;

        // 左のチャート
        if (leftChart.type && leftChart.data) {
            const leftRenderer = this.getOrCreateRenderer(leftChart.type);
            if (leftRenderer) {
                try {
                    leftRenderer.renderChart(leftChart.data, leftChart.config || {});
                } catch (error) {
                    console.error('ChartLayoutManager: Error rendering left chart:', error);
                }
            }
        }

        // 右のチャート
        if (rightChart.type && rightChart.data) {
            const rightRenderer = this.getOrCreateRenderer(rightChart.type);
            if (rightRenderer) {
                try {
                    rightRenderer.renderChart(rightChart.data, rightChart.config || {});
                } catch (error) {
                    console.error('ChartLayoutManager: Error rendering right chart:', error);
                }
            }
        }
    }

    /**
     * トリプルレイアウトを作成
     * @param {Object} chartData - チャートデータ
     */
    async createTripleLayout(chartData) {
        try {
            this.initializeLayout('triple', chartData);

            // 外部の TripleLayout クラスに委譲（当面）
            if (window.TripleLayout) {
                const tripleLayout = new window.TripleLayout(this.container.node().id);
                await tripleLayout.render(chartData);
            } else {
                console.warn('ChartLayoutManager: TripleLayout class not found');
                this.renderTripleLayout(chartData);
            }
        } catch (error) {
            console.error('ChartLayoutManager: Error creating triple layout:', error);
            if (window.ErrorHandler) {
                ErrorHandler.handle(error, 'ChartLayoutManager.createTripleLayout', {
                    type: ErrorHandler.ERROR_TYPES.RENDER,
                    severity: ErrorHandler.SEVERITY.HIGH,
                    context: { chartData }
                });
            }
        }
    }

    /**
     * トリプルレイアウトを描画
     * @param {Object} chartData - チャートデータ
     */
    renderTripleLayout(chartData) {
        const { config = {}, position = {} } = chartData;

        this.clearContainer();

        const layout = this.calculateTripleDimensions(position);
        const svg = this.createTripleLayoutSVG({
            ...layout,
            ...config
        });

        this.renderChartsInTripleLayout(svg, chartData, layout);
    }

    /**
     * トリプルレイアウトの寸法を計算
     * @param {Object} position - position 設定
     * @returns {Object} レイアウト寸法設定
     */
    calculateTripleDimensions(position = {}) {
        const containerSize = this.getContainerBounds();
        if (!containerSize) {
            return {
                totalWidth: 1200,
                totalHeight: 600,
                chartWidth: 370,
                chartHeight: 600,
                gap: 20
            };
        }

        const chartWidth = (containerSize.width - 40) / 3; // 3列、ギャップを考慮
        const chartHeight = this.calculateDimensionFromValue(
            position.height || '100%',
            containerSize.height,
            'height'
        );

        return {
            totalWidth: containerSize.width,
            totalHeight: containerSize.height,
            chartWidth: Math.min(chartWidth, 400),
            chartHeight,
            gap: position.gap || 20
        };
    }

    /**
     * トリプルレイアウト用 SVG を作成
     * @param {Object} config - SVG 設定
     * @returns {Object} SVG オブジェクト
     */
    createTripleLayoutSVG(config) {
        const {
            totalWidth = 1200,
            totalHeight = 600,
            chartWidth = 370,
            chartHeight = 600,
            gap = 20
        } = config;

        const svgContainer = this.container
            .append('div')
            .attr('class', 'chart-triple-layout-container')
            .style('display', 'flex')
            .style('gap', `${gap}px`)
            .style('width', '100%')
            .style('height', `${chartHeight}px`)
            .style('overflow-x', 'auto');

        const svgs = [];
        for (let i = 0; i < 3; i++) {
            const chartDiv = svgContainer.append('div')
                .style('flex-shrink', 0)
                .style('width', `${chartWidth}px`);

            const svg = chartDiv.append('svg')
                .attr('class', `chart-triple-chart-${i}`)
                .attr('width', chartWidth)
                .attr('height', chartHeight)
                .attr('viewBox', `0 0 ${chartWidth} ${chartHeight}`)
                .attr('preserveAspectRatio', 'xMidYMid meet')
                .style('width', '100%')
                .style('height', 'auto');

            svgs.push(svg);
        }

        return { svgs, container: svgContainer };
    }

    /**
     * トリプルレイアウト内のチャートを描画
     * @param {Object} svgObj - SVG オブジェクト
     * @param {Object} chartData - チャートデータ
     * @param {Object} layout - レイアウト情報
     */
    renderChartsInTripleLayout(svgObj, chartData, layout) {
        const { charts = [] } = chartData;
        const { svgs } = svgObj;

        charts.forEach((chart, index) => {
            if (index >= svgs.length) return;

            if (chart.type && chart.data) {
                const renderer = this.getOrCreateRenderer(chart.type);
                if (renderer) {
                    try {
                        renderer.renderChart(chart.data, chart.config || {});
                    } catch (error) {
                        console.error(`ChartLayoutManager: Error rendering chart ${index}:`, error);
                    }
                }
            }
        });
    }

    /**
     * position 値から実寸法を計算
     * @param {string|number} value - position 値 (%, px, vh, vw など)
     * @param {number} containerSize - コンテナサイズ
     * @param {string} type - サイズタイプ ('width', 'height')
     * @returns {number} 計算された寸法
     */
    calculateDimensionFromValue(value, containerSize, type = 'width') {
        if (typeof value === 'number') {
            return value;
        }

        if (typeof value !== 'string') {
            return containerSize;
        }

        // パーセンテージ
        if (value.includes('%')) {
            const percent = parseFloat(value);
            return (containerSize * percent) / 100;
        }

        // ピクセル
        if (value.includes('px')) {
            return parseFloat(value);
        }

        // ビューポート幅
        if (value.includes('vw')) {
            const percent = parseFloat(value);
            return (window.innerWidth * percent) / 100;
        }

        // ビューポート高さ
        if (value.includes('vh')) {
            const percent = parseFloat(value);
            return (window.innerHeight * percent) / 100;
        }

        // デフォルト
        return containerSize;
    }

    /**
     * レスポンシブサイズを取得
     * @param {Object} config - 設定
     * @returns {Object} {width, height}
     */
    getResponsiveSize(config = {}) {
        const containerSize = this.getContainerBounds();
        if (!containerSize) {
            return { width: 800, height: 600 };
        }

        return {
            width: this.calculateDimensionFromValue(
                config.width || containerSize.width,
                containerSize.width,
                'width'
            ),
            height: this.calculateDimensionFromValue(
                config.height || containerSize.height,
                containerSize.height,
                'height'
            )
        };
    }

    /**
     * チャートレンダラーを取得または作成
     * @param {string} type - チャートタイプ
     * @returns {Object} レンダラーインスタンス
     */
    getOrCreateRenderer(type) {
        if (!this.renderers[type]) {
            // 新規コンテナを作成してレンダラーをインスタンス化
            const containerId = `chart-renderer-${type}-${Date.now()}`;
            const div = this.container.append('div')
                .attr('id', containerId)
                .style('display', 'none'); // 非表示

            try {
                const RendererClass = window[`${type.charAt(0).toUpperCase() + type.slice(1)}ChartRenderer`];
                if (RendererClass) {
                    this.renderers[type] = new RendererClass(containerId);
                } else {
                    console.warn(`ChartLayoutManager: Renderer not found for type: ${type}`);
                    return null;
                }
            } catch (error) {
                console.error(`ChartLayoutManager: Error creating renderer for type ${type}:`, error);
                return null;
            }
        }

        return this.renderers[type];
    }

    /**
     * チャートデータを検証
     * @param {Object} chartData - チャートデータ
     * @returns {Object} {valid: boolean, errors: string[]}
     */
    validateChartData(chartData) {
        const errors = [];

        if (!chartData || typeof chartData !== 'object') {
            errors.push('chartData must be an object');
            return { valid: false, errors };
        }

        if (!chartData.type) {
            errors.push('chartData.type is required');
        }

        if (!chartData.data || !Array.isArray(chartData.data)) {
            errors.push('chartData.data must be an array');
        }

        return {
            valid: errors.length === 0,
            errors
        };
    }

    /**
     * コンテナをクリア
     */
    clearContainer() {
        if (this.container) {
            this.container.selectAll('*').remove();
        }
    }

    /**
     * リソースをクリーンアップ
     */
    cleanup() {
        this.clearContainer();

        // レンダラーをクリーンアップ
        Object.values(this.renderers).forEach(renderer => {
            if (renderer && typeof renderer.destroy === 'function') {
                renderer.destroy();
            }
        });

        this.renderers = {};
        this.chartsData = {};
        this.layoutState = {};
    }

    /**
     * リソースを破棄
     */
    destroy() {
        this.cleanup();
        super.destroy();
    }
}

// グローバルスコープで提供
window.ChartLayoutManager = ChartLayoutManager;
