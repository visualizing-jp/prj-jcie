/**
 * BaseLayout - 全レイアウトタイプの基底クラス
 * 
 * レイアウトの共通処理を提供し、統一されたインターフェースを確保
 */
class BaseLayout {
    /**
     * コンストラクタ
     * @param {string} containerId - コンテナID
     * @param {string} layoutType - レイアウトタイプ
     */
    constructor(containerId, layoutType) {
        this.containerId = containerId;
        this.layoutType = layoutType;
        this.container = null;
        this.svg = null;
        this.config = null;
        this.isInitialized = false;
        
        // レイアウト設定を取得
        this.layoutDefaults = LayoutConfig.getLayoutConfig(layoutType);
    }

    /**
     * 初期化
     */
    init() {
        try {
            // コンテナを取得または作成
            this.container = d3.select(this.containerId);
            if (this.container.empty()) {
                console.error(`BaseLayout: Container '${this.containerId}' not found`);
                return false;
            }

            this.isInitialized = true;
            return true;
        } catch (error) {
            console.error('BaseLayout: Initialization error:', error);
            return false;
        }
    }

    /**
     * SVGを作成または更新
     * @param {Object} dimensions - 寸法設定
     * @returns {Object} D3 SVG selection
     */
    createOrUpdateSVG(dimensions) {
        const { width, height } = dimensions;

        // 既存のSVGをチェック
        let svg = this.container.select('svg');
        
        if (svg.empty()) {
            // 新規作成
            svg = this.container.append('svg');
        }

        // SVGHelperを使用して初期化
        if (window.SVGHelper) {
            return SVGHelper.initSVG(this.container, width, height, {
                className: `${this.layoutType}-layout-svg`,
                responsive: true,
                preserveAspectRatio: 'xMidYMid meet'
            });
        } else {
            // フォールバック
            svg.attr('width', width)
               .attr('height', height)
               .attr('viewBox', `0 0 ${width} ${height}`)
               .attr('preserveAspectRatio', 'xMidYMid meet')
               .classed(`${this.layoutType}-layout-svg`, true);
            
            return svg;
        }
    }

    /**
     * レイアウトサイズを計算
     * @param {Object} config - 設定
     * @returns {Object} 計算されたサイズ
     */
    calculateLayoutSize(config = {}) {
        const containerNode = this.container.node();
        const containerWidth = containerNode.offsetWidth || 800;
        const containerHeight = containerNode.offsetHeight || 600;

        // position設定から計算
        if (config.position) {
            return LayoutConfig.calculateLayoutPosition(config.position, {
                containerWidth,
                containerHeight
            });
        }

        // デフォルト計算
        const defaults = this.layoutDefaults;
        let width = containerWidth;
        let height = containerHeight;

        // 最小・最大制約を適用
        if (defaults.minWidth) {
            width = Math.max(width, defaults.minWidth);
        }
        if (defaults.maxWidth) {
            width = Math.min(width, defaults.maxWidth);
        }
        if (defaults.minHeight) {
            height = Math.max(height, defaults.minHeight);
        }
        if (defaults.maxHeight) {
            height = Math.min(height, defaults.maxHeight);
        }

        // アスペクト比を考慮
        if (config.aspectRatio || defaults.aspectRatio) {
            const aspectRatio = config.aspectRatio || defaults.aspectRatio;
            const calculatedHeight = width / aspectRatio;
            
            if (calculatedHeight <= height) {
                height = calculatedHeight;
            } else {
                width = height * aspectRatio;
            }
        }

        return {
            x: 0,
            y: 0,
            width: Math.floor(width),
            height: Math.floor(height)
        };
    }

    /**
     * レスポンシブサイズを取得
     * @param {Object} config - 設定
     * @returns {Object} レスポンシブサイズ
     */
    getResponsiveSize(config = {}) {
        if (window.SVGHelper) {
            return SVGHelper.getResponsiveSize(this.container, {
                defaultWidth: this.layoutDefaults.minWidth || 800,
                defaultHeight: this.layoutDefaults.minHeight || 600,
                widthPercent: config.widthPercent,
                heightPercent: config.heightPercent,
                aspectRatio: config.aspectRatio || this.layoutDefaults.aspectRatio
            });
        }

        // フォールバック
        return this.calculateLayoutSize(config);
    }

    /**
     * マージン付きの内部サイズを計算
     * @param {Object} totalSize - 全体サイズ
     * @param {Object} margin - マージン設定
     * @returns {Object} 内部サイズ
     */
    getInnerSize(totalSize, margin) {
        const defaultMargin = this.layoutDefaults.margin || 
                            { top: 20, right: 20, bottom: 20, left: 20 };
        
        const finalMargin = { ...defaultMargin, ...margin };

        return {
            width: totalSize.width - finalMargin.left - finalMargin.right,
            height: totalSize.height - finalMargin.top - finalMargin.bottom,
            margin: finalMargin
        };
    }

    /**
     * レイアウトを更新
     * @param {Object} config - 設定
     */
    update(config) {
        this.config = this.mergeConfig(config);
        
        // サブクラスで実装
        this.render();
    }

    /**
     * レイアウトを描画（サブクラスで実装）
     */
    render() {
        throw new Error('BaseLayout: render() must be implemented by subclass');
    }

    /**
     * 設定をマージ
     * @param {Object} config - カスタム設定
     * @returns {Object} マージされた設定
     */
    mergeConfig(config) {
        return LayoutConfig.deepMerge(this.layoutDefaults, config);
    }

    /**
     * レイアウトをクリア
     */
    clear() {
        if (this.svg) {
            this.svg.selectAll('*').remove();
        }
    }

    /**
     * レイアウトを破棄
     */
    destroy() {
        this.clear();
        if (this.container) {
            this.container.selectAll('svg').remove();
        }
        this.isInitialized = false;
    }

    /**
     * トランジション設定を取得
     * @param {Object} customTransition - カスタムトランジション設定
     * @returns {Object} トランジション設定
     */
    getTransitionConfig(customTransition = {}) {
        // AppDefaults.animationから統一されたアニメーション設定を使用
        const defaults = {
            duration: window.AppDefaults?.animation?.chartTransitionDuration || 1000,
            easing: window.AppDefaults?.animation?.defaultEasing || 'easeInOut'
        };
        return { ...defaults, ...customTransition };
    }

    /**
     * エラーハンドリング
     * @param {Error} error - エラーオブジェクト
     * @param {string} context - コンテキスト
     */
    handleError(error, context) {
        console.error(`BaseLayout.${context}:`, error);
        
        if (window.ErrorHandler) {
            ErrorHandler.handle(error, `BaseLayout.${context}`, {
                type: ErrorHandler.ERROR_TYPES.RENDER,
                severity: ErrorHandler.SEVERITY.MEDIUM,
                context: {
                    layoutType: this.layoutType,
                    containerId: this.containerId
                }
            });
        }
    }

    /**
     * デバッグ情報を取得
     * @returns {Object} デバッグ情報
     */
    getDebugInfo() {
        return {
            layoutType: this.layoutType,
            containerId: this.containerId,
            isInitialized: this.isInitialized,
            containerSize: this.container ? {
                width: this.container.node().offsetWidth,
                height: this.container.node().offsetHeight
            } : null,
            config: this.config
        };
    }
}

// グローバルスコープで利用可能にする
window.BaseLayout = BaseLayout;