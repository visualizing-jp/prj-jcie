import { DISEASE_THEMES } from '../utils/theme.js';

export class TopPage {
  constructor(container) {
    this.container = container;
  }

  render() {
    const diseases = Object.values(DISEASE_THEMES);

    this.container.innerHTML = `
      <div class="top-page">
        <h1 class="top-title">感染症との闘い</h1>
        <p class="top-subtitle">データで読み解く、三大感染症の現在地</p>
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
