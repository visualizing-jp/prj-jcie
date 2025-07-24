/**
 * TripleLayout - 3つのチャートを横並びで表示するレイアウトクラス
 * BaseLayoutを継承し、統一されたレイアウト処理を提供
 */
class TripleLayout extends BaseLayout {
    constructor(containerId) {
        super(containerId, 'triple');
        this.charts = [];
        this.renderers = new Map();
    }

    /**
     * トリプルレイアウトの描画
     * @param {Object} config - レイアウト設定
     */
    async render(config) {
        try {
            // レイアウト設定の取得
            const layoutConfig = this.getLayoutConfig(config);
            
            // データの読み込み
            const chartsData = await this.loadChartsData(config.charts);
            
            // コンテナの準備
            this.prepareContainer(layoutConfig);
            
            // 各チャートの描画
            await this.renderCharts(chartsData, layoutConfig);
            
            return true;
        } catch (error) {
            ErrorHandler.handle(error, {
                context: 'TripleLayout.render',
                config
            });
            return false;
        }
    }

    /**
     * レイアウト設定の取得
     * @private
     */
    getLayoutConfig(config) {
        // LayoutConfigが利用可能かチェック
        if (!window.LayoutConfig) {
            console.warn('LayoutConfig not available, using basic config');
            return config;
        }
        
        // プリセットの適用
        const preset = config.preset || 'TRIPLE_HORIZONTAL';
        const presetConfig = LayoutConfig.PRESETS[preset] || {};
        
        // デフォルト設定との統合
        return window.ConfigHelper ? 
            ConfigHelper.mergeConfig(
                LayoutConfig.DEFAULT_SETTINGS,
                presetConfig,
                config
            ) : 
            { ...presetConfig, ...config };
    }

    /**
     * チャートデータの読み込み
     * @private
     */
    async loadChartsData(charts) {
        if (!charts || charts.length !== 3) {
            throw new Error('Triple layout requires exactly 3 charts configuration');
        }

        const loadPromises = charts.map(async (chartConfig) => {
            try {
                const data = await d3.csv(chartConfig.dataFile);
                return {
                    config: chartConfig,
                    data: data,
                    error: null
                };
            } catch (error) {
                console.error(`Failed to load data from ${chartConfig.dataFile}:`, error);
                return {
                    config: chartConfig,
                    data: null,
                    error: error
                };
            }
        });

        return await Promise.all(loadPromises);
    }

    /**
     * コンテナの準備
     * @private
     */
    prepareContainer(layoutConfig) {
        // 既存の内容をクリア
        this.clearContainer();
        
        // メインコンテナの設定
        const container = d3.select(this.container);
        container
            .classed('triple-layout-container', true)
            .style('display', 'flex')
            .style('flex-direction', layoutConfig.arrangement === 'vertical' ? 'column' : 'row')
            .style('gap', `${layoutConfig.spacing || 30}px`)
            .style('width', '100%')
            .style('height', '100%');
        
        // 各チャート用のコンテナを作成
        this.chartContainers = [];
        for (let i = 0; i < 3; i++) {
            const chartContainer = container.append('div')
                .attr('class', `triple-chart-container chart-${i}`)
                .style('flex', '1')
                .style('min-width', '0')
                .style('position', 'relative');
            
            this.chartContainers.push(chartContainer);
        }
    }

    /**
     * 各チャートの描画
     * @private
     */
    async renderCharts(chartsData, layoutConfig) {
        for (let i = 0; i < chartsData.length; i++) {
            const chartData = chartsData[i];
            if (chartData.error || !chartData.data) {
                this.renderErrorState(i, chartData.error);
                continue;
            }

            const container = this.chartContainers[i];
            const chartConfig = chartData.config;
            
            // チャートサイズの計算
            const size = this.calculateChartSize(container.node(), chartConfig, layoutConfig);
            
            // チャートタイプに応じたレンダラーの取得または作成
            const renderer = this.getOrCreateRenderer(chartConfig.type, i);
            
            // チャートの描画
            await renderer.render({
                container: container.node(),
                data: chartData.data,
                config: {
                    ...chartConfig,
                    width: size.width,
                    height: size.height
                }
            });
            
            this.charts[i] = {
                renderer,
                config: chartConfig,
                data: chartData.data
            };
        }
    }

    /**
     * チャートサイズの計算
     * @private
     */
    calculateChartSize(containerNode, chartConfig, layoutConfig) {
        const containerRect = containerNode.getBoundingClientRect();
        
        // コンテナサイズの取得
        let width = containerRect.width;
        let height = containerRect.height;
        
        // 設定からのサイズ指定がある場合
        if (chartConfig.width) {
            width = typeof chartConfig.width === 'string' && chartConfig.width.includes('%')
                ? containerRect.width * (parseFloat(chartConfig.width) / 100)
                : chartConfig.width;
        }
        
        if (chartConfig.height) {
            height = typeof chartConfig.height === 'string' && chartConfig.height.includes('%')
                ? containerRect.height * (parseFloat(chartConfig.height) / 100)
                : chartConfig.height;
        }
        
        // 最小・最大サイズの制約を適用
        const constraints = layoutConfig.sizeConstraints || {};
        
        // Triple layoutでは横並びで3つ配置されるため、より小さい最小サイズを設定
        width = Math.max(constraints.minWidth || 300, Math.min(width, constraints.maxWidth || 800));
        height = Math.max(constraints.minHeight || 250, Math.min(height, constraints.maxHeight || 600));
        
        return { width, height };
    }

    /**
     * レンダラーの取得または作成
     * @private
     */
    getOrCreateRenderer(chartType, index) {
        const key = `${chartType}-${index}`;
        
        if (this.renderers.has(key)) {
            return this.renderers.get(key);
        }
        
        let renderer;
        switch (chartType) {
            case 'line':
                renderer = new LineChartRenderer(`triple-chart-${index}`);
                break;
            case 'bar':
                renderer = new BarChartRenderer(`triple-chart-${index}`);
                break;
            case 'pie':
                renderer = new PieChartRenderer(`triple-chart-${index}`);
                break;
            default:
                throw new Error(`Unknown chart type: ${chartType}`);
        }
        
        this.renderers.set(key, renderer);
        return renderer;
    }

    /**
     * エラー状態の表示
     * @private
     */
    renderErrorState(index, error) {
        const container = this.chartContainers[index];
        container
            .style('display', 'flex')
            .style('align-items', 'center')
            .style('justify-content', 'center')
            .style('background-color', '#f8f8f8')
            .style('border', '2px dashed #ddd')
            .append('div')
            .style('text-align', 'center')
            .style('color', '#666')
            .html(`
                <p style="margin: 0 0 10px 0;">チャートデータの読み込みに失敗しました</p>
                <p style="margin: 0; font-size: 0.9em; color: #999;">${error?.message || 'Unknown error'}</p>
            `);
    }

    /**
     * レイアウトの更新
     */
    update(config) {
        // 既存のチャートをフェードアウト
        this.fadeOut(300).then(() => {
            // 新しい設定で再描画
            this.render(config).then(() => {
                // フェードイン
                this.fadeIn(300);
            });
        });
    }

    /**
     * レイアウトのクリーンアップ
     */
    destroy() {
        // レンダラーのクリーンアップ
        this.renderers.forEach(renderer => {
            if (renderer && typeof renderer.destroy === 'function') {
                renderer.destroy();
            }
        });
        this.renderers.clear();
        
        // チャート情報のクリア
        this.charts = [];
        
        // 親クラスのdestroy呼び出し
        super.destroy();
    }
}

// グローバルスコープに登録
window.TripleLayout = TripleLayout;