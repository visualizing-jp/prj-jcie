import { DISEASE_THEMES } from '../utils/theme.js';

export class HeaderNav {
  constructor(container, currentDiseaseId = 'aids') {
    this.container = container;
    this.currentDiseaseId = currentDiseaseId;
  }

  render() {
    const theme = DISEASE_THEMES[this.currentDiseaseId];

    this.container.innerHTML = `
      <div class="nav-inner">
        <div class="nav-logo">
          <span class="nav-logo-text">データで見る感染症との闘い</span>
        </div>
        <ul class="nav-links">
          ${Object.values(DISEASE_THEMES)
            .map((d) => {
              const isActive = d.id === this.currentDiseaseId;
              return `
              <li>
                <a href="/${d.id}/"
                   class="nav-link${isActive ? ' active' : ''}"
                   style="--link-color: ${d.primary}"
                   data-disease="${d.id}">
                  ${d.name}
                </a>
              </li>`;
            })
            .join('')}
        </ul>
      </div>
    `;

    document.documentElement.style.setProperty('--theme-primary', theme.primary);
    document.documentElement.style.setProperty('--theme-secondary', theme.secondary);
    document.documentElement.style.setProperty('--theme-accent', theme.accent);
  }
}
