import './style.css';
import { ConfigManager } from './core/config-manager.js';
import { ScrollController } from './core/scroll-controller.js';
import { LayerOrchestrator } from './core/layer-orchestrator.js';
import { ContentRenderer } from './core/content-renderer.js';
import { HeaderNav } from './core/header-nav.js';
import { getDiseaseIdFromUrl } from './utils/router.js';

class App {
  constructor() {
    this.config = null;
    this.scrollController = null;
    this.layerOrchestrator = null;
    this.contentRenderer = null;
  }

  async init() {
    try {
      // 0. URLからdisease IDを判別
      const diseaseId = getDiseaseIdFromUrl();

      // 1. ヘッダーナビゲーション
      const headerNav = new HeaderNav(
        document.getElementById('header-nav'),
        diseaseId
      );
      headerNav.render();

      // 2. 設定読み込み（disease別）
      const configManager = new ConfigManager(diseaseId);
      this.config = await configManager.load();

      // 3. コンテンツ（Step要素）の生成
      this.contentRenderer = new ContentRenderer(this.config);
      this.contentRenderer.render();

      // 4. レイヤー制御の初期化
      this.layerOrchestrator = new LayerOrchestrator(this.config);
      await this.layerOrchestrator.init();

      // 5. スクロール制御の初期化
      this.scrollController = new ScrollController({
        onStepEnter: (stepIndex, direction) => this.handleStepEnter(stepIndex, direction),
        onStepLeave: (stepIndex, direction) => this.handleStepLeave(stepIndex, direction),
        onProgress: (progress) => this.handleProgress(progress),
      });
      this.scrollController.init();

      console.log(`App initialized with ${this.config.steps.length} steps`);
    } catch (error) {
      console.error('App initialization failed:', error);
    }
  }

  handleStepEnter(stepIndex, direction) {
    const stepConfig = this.config.steps[stepIndex];
    if (!stepConfig) return;

    this.contentRenderer.activateStep(stepIndex);
    this.layerOrchestrator.transition(stepConfig, direction);
  }

  handleStepLeave(stepIndex, direction) {
    this.contentRenderer.deactivateStep(stepIndex);
  }

  handleProgress(progress) {
    this.layerOrchestrator.updateProgress(progress);
  }
}

const app = new App();
app.init();
