import { DISEASE_THEMES } from '../utils/theme.js';
import { GlobeAnimation } from '../layers/globe-animation.js';

export class TopPage {
  constructor(container) {
    this.container = container;
    this.globe = null;
  }

  render() {
    const diseases = Object.values(DISEASE_THEMES);

    this.container.innerHTML = `
      <div id="globe-container"></div>
      <div class="top-page">
        <p class="top-lead">JCIEスペシャルコンテンツ</p>
        <h1 class="top-title">「感染症との闘い」</h1>
        <p class="top-subtitle">エイズ、結核、マラリア。人類を脅かす感染症の現状と課題をデータで紐解く。</p>
        <span id="globe-country-name"></span>
        <div class="top-disease-grid">
          ${diseases
            .map(
              (d) => `
            <a href="${import.meta.env.BASE_URL}${d.id}/" class="top-disease-card" style="--card-color: ${d.primary}">
              <span class="top-disease-name">${d.name}</span>
            </a>`
            )
            .join('')}
        </div>
      </div>
    `;

    this.initGlobe();
  }

  async initGlobe() {
    const globeContainer = document.getElementById('globe-container');
    const countryNameEl = document.getElementById('globe-country-name');
    if (!globeContainer) return;

    this.globe = new GlobeAnimation(globeContainer);
    this.globe.setCountryNameElement(countryNameEl);

    try {
      await this.globe.init();
    } catch (error) {
      console.warn('Globe animation failed to init:', error);
    }
  }

  destroy() {
    if (this.globe) {
      this.globe.destroy();
      this.globe = null;
    }
  }
}
