export class ConfigManager {
  constructor(diseaseId = 'aids') {
    this.diseaseId = diseaseId;
  }

  async load() {
    const [config, cityEpisodeData] = await Promise.all([
      this.loadContentConfig(),
      this.loadCityEpisodeConfig(),
    ]);
    return this.normalize(config, cityEpisodeData);
  }

  async loadContentConfig() {
    const response = await fetch(`/config/${this.diseaseId}/content.json`);
    if (!response.ok) {
      throw new Error(`Failed to load config: ${response.status}`);
    }
    return response.json();
  }

  async loadCityEpisodeConfig() {
    const response = await fetch(`/config/${this.diseaseId}/content-map.json`);
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Failed to load city episode config: ${response.status}`);
    }
    return response.json();
  }

  normalize(config, cityEpisodeData) {
    const expandedSteps = this.expandSteps(config.steps || [], cityEpisodeData);
    const steps = this.appendFixedClosingStep(expandedSteps);
    return {
      steps: steps.map((step, index) => ({
        id: step.id || `step${index}`,
        index,
        text: step.text || null,
        chart: step.chart || null,
        map: step.map || null,
        image: step.image || null,
        scrollHeight: step.scrollHeight || null,
        fixedClosing: Boolean(step.fixedClosing),
      })),
      settings: config.settings || {},
      raw: config,
    };
  }

  expandSteps(steps, cityEpisodeData) {
    const expanded = [];

    for (const step of steps) {
      const isCityEpisodeAnchor =
        step.id === 'city-episodes-anchor' || step.cityEpisodes?.enabled;

      if (isCityEpisodeAnchor) {
        const cityEpisodeSteps = this.buildCityEpisodeSteps(cityEpisodeData);
        if (cityEpisodeSteps.length > 0) {
          expanded.push(...cityEpisodeSteps);
          continue;
        }
      }

      expanded.push(step);
    }

    return expanded;
  }

  buildCityEpisodeSteps(cityEpisodeData) {
    const cities = Array.isArray(cityEpisodeData?.cities) ? cityEpisodeData.cities : [];
    if (cities.length === 0) {
      return [];
    }

    const timelineTitle = this.escapeHtml(
      cityEpisodeData?.timeline?.title || '都市エピソード'
    );
    const timelineDescription = this.escapeHtml(
      cityEpisodeData?.timeline?.description || ''
    );

    const sortedCities = [...cities].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    const result = [
      {
        id: 'episode-intro',
        text: {
          content: `<h2>${timelineTitle}</h2><p>${timelineDescription}</p>`,
          visible: true,
          position: { horizontal: 'left', vertical: 'center', width: '34%' },
        },
        chart: { visible: false },
        map: {
          visible: true,
          mode: 'world-overview',
          center: [0, 15],
          zoom: 1.15,
          highlightCountries: [],
          lightenAllCountries: true,
          lightenNonVisited: false,
          markers: [],
        },
        image: { visible: false },
        scrollHeight: '100vh',
      },
    ];

    const visitedCountries = new Set();
    const visitedCities = [];

    sortedCities.forEach((city, index) => {
      const country = city.country || '';
      const longitude = Number(city.longitude);
      const latitude = Number(city.latitude);

      if (Number.isFinite(longitude) && Number.isFinite(latitude)) {
        visitedCities.push(city);
      }
      if (country) {
        visitedCountries.add(country);
      }

      result.push({
        id: `city-episodes-${city.id || index + 1}`,
        text: {
          content: this.renderCityEpisodeCard(city, index + 1, sortedCities.length),
          visible: true,
          position: {
            horizontal: index % 2 === 0 ? 'right' : 'left',
            vertical: 'center',
            width: '36%',
          },
        },
        chart: { visible: false },
        map: {
          visible: true,
          mode: 'single-city',
          cityId: city.id || null,
          center: [
            Number.isFinite(longitude) ? longitude : 0,
            Number.isFinite(latitude) ? latitude : 15,
          ],
          zoom: this.resolveCityZoom(city),
          highlightCountries: [...visitedCountries],
          lightenNonVisited: true,
          markers: visitedCities.map((visitedCity) => ({
            id: visitedCity.id || `${visitedCity.nameEn || visitedCity.name}`,
            name: visitedCity.name || visitedCity.nameEn || '',
            country: visitedCity.country || '',
            longitude: Number(visitedCity.longitude),
            latitude: Number(visitedCity.latitude),
            color: visitedCity.style?.color || null,
            size: visitedCity.style?.size || 7,
            isCurrent: visitedCity.id === city.id,
          })),
        },
        image: { visible: false },
        scrollHeight: city.transitions?.scrollHeight || '120vh',
      });
    });

    return result;
  }

  renderCityEpisodeCard(city, index, total) {
    const title = this.escapeHtml(city?.data?.title || city?.name || '');
    const description = this.escapeHtml(city?.data?.description || '');
    const name = this.escapeHtml(city?.name || city?.nameEn || '');
    const nameEn = this.escapeHtml(city?.nameEn || '');
    const url = this.escapeHtml(city?.data?.url || '#');
    const thumbnail = city?.data?.thumbnail
      ? `/config/${this.diseaseId}/thumb/${encodeURIComponent(city.data.thumbnail)}`
      : '';
    const thumbnailTag = thumbnail
      ? `<img class="city-episode-thumb" src="${thumbnail}" alt="${title}" loading="lazy" />`
      : '';

    return `
      <article class="city-episode-card">
        <p class="city-episode-meta">都市エピソード ${index}/${total}</p>
        ${thumbnailTag}
        <h3 class="city-episode-title">${title}</h3>
        <p class="city-episode-location">${name}${nameEn ? ` / ${nameEn}` : ''}</p>
        <p class="city-episode-description">${description}</p>
        <a class="city-episode-link" href="${url}" target="_blank" rel="noopener noreferrer">外部コンテンツを見る</a>
      </article>
    `;
  }

  resolveCityZoom(city) {
    const routeType = city?.transitions?.routeType;
    if (routeType === 'same-location') {
      return 3.6;
    }
    if (routeType === 'start') {
      return 2.8;
    }
    return 2.5;
  }

  escapeHtml(value) {
    const str = String(value ?? '');
    return str
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  appendFixedClosingStep(steps) {
    const filtered = steps.filter((step) => step.id !== 'closing' && step.id !== 'fixed-closing');

    filtered.push({
      id: 'fixed-closing',
      fixedClosing: true,
      text: null,
      chart: { visible: false },
      map: { visible: false },
      image: { visible: false },
      scrollHeight: '100vh',
    });

    return filtered;
  }
}
