/**
 * LayoutHelper - レイアウト計算・ユーティリティ
 * LayoutConfigの計算ロジックと検証ユーティリティを提供
 */
class LayoutHelper {
    /**
     * グリッドレイアウトの自動計算
     * @param {number} itemCount - アイテム数
     * @param {Object} constraints - 制約条件
     * @returns {Object} 計算されたグリッド設定
     */
    static calculateOptimalGrid(itemCount, constraints = {}) {
        const {
            maxColumns = LayoutConfig.DEFAULTS.grid.maxColumns,
            maxRows = LayoutConfig.DEFAULTS.grid.maxRows,
            aspectRatio = 1, // チャートのアスペクト比
            containerAspectRatio = 16 / 9 // コンテナのアスペクト比
        } = constraints;

        // 最適な列数を計算
        let optimalColumns = Math.ceil(Math.sqrt(itemCount * containerAspectRatio / aspectRatio));
        optimalColumns = Math.min(optimalColumns, maxColumns);
        optimalColumns = Math.max(optimalColumns, 1);

        // 必要な行数を計算
        let optimalRows = Math.ceil(itemCount / optimalColumns);
        optimalRows = Math.min(optimalRows, maxRows);

        // 収まらない場合は列数を調整
        if (optimalColumns * optimalRows < itemCount) {
            optimalColumns = Math.ceil(itemCount / optimalRows);
        }

        return {
            columns: optimalColumns,
            rows: optimalRows,
            totalItems: itemCount,
            actualItems: optimalColumns * optimalRows
        };
    }

    /**
     * レイアウト位置を計算
     * @param {Object} position - position設定
     * @param {Object} containerSize - コンテナサイズ
     * @returns {Object} 計算された位置とサイズ
     */
    static calculateLayoutPosition(position, containerSize) {
        const {
            width = '100%',
            height = '100%',
            horizontal = 'center',
            vertical = 'center'
        } = position;

        const { containerWidth, containerHeight } = containerSize;

        // サイズ計算
        const layoutWidth = this.parseDimension(width, containerWidth);
        const layoutHeight = this.parseDimension(height, containerHeight);

        // 位置計算
        let x = 0, y = 0;

        // 水平位置
        switch (horizontal) {
            case 'left':
                x = 0;
                break;
            case 'right':
                x = containerWidth - layoutWidth;
                break;
            case 'center':
            default:
                x = (containerWidth - layoutWidth) / 2;
                break;
        }

        // 垂直位置
        switch (vertical) {
            case 'top':
                y = 0;
                break;
            case 'bottom':
                y = containerHeight - layoutHeight;
                break;
            case 'center':
            default:
                y = (containerHeight - layoutHeight) / 2;
                break;
        }

        return {
            x: Math.max(0, x),
            y: Math.max(0, y),
            width: layoutWidth,
            height: layoutHeight
        };
    }

    /**
     * ディメンション値をパース
     * @param {string|number} value - 値
     * @param {number} referenceSize - 参照サイズ
     * @returns {number} 計算された値
     */
    static parseDimension(value, referenceSize) {
        if (typeof value === 'number') {
            return value;
        }
        if (typeof value === 'string' && value.endsWith('%')) {
            const percentage = parseFloat(value) / 100;
            return referenceSize * percentage;
        }
        if (typeof value === 'string' && value.endsWith('px')) {
            return parseFloat(value);
        }
        return parseFloat(value) || referenceSize;
    }

    /**
     * レイアウト設定を検証
     * @param {Object} config - 設定オブジェクト
     * @param {string} layoutType - レイアウトタイプ
     * @returns {Object} 検証結果
     */
    static validateLayoutConfig(config, layoutType) {
        const errors = [];
        const warnings = [];

        // 基本的な型チェック
        if (!config || typeof config !== 'object') {
            errors.push('Config must be an object');
            return { valid: false, errors, warnings };
        }

        // レイアウトタイプ別の検証
        switch (layoutType) {
            case 'dual':
                if (config.charts && !Array.isArray(config.charts)) {
                    errors.push('Dual layout requires charts array');
                }
                if (config.charts && config.charts.length !== 2) {
                    warnings.push('Dual layout expects exactly 2 charts');
                }
                break;

            case 'triple':
                if (config.charts && !Array.isArray(config.charts)) {
                    errors.push('Triple layout requires charts array');
                }
                if (config.charts && config.charts.length !== 3) {
                    warnings.push('Triple layout expects exactly 3 charts');
                }
                break;

            case 'grid':
                if (config.gridMode === 'fixed' && (!config.columns || !config.rows)) {
                    errors.push('Fixed grid mode requires columns and rows');
                }
                if (config.columns > LayoutConfig.DEFAULTS.grid.maxColumns) {
                    warnings.push(`Column count ${config.columns} exceeds recommended maximum ${LayoutConfig.DEFAULTS.grid.maxColumns}`);
                }
                break;
        }

        // position設定の検証
        if (config.position) {
            const validHorizontal = ['left', 'center', 'right'];
            const validVertical = ['top', 'center', 'bottom'];

            if (config.position.horizontal && !validHorizontal.includes(config.position.horizontal)) {
                errors.push(`Invalid horizontal position: ${config.position.horizontal}`);
            }
            if (config.position.vertical && !validVertical.includes(config.position.vertical)) {
                errors.push(`Invalid vertical position: ${config.position.vertical}`);
            }
        }

        return {
            valid: errors.length === 0,
            errors,
            warnings
        };
    }

    /**
     * ディープマージユーティリティ
     * @param {Object} target - ターゲットオブジェクト
     * @param {Object} source - ソースオブジェクト
     * @returns {Object} マージされたオブジェクト
     */
    static deepMerge(target, source) {
        const output = { ...target };

        if (this.isObject(target) && this.isObject(source)) {
            Object.keys(source).forEach(key => {
                if (this.isObject(source[key])) {
                    if (!(key in target)) {
                        output[key] = source[key];
                    } else {
                        output[key] = this.deepMerge(target[key], source[key]);
                    }
                } else {
                    output[key] = source[key];
                }
            });
        }

        return output;
    }

    /**
     * オブジェクト判定
     * @param {*} item - 判定対象
     * @returns {boolean} オブジェクトかどうか
     */
    static isObject(item) {
        return item && typeof item === 'object' && !Array.isArray(item);
    }
}

// グローバルスコープで利用可能にする
window.LayoutHelper = LayoutHelper;
