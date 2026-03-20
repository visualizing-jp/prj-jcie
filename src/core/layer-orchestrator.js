import { WebGLLayer } from '../layers/webgl-layer.js';
import { ImageLayer } from '../layers/image-layer.js';
import { MapLayer } from '../layers/map-layer.js';
import { ChartLayer } from '../layers/chart-layer.js';

export class LayerOrchestrator {
  constructor(config) {
    this.config = config;
    this.elements = {};
    this.svgHosts = null;
    this.webglLayer = null;
    this.imageLayer = null;
    this.mapLayer = null;
    this.chartLayer = null;
    this.activeLayer = null;
    this.activeChartSpanId = null;
  }

  async init() {
    this.elements = {
      image: document.getElementById('image-layer'),
      webgl: document.getElementById('webgl-layer'),
      svg: document.getElementById('svg-layer'),
    };

    // WebGLレイヤー初期化
    const canvas = this.elements.webgl;
    if (canvas) {
      this.webglLayer = new WebGLLayer(canvas);
      this.webglLayer.init();
      canvas.classList.add('active');
      this.activeLayer = 'webgl';
    }

    // 画像レイヤー初期化
    if (this.elements.image) {
      this.imageLayer = new ImageLayer(this.elements.image);
    }

    // 地図レイヤー初期化
    if (this.elements.svg) {
      this.svgHosts = this.createSvgHosts(this.elements.svg);
      this.mapLayer = new MapLayer(this.svgHosts.map);
      this.chartLayer = new ChartLayer(this.svgHosts.chart);
    }
  }

  createSvgHosts(svgRoot) {
    svgRoot.innerHTML = '';

    const mapHost = document.createElement('div');
    mapHost.className = 'svg-sub-layer';
    mapHost.dataset.layer = 'map';

    const chartHost = document.createElement('div');
    chartHost.className = 'svg-sub-layer';
    chartHost.dataset.layer = 'chart';

    svgRoot.appendChild(mapHost);
    svgRoot.appendChild(chartHost);

    return { map: mapHost, chart: chartHost };
  }

  transition(stepConfig, direction) {
    const target = this.resolveActiveLayer(stepConfig);

    // 前のアクティブレイヤーを非表示
    if (this.activeLayer && this.activeLayer !== target) {
      const prevEl = this.elements[this.activeLayer];
      if (prevEl) {
        prevEl.classList.remove('active');
        prevEl.classList.remove('clip-enter');
      }
      if (this.activeLayer === 'image') {
        this.imageLayer?.hide();
      }
      if (this.activeLayer === 'svg') {
        this.mapLayer?.clear();
        this.chartLayer?.clear();
        this.activeChartSpanId = null;
      }
    }

    // 新しいレイヤーを表示（clip-pathアニメーション付き）
    if (target && this.elements[target]) {
      const el = this.elements[target];
      el.classList.add('active');

      // レイヤー切り替え時のみclip-path遷移
      if (this.activeLayer && this.activeLayer !== target) {
        el.classList.remove('clip-enter');
        // reflow強制でアニメーション再トリガー
        void el.offsetWidth;
        el.classList.add('clip-enter');
      }
    }

    // 画像レイヤーの場合、画像をセット
    if (target === 'image' && stepConfig.image) {
      this.imageLayer?.show(stepConfig.image);
    }

    // SVGレイヤー（地図・チャート）を更新
    if (target === 'svg') {
      if (stepConfig.map?.visible) {
        this.chartLayer?.clear();
        this.activeChartSpanId = null;
        this.mapLayer?.render(stepConfig.map);
      } else if (stepConfig.chart?.visible) {
        this.mapLayer?.clear();
        const spanId = this.resolveChartSpanId(stepConfig.chart);
        const continueFromPrevious = this.shouldContinueChartFromPrevious(stepConfig.chart);
        const shouldReuse = continueFromPrevious && spanId && this.activeChartSpanId === spanId;

        this.chartLayer?.render(stepConfig.chart, {
          transitionFromPrevious: Boolean(shouldReuse),
          spanId,
          textPosition: stepConfig.text?.visible ? stepConfig.text.position : null,
        }).catch((error) => {
          console.error('Chart render failed:', error);
        });
        this.activeChartSpanId = spanId;
      } else {
        this.mapLayer?.clear();
        this.chartLayer?.clear();
        this.activeChartSpanId = null;
      }
    }

    this.activeLayer = target;
  }

  resolveActiveLayer(stepConfig) {
    if (stepConfig.chart?.visible || stepConfig.map?.visible) {
      return 'svg';
    }
    if (stepConfig.image?.visible) {
      return 'image';
    }
    return 'webgl';
  }

  resolveChartSpanId(chartConfig) {
    const id = chartConfig?.span?.id;
    if (id == null) return null;
    const normalized = String(id).trim();
    return normalized.length > 0 ? normalized : null;
  }

  shouldContinueChartFromPrevious(chartConfig) {
    return Boolean(chartConfig?.span?.continueFromPrevious);
  }

  updateProgress(progress) {
    this.webglLayer?.setProgress(progress);
  }

  setThemeColor(hex) {
    this.webglLayer?.setThemeColor(hex);
  }

  destroy() {
    this.chartLayer?.destroy();
    this.mapLayer?.destroy();
    this.webglLayer?.destroy();
  }
}
