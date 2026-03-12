import { DISEASE_THEMES } from '../utils/theme.js';

export class TopPage {
  constructor(container) {
    this.container = container;
  }

  render() {
    const diseases = Object.values(DISEASE_THEMES);

    this.container.innerHTML = `
      <div class="top-page">
        <p class="top-lead">JCIEスペシャルコンテンツ</p>
        <h1 class="top-title">「感染症との闘い」</h1>
        <p class="top-subtitle">エイズ、結核、マラリア。人類を脅かす感染症の現状と課題をデータで紐解く。</p>
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
  }
}
