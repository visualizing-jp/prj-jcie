/**
 * Positioner - ステップコンテンツのポジショニング管理
 * テキスト、チャート、地図、画像の位置設定を統一管理
 */
class Positioner {
    /**
     * ステップのポジショニングを適用
     * @param {HTMLElement} stepElement - ステップ要素
     * @param {Object} stepConfig - ステップ設定
     * @param {string} stepLogicalName - ステップの論理名
     */
    static applyStepPositioning(stepElement, stepConfig, stepLogicalName) {
        if (!window.PositionManager) {
            console.warn('PositionManager not available, skipping positioning');
            return;
        }

        // チャートポジション設定
        if (stepConfig.chart && stepConfig.chart.visible !== false) {
            this.applyChartPositioning(stepConfig.chart, stepLogicalName);
        } else {
            // チャートが存在しないまたは非表示の場合、chart-containerと#chartを非表示にする
            const chartContainer = document.getElementById('chart-container');
            const chartElement = document.getElementById('chart');
            if (chartContainer) {
                chartContainer.classList.remove('visible');
            }
            if (chartElement) {
                chartElement.classList.remove('visible');
            }
        }

        // 地図ポジション設定
        if (stepConfig.map && stepConfig.map.visible !== false) {
            this.applyMapPositioning(stepConfig.map, stepLogicalName);
        }

        // 画像ポジション設定
        if (stepConfig.image && stepConfig.image.visible !== false) {
            this.applyImagePositioning(stepConfig.image, stepLogicalName);
        }

        // 複数コンテンツの場合の調整
        this.adjustMultiContentPositioning(stepConfig, stepLogicalName);
    }

    /**
     * チャートのポジション設定を適用
     * @param {Object} chartConfig - チャート設定
     * @param {string} stepLogicalName - ステップの論理名
     */
    static applyChartPositioning(chartConfig, stepLogicalName) {
        const container = document.getElementById('chart-container');
        if (!container) return;

        const position = chartConfig.position || { width: '100%', horizontal: 'center', vertical: 'center' };

        const positionValue = window.PositionManager?.calculatePosition(position) || {};
        container.style.left = `${positionValue.left || 0}px`;
        container.style.top = `${positionValue.top || 0}px`;
        container.style.width = `${positionValue.width || '100%'}`;
        container.style.height = `${positionValue.height || '100%'}`;
    }

    /**
     * 地図のポジション設定を適用
     * @param {Object} mapConfig - 地図設定
     * @param {string} stepLogicalName - ステップの論理名
     */
    static applyMapPositioning(mapConfig, stepLogicalName) {
        const container = document.getElementById('map-container');
        if (!container) return;

        const position = mapConfig.position || { width: '100%', horizontal: 'center', vertical: 'center' };

        const positionValue = window.PositionManager?.calculatePosition(position) || {};
        container.style.left = `${positionValue.left || 0}px`;
        container.style.top = `${positionValue.top || 0}px`;
        container.style.width = `${positionValue.width || '100%'}`;
        container.style.height = `${positionValue.height || '100%'}`;
    }

    /**
     * 画像のポジション設定を適用
     * @param {Object} imageConfig - 画像設定
     * @param {string} stepLogicalName - ステップの論理名
     */
    static applyImagePositioning(imageConfig, stepLogicalName) {
        const container = document.getElementById('image-container');
        if (!container) return;

        const position = imageConfig.position || { width: '100%', horizontal: 'center', vertical: 'center' };

        const positionValue = window.PositionManager?.calculatePosition(position) || {};
        container.style.left = `${positionValue.left || 0}px`;
        container.style.top = `${positionValue.top || 0}px`;
        container.style.width = `${positionValue.width || '100%'}`;
        container.style.height = `${positionValue.height || '100%'}`;
    }

    /**
     * テキストのポジション設定を適用
     * @param {Object} textConfig - テキスト設定
     * @param {HTMLElement} stepElement - ステップ要素
     * @param {string} stepLogicalName - ステップの論理名
     */
    static applyTextPositioning(textConfig, stepElement, stepLogicalName) {
        const textElements = stepElement?.querySelectorAll('.text-box, .max-w-lg');
        if (!textElements || textElements.length === 0) return;

        const position = textConfig?.position || { width: '30%', horizontal: 'left', vertical: 'center' };

        textElements.forEach(el => {
            const positionValue = window.PositionManager?.calculatePosition(position) || {};
            el.style.position = 'absolute';
            el.style.left = `${positionValue.left || 0}px`;
            el.style.top = `${positionValue.top || 0}px`;
            el.style.width = `${positionValue.width || '30%'}`;
        });
    }

    /**
     * 複数コンテンツのポジション調整
     * @param {Object} stepConfig - ステップ設定
     * @param {string} stepLogicalName - ステップの論理名
     */
    static adjustMultiContentPositioning(stepConfig, stepLogicalName) {
        const visibleContents = [];
        if (stepConfig.chart?.visible !== false) visibleContents.push('chart');
        if (stepConfig.map?.visible !== false) visibleContents.push('map');
        if (stepConfig.image?.visible !== false) visibleContents.push('image');

        if (visibleContents.length <= 1) return;

        // 複数コンテンツの場合のカスタムレイアウト処理
        // レイアウトルールに基づいて調整
    }

    /**
     * すべてのポジション設定をリセット
     */
    static resetAllPositions() {
        ['chart-container', 'map-container', 'image-container'].forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.style.left = '0';
                el.style.top = '0';
                el.style.width = '100%';
                el.style.height = '100%';
                el.classList.remove('visible');
            }
        });
    }

    /**
     * テキストボックスを表示
     * @param {HTMLElement} stepElement - ステップ要素
     */
    static showTextBox(stepElement) {
        const textElements = stepElement?.querySelectorAll('.text-box, .max-w-lg');
        textElements?.forEach(el => {
            el.style.display = 'block';
            el.classList.add('visible');
        });
    }

    /**
     * テキストボックスを非表示
     * @param {HTMLElement} stepElement - ステップ要素
     */
    static hideTextBox(stepElement) {
        const textElements = stepElement?.querySelectorAll('.text-box, .max-w-lg');
        textElements?.forEach(el => {
            el.style.display = 'none';
            el.classList.remove('visible');
        });
    }
}

// グローバルスコープで利用可能にする
window.Positioner = Positioner;
