/**
 * ResponsiveHelper - レスポンシブ対応ユーティリティ
 * ブレークポイント判定とレスポンシブサイズ計算を提供
 */
class ResponsiveHelper {
    /**
     * ブレークポイント設定
     */
    static BREAKPOINTS = {
        mobile: 768,
        tablet: 1024,
        desktop: 1440
    };

    /**
     * チャートサイズ設定
     */
    static CHART_SIZES = {
        default: {
            width: 800,
            height: 600
        },
        small: {
            width: 600,
            height: 400
        }
    };

    /**
     * チャートマージン設定
     */
    static CHART_MARGINS = {
        default: {
            top: 40,
            right: 20,
            bottom: 40,
            left: 50
        },
        compact: {
            top: 20,
            right: 20,
            bottom: 40,
            left: 40
        },
        minimal: {
            top: 20,
            right: 20,
            bottom: 40,
            left: 50
        },
        none: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    };

    /**
     * レスポンシブブレークポイントをチェック
     * @param {string} breakpoint - 'mobile', 'tablet', 'desktop'
     * @returns {boolean}
     */
    static isBreakpoint(breakpoint) {
        const width = window.innerWidth;
        switch(breakpoint) {
            case 'mobile':
                return width < this.BREAKPOINTS.mobile;
            case 'tablet':
                return width >= this.BREAKPOINTS.mobile && width < this.BREAKPOINTS.tablet;
            case 'desktop':
                return width >= this.BREAKPOINTS.tablet;
            default:
                return false;
        }
    }

    /**
     * レスポンシブサイズを取得
     * @returns {Object} {width, height}
     */
    static getResponsiveSize() {
        if (this.isBreakpoint('mobile')) {
            return this.CHART_SIZES.small;
        }
        return this.CHART_SIZES.default;
    }

    /**
     * レスポンシブマージンを取得
     * @param {string} type - 'default', 'compact', 'minimal', 'none'
     * @returns {Object} {top, right, bottom, left}
     */
    static getResponsiveMargin(type = 'default') {
        const marginType = this.isBreakpoint('mobile') ? 'compact' : type;
        return this.CHART_MARGINS[marginType] || this.CHART_MARGINS.default;
    }

    /**
     * 現在のデバイスタイプを取得
     * @returns {string} 'mobile', 'tablet', 'desktop'
     */
    static getCurrentDeviceType() {
        if (this.isBreakpoint('mobile')) {
            return 'mobile';
        } else if (this.isBreakpoint('tablet')) {
            return 'tablet';
        }
        return 'desktop';
    }

    /**
     * ウィンドウサイズを取得
     * @returns {Object} {width, height}
     */
    static getWindowSize() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }
}

// グローバルスコープで利用可能にする
window.ResponsiveHelper = ResponsiveHelper;
