import { WebGLLayer } from '../layers/webgl-layer.js';
import { ImageLayer } from '../layers/image-layer.js';
import { MapLayer } from '../layers/map-layer.js';

export class LayerOrchestrator {
  constructor(config) {
    this.config = config;
    this.elements = {};
    this.webglLayer = null;
    this.imageLayer = null;
    this.mapLayer = null;
    this.activeLayer = null;
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
      this.mapLayer = new MapLayer(this.elements.svg);
    }
  }

  transition(stepConfig, direction) {
    const target = this.resolveActiveLayer(stepConfig);

    // 前のアクティブレイヤーを非表示
    if (this.activeLayer && this.activeLayer !== target) {
      this.elements[this.activeLayer]?.classList.remove('active');
      if (this.activeLayer === 'image') {
        this.imageLayer?.hide();
      }
    }

    // 新しいレイヤーを表示
    if (target && this.elements[target]) {
      this.elements[target].classList.add('active');
    }

    // 画像レイヤーの場合、画像をセット
    if (target === 'image' && stepConfig.image) {
      this.imageLayer?.show(stepConfig.image);
    }

    // SVGレイヤー（地図）を更新
    if (target === 'svg') {
      if (stepConfig.map?.visible) {
        this.mapLayer?.render(stepConfig.map);
      } else {
        this.mapLayer?.clear();
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

  updateProgress(progress) {
    this.webglLayer?.setProgress(progress);
  }

  setThemeColor(hex) {
    this.webglLayer?.setThemeColor(hex);
  }

  destroy() {
    this.webglLayer?.destroy();
  }
}
