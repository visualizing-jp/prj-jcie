/**
 * LayoutConfig - 統一レイアウト設定
 * 
 * 全てのチャートレイアウトタイプの標準設定を提供
 * レイアウトの一貫性と保守性を確保
 */
class LayoutConfig {
    /**
     * レイアウトタイプ定数
     */
    static LAYOUT_TYPES = {
        SINGLE: 'single',
        DUAL: 'dual',
        TRIPLE: 'triple',
        GRID: 'grid'
    };

    /**
     * レイアウトプリセット
     */
    static PRESETS = {
        // Single Layout Presets
        SINGLE_FULL: {
            type: 'single',
            position: {
                width: '100%',
                height: '80%',
                horizontal: 'center',
                vertical: 'center'
            }
        },
        SINGLE_COMPACT: {
            type: 'single',
            position: {
                width: '80%',
                height: '60%',
                horizontal: 'center',
                vertical: 'center'
            }
        },

        // Dual Layout Presets
        DUAL_HORIZONTAL: {
            type: 'dual',
            position: {
                width: '90%',
                height: '70%',
                horizontal: 'center',
                vertical: 'center'
            },
            arrangement: 'horizontal',
            spacing: 40,
            aspectRatio: [1, 1] // 各チャートの比率
        },
        DUAL_VERTICAL: {
            type: 'dual',
            position: {
                width: '80%',
                height: '90%',
                horizontal: 'center',
                vertical: 'center'
            },
            arrangement: 'vertical',
            spacing: 30,
            aspectRatio: [1, 1]
        },
        DUAL_ASYMMETRIC: {
            type: 'dual',
            position: {
                width: '95%',
                height: '70%',
                horizontal: 'center',
                vertical: 'center'
            },
            arrangement: 'horizontal',
            spacing: 40,
            aspectRatio: [3, 2] // 左が大きい
        },

        // Triple Layout Presets
        TRIPLE_HORIZONTAL: {
            type: 'triple',
            position: {
                width: '95%',
                height: '60%',
                horizontal: 'center',
                vertical: 'center'
            },
            arrangement: 'horizontal',
            spacing: 30,
            aspectRatio: [1, 1, 1]
        },
        TRIPLE_PYRAMID: {
            type: 'triple',
            position: {
                width: '90%',
                height: '80%',
                horizontal: 'center',
                vertical: 'center'
            },
            arrangement: 'pyramid', // 2上1下
            spacing: 30,
            aspectRatio: [1, 1, 2]
        },

        // Grid Layout Presets
        GRID_AUTO: {
            type: 'grid',
            gridMode: 'auto', // データから自動計算
            position: {
                width: '95%',
                height: '85%',
                horizontal: 'center',
                vertical: 'center'
            },
            chartSize: {
                width: 120,
                height: 120
            },
            spacing: {
                column: 20,
                row: 40
            }
        },
        GRID_FIXED_7x2: {
            type: 'grid',
            gridMode: 'fixed',
            columns: 7,
            rows: 2,
            position: {
                width: '100%',
                height: '70%',
                horizontal: 'center',
                vertical: 'center'
            },
            chartSize: {
                width: 120,
                height: 120
            },
            spacing: {
                column: 20,
                row: 50
            }
        },
        GRID_COMPACT: {
            type: 'grid',
            gridMode: 'auto',
            position: {
                width: '90%',
                height: '70%',
                horizontal: 'center',
                vertical: 'center'
            },
            chartSize: {
                width: 100,
                height: 100
            },
            spacing: {
                column: 15,
                row: 30
            }
        }
    };

    /**
     * デフォルト設定
     */
    static DEFAULTS = {
        // Single Layout
        single: {
            margin: { top: 40, right: 60, bottom: 40, left: 60 },
            minWidth: 400,
            maxWidth: 1200,
            minHeight: 300,
            maxHeight: 800,
            aspectRatio: 16 / 9
        },

        // Dual Layout
        dual: {
            spacing: 40,
            arrangement: 'horizontal',
            minTotalWidth: 800,
            maxTotalWidth: 1400,
            minTotalHeight: 400,
            maxTotalHeight: 800,
            chartMargin: { top: 30, right: 30, bottom: 30, left: 50 }
        },

        // Triple Layout
        triple: {
            spacing: 30,
            arrangement: 'horizontal',
            minTotalWidth: 900,
            maxTotalWidth: 1600,
            minTotalHeight: 300,
            maxTotalHeight: 700,
            chartMargin: { top: 25, right: 25, bottom: 25, left: 45 }
        },

        // Grid Layout
        grid: {
            chartSize: { width: 120, height: 120 },
            spacing: { column: 20, row: 40 },
            maxColumns: 10,
            maxRows: 5,
            labelConfig: {
                showLabels: true,
                showPercentages: true,
                fontSize: 12
            }
        }
    };

    /**
     * レイアウト設定を取得
     * @param {string} layoutType - レイアウトタイプ
     * @param {Object} customConfig - カスタム設定
     * @returns {Object} マージされた設定
     */
    static getLayoutConfig(layoutType, customConfig = {}) {
        const defaults = this.DEFAULTS[layoutType] || this.DEFAULTS.single;
        return LayoutHelper.deepMerge(defaults, customConfig);
    }

    /**
     * プリセットを取得
     * @param {string} presetName - プリセット名
     * @param {Object} overrides - 上書き設定
     * @returns {Object} プリセット設定
     */
    static getPreset(presetName, overrides = {}) {
        const preset = this.PRESETS[presetName];
        if (!preset) {
            console.warn(`LayoutConfig: Unknown preset '${presetName}'`);
            return null;
        }
        return LayoutHelper.deepMerge(preset, overrides);
    }

}

// グローバルスコープで利用可能にする
window.LayoutConfig = LayoutConfig;