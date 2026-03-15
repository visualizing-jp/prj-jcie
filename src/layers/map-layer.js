import * as d3 from 'd3';
import { feature } from 'topojson-client';

const VIEWBOX_WIDTH = 1440;
const VIEWBOX_HEIGHT = 900;
const BASE_SCALE = 230;

const REGION_COUNTRIES = {
  europe: [
    'Albania', 'Austria', 'Belarus', 'Belgium', 'Bosnia and Herz.', 'Bulgaria',
    'Croatia', 'Cyprus', 'Czechia', 'Denmark', 'Estonia', 'Finland', 'France',
    'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Kosovo',
    'Latvia', 'Lithuania', 'Luxembourg', 'Macedonia', 'Moldova', 'Montenegro',
    'Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania', 'Russia',
    'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland',
    'Ukraine', 'United Kingdom', 'N. Cyprus',
  ],
  asia: [
    'Afghanistan', 'Armenia', 'Azerbaijan', 'Bangladesh', 'Bhutan', 'Brunei',
    'Cambodia', 'China', 'Georgia', 'India', 'Indonesia', 'Iran', 'Iraq',
    'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Kuwait', 'Kyrgyzstan', 'Laos',
    'Lebanon', 'Malaysia', 'Mongolia', 'Myanmar', 'Nepal', 'North Korea',
    'Oman', 'Pakistan', 'Palestine', 'Philippines', 'Qatar', 'Saudi Arabia',
    'South Korea', 'Sri Lanka', 'Syria', 'Taiwan', 'Tajikistan', 'Thailand',
    'Timor-Leste', 'Turkey', 'Turkmenistan', 'United Arab Emirates',
    'Uzbekistan', 'Vietnam', 'Yemen',
  ],
  africa: [
    'Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi',
    'Cameroon', 'Central African Rep.', 'Chad', 'Congo', 'Côte d\'Ivoire',
    'Dem. Rep. Congo', 'Djibouti', 'Egypt', 'Eq. Guinea', 'Eritrea',
    'Ethiopia', 'Gabon', 'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau',
    'Kenya', 'Lesotho', 'Liberia', 'Libya', 'Madagascar', 'Malawi', 'Mali',
    'Mauritania', 'Morocco', 'Mozambique', 'Namibia', 'Niger', 'Nigeria',
    'Rwanda', 'S. Sudan', 'Senegal', 'Sierra Leone', 'Somalia', 'Somaliland',
    'South Africa', 'Sudan', 'Tanzania', 'Togo', 'Tunisia', 'Uganda',
    'W. Sahara', 'Zambia', 'Zimbabwe', 'eSwatini',
  ],
};

function resolveHighlightCountries(mapConfig) {
  const set = new Set(mapConfig.highlightCountries || []);
  if (mapConfig.highlightRegions) {
    for (const region of mapConfig.highlightRegions) {
      const countries = REGION_COUNTRIES[region.toLowerCase()];
      if (countries) {
        for (const c of countries) set.add(c);
      }
    }
  }
  return set;
}
const WORLD_MAP_URL = `${import.meta.env.BASE_URL}data/countries-110m.json`;
const MAP_STYLE_URL = `${import.meta.env.BASE_URL}config/map-style.json`;

export class MapLayer {
  constructor(container) {
    this.container = container;
    this.svg = null;
    this.countryPaths = null;
    this.markerCircles = null;
    this.markerLabels = null;
    this.countryFeatures = [];
    this.readyPromise = null;
    this.pendingConfig = null;
    this.glMap = null;
    this.tileContainer = null;
    this.currentCenter = [0, 15];
    this.currentZoom = 1.2;
    this.style = null;
  }

  render(mapConfig) {
    if (!mapConfig?.visible) return;

    // タイルコンテナを再表示
    if (this.tileContainer) {
      this.tileContainer.style.display = '';
      // display:none から復帰時にMapLibreキャンバスをリサイズ
      if (this.glMap) {
        try { this.glMap.resize(); } catch (_e) { /* ignore */ }
      }
    }

    this.pendingConfig = mapConfig;
    this.ensureReady()
      .then(() => {
        if (this.pendingConfig) {
          this.applyConfig(this.pendingConfig);
        }
      })
      .catch((error) => {
        console.error('MapLayer render failed:', error);
      });
  }

  ensureReady() {
    if (this.readyPromise) {
      return this.readyPromise;
    }

    // TopoJSON・スタイル設定読み込みを並行実行し、その後タイル背景初期化
    const jsonPromise = d3.json(WORLD_MAP_URL);
    const stylePromise = d3.json(MAP_STYLE_URL);

    this.readyPromise = Promise.all([jsonPromise, stylePromise]).then(async ([topology, style]) => {
      this.style = style;
      await this.initTileBackground().catch(() => null);
      const countryObject = topology?.objects?.countries;
      if (!countryObject) {
        throw new Error('countries object not found in TopoJSON');
      }

      this.countryFeatures = feature(topology, countryObject).features;
      this.createSvg();
      this.drawBaseMap();
    });

    return this.readyPromise;
  }

  async initTileBackground() {
    if (this.glMap || !this.container) return;

    try {
      const [maplibregl, { Protocol }] = await Promise.all([
        import('maplibre-gl'),
        import('pmtiles'),
      ]);

      const maplibre = maplibregl.default || maplibregl;

      const protocol = new Protocol();
      maplibre.addProtocol('pmtiles', protocol.tile);

      // MapLibreキャンバス用コンテナ
      this.tileContainer = document.createElement('div');
      this.tileContainer.className = 'map-tile-container';
      this.container.appendChild(this.tileContainer);

      const t = this.style?.tile || {};
      const hs = t.hillshade || {};
      this.glMap = new maplibre.Map({
        container: this.tileContainer,
        style: {
          version: 8,
          sources: {
            terrain: {
              type: 'raster-dem',
              url: 'https://tiles.mapterhorn.com/tilejson.json',
              tileSize: 512,
              encoding: 'terrarium',
            },
          },
          layers: [
            {
              id: 'background',
              type: 'background',
              paint: { 'background-color': t.backgroundColor || '#b8cee0' },
            },
            {
              id: 'hillshade',
              type: 'hillshade',
              source: 'terrain',
              paint: {
                'hillshade-shadow-color': hs.shadowColor || '#8a8a8a',
                'hillshade-highlight-color': hs.highlightColor || '#ffffff',
                'hillshade-accent-color': hs.accentColor || '#d0d0d0',
                'hillshade-exaggeration': hs.exaggeration ?? 0.35,
                'hillshade-illumination-direction': hs.illuminationDirection ?? 315,
              },
            },
          ],
        },
        center: [0, 15],
        zoom: 1.5,
        interactive: false,
        attributionControl: false,
        fadeDuration: 0,
        preserveDrawingBuffer: false,
      });

      await new Promise((resolve) => {
        this.glMap.on('load', resolve);
      });
    } catch (error) {
      console.warn('MapLibre tile background init failed (falling back to flat map):', error);
      this.glMap = null;
    }
  }

  createSvg() {
    if (!this.container || this.svg) return;

    // SVGはtileContainerの後に追加（重なり順）
    this.svg = d3
      .select(this.container)
      .append('svg')
      .attr('class', 'map-svg-overlay')
      .attr('viewBox', `0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`)
      .attr('preserveAspectRatio', 'xMidYMid meet')
      .attr('aria-label', 'world map');

    // hillshadeがある場合は背景を半透明に
    const bg = this.style?.background || {};
    const bgHs = bg.hillshade || {};
    const bgFlat = bg.flat || {};
    this.svg
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', VIEWBOX_WIDTH)
      .attr('height', VIEWBOX_HEIGHT)
      .attr('fill', this.glMap ? (bgHs.fill || '#8ab4d0') : (bgFlat.fill || '#06111e'))
      .attr('fill-opacity', this.glMap ? (bgHs.fillOpacity ?? 0.35) : (bgFlat.fillOpacity ?? 0.7));
  }

  drawBaseMap() {
    if (!this.svg) return;

    this.countryPaths = this.svg
      .append('g')
      .attr('class', 'countries')
      .selectAll('path')
      .data(this.countryFeatures, (d) => d.properties?.name)
      .join('path')
      .attr('vector-effect', 'non-scaling-stroke')
      .attr('stroke-linejoin', 'round');

    this.markerCircles = this.svg.append('g').attr('class', 'map-markers');
    this.markerLabels = this.svg.append('g').attr('class', 'map-marker-labels');
  }

  applyConfig(mapConfig) {
    if (!this.countryPaths) return;

    const center = this.resolveCenter(mapConfig.center);
    const zoom = Number.isFinite(mapConfig.zoom) ? mapConfig.zoom : 1.2;
    const highlightCountries = resolveHighlightCountries(mapConfig);
    const lightenNonVisited = Boolean(mapConfig.lightenNonVisited || mapConfig.lightenAllCountries);
    const projection = d3
      .geoMercator()
      .center(center)
      .scale(BASE_SCALE * zoom)
      .translate([VIEWBOX_WIDTH / 2, VIEWBOX_HEIGHT / 2]);
    const path = d3.geoPath(projection);

    // hillshadeがある場合はfill-opacityを下げて地形を透過させる
    const hasHillshade = Boolean(this.glMap);
    const cs = this.style?.country || {};
    const csMode = hasHillshade ? (cs.hillshade || {}) : (cs.flat || {});
    const csOp = csMode.opacity || {};
    const csHl = cs.highlight || {};

    const fillFn = (d) => {
      const name = d.properties?.name;
      if (highlightCountries.has(name)) return csHl.fill || '#000000';
      return csMode.fill || (hasHillshade ? '#f8f8f8' : '#3f4f63');
    };
    const fillOpacityFn = (d) => {
      const name = d.properties?.name;
      if (highlightCountries.has(name)) return csOp.highlight ?? 0.45;
      if (highlightCountries.size === 0) {
        return mapConfig.lightenAllCountries ? (csOp.lightenAll ?? 0.45) : (csOp.normal ?? 0.6);
      }
      return lightenNonVisited ? (csOp.lightenNonVisited ?? 0.35) : (csOp.nonHighlight ?? 0.55);
    };
    const strokeFn = (d) => (highlightCountries.has(d.properties?.name) ? (csHl.stroke || '#000000') : (csMode.stroke || '#9a9a9a'));
    const strokeOpacityFn = (d) => (highlightCountries.has(d.properties?.name) ? (csHl.strokeOpacity ?? 0.5) : (csMode.strokeOpacity ?? 0.35));
    const strokeWidthFn = (d) => (highlightCountries.has(d.properties?.name) ? (csHl.strokeWidth ?? 1.0) : (cs.defaultStrokeWidth ?? 0.4));

    // 初回表示（pathにd属性がない）かどうかで分岐
    const isFirstRender = !this.countryPaths.node()?.getAttribute('d');

    if (isFirstRender) {
      // 初回: トランジションなしで即座に配置（SVGとhillshadeのズレを防止）
      this.countryPaths
        .attr('d', path)
        .attr('fill', fillFn)
        .attr('fill-opacity', fillOpacityFn)
        .attr('stroke', strokeFn)
        .attr('stroke-opacity', strokeOpacityFn)
        .attr('stroke-width', strokeWidthFn);

      // MapLibreカメラも即座にジャンプ
      if (this.glMap) {
        if (this._cameraTimer) this._cameraTimer.stop();
        this._cameraTimer = null;
        try { this.jumpTileCamera(center, zoom); } catch (_e) { /* ignore */ }
      }
    } else {
      // 2回目以降: トランジション付きでスムーズに移動
      this.countryPaths
        .transition()
        .duration(650)
        .ease(d3.easeCubicOut)
        .attr('d', path)
        .attr('fill', fillFn)
        .attr('fill-opacity', fillOpacityFn)
        .attr('stroke', strokeFn)
        .attr('stroke-opacity', strokeOpacityFn)
        .attr('stroke-width', strokeWidthFn);

      // MapLibre カメラをD3トランジションとは独立して同期（d3.timerで分離）
      if (this.glMap) {
        const prevCenter = [...this.currentCenter];
        const prevZoom = this.currentZoom;
        const interpLng = d3.interpolate(prevCenter[0], center[0]);
        const interpLat = d3.interpolate(prevCenter[1], center[1]);
        const interpZoom = d3.interpolate(prevZoom, zoom);
        const ease = d3.easeCubicOut;
        const duration = 650;
        const startTime = performance.now();

        if (this._cameraTimer) this._cameraTimer.stop();

        this._cameraTimer = d3.timer(() => {
          const t = Math.min(1, (performance.now() - startTime) / duration);
          const et = ease(t);
          try {
            this.jumpTileCamera([interpLng(et), interpLat(et)], interpZoom(et));
          } catch (_e) { /* ignore */ }
          if (t >= 1) {
            this._cameraTimer.stop();
            this._cameraTimer = null;
          }
        });
      }
    }

    this.updateMarkers(mapConfig.markers || [], projection);

    this.currentCenter = center;
    this.currentZoom = zoom;
  }

  jumpTileCamera(center, d3Zoom) {
    if (!this.glMap || !this.container) return;

    const d3Scale = BASE_SCALE * d3Zoom;
    const containerWidth = this.container.clientWidth;
    const containerHeight = this.container.clientHeight;
    const viewBoxScale = Math.min(containerWidth / VIEWBOX_WIDTH, containerHeight / VIEWBOX_HEIGHT);
    const effectiveScale = d3Scale * viewBoxScale;
    const maplibreZoom = Math.log2(effectiveScale * 2 * Math.PI / 512);

    this.glMap.jumpTo({
      center: [center[0], center[1]],
      zoom: Math.max(0, maplibreZoom),
    });
  }

  resolveCenter(center) {
    if (!Array.isArray(center) || center.length !== 2) {
      return [0, 15];
    }
    const [lng, lat] = center;
    if (!Number.isFinite(lng) || !Number.isFinite(lat)) {
      return [0, 15];
    }
    return [lng, lat];
  }

  updateMarkers(markers, projection) {
    if (!this.markerCircles || !this.markerLabels) return;

    const ms = this.style?.marker || {};
    const msOp = ms.fillOpacity || {};
    const msSw = ms.strokeWidth || {};
    const ls = this.style?.label || {};
    const defaultSize = ms.defaultSize ?? 7;
    const sizeBonus = ms.sizeBonus ?? 3;
    const labelOffsetX = ls.offsetX ?? 10;
    const labelOffsetY = ls.offsetY ?? -12;

    const normalized = markers
      .map((marker) => {
        const longitude = Number(marker.longitude);
        const latitude = Number(marker.latitude);
        if (!Number.isFinite(longitude) || !Number.isFinite(latitude)) {
          return null;
        }
        const projected = projection([longitude, latitude]);
        if (!projected) return null;
        return {
          id: marker.id || `${marker.name || marker.country}-${longitude}-${latitude}`,
          x: projected[0],
          y: projected[1],
          name: marker.name || '',
          country: marker.country || '',
          isCurrent: Boolean(marker.isCurrent),
          color: this.getThemePrimary(),
          size: Number(marker.size) || defaultSize,
        };
      })
      .filter(Boolean);

    const circles = this.markerCircles
      .selectAll('circle')
      .data(normalized, (d) => d.id);

    circles
      .exit()
      .transition()
      .duration(200)
      .attr('r', 0)
      .remove();

    circles
      .enter()
      .append('circle')
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('r', 0)
      .attr('fill-opacity', 0.1)
      .merge(circles)
      .transition()
      .duration(650)
      .ease(d3.easeCubicOut)
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('r', (d) => (d.isCurrent ? d.size + sizeBonus : d.size))
      .attr('fill', (d) => d.color)
      .attr('fill-opacity', (d) => (d.isCurrent ? (msOp.current ?? 0.95) : (msOp.default ?? 0.72)))
      .attr('stroke', ms.stroke || '#f5f0ec')
      .attr('stroke-width', (d) => (d.isCurrent ? (msSw.current ?? 2) : (msSw.default ?? 1)))
      .attr('stroke-opacity', ms.strokeOpacity ?? 0.95);

    const currentCities = normalized.filter((d) => d.isCurrent);
    const labels = this.markerLabels
      .selectAll('text')
      .data(currentCities, (d) => d.id);

    labels
      .exit()
      .transition()
      .duration(150)
      .attr('opacity', 0)
      .remove();

    labels
      .enter()
      .append('text')
      .attr('x', (d) => d.x + labelOffsetX)
      .attr('y', (d) => d.y + labelOffsetY)
      .attr('fill', ls.fill || '#f5f0ec')
      .attr('font-size', ls.fontSize ?? 14)
      .attr('font-weight', ls.fontWeight ?? 600)
      .attr('paint-order', 'stroke')
      .attr('stroke', ls.stroke || 'rgba(10,14,22,0.9)')
      .attr('stroke-width', ls.strokeWidth ?? 3)
      .attr('stroke-linejoin', 'round')
      .attr('opacity', 0)
      .text((d) => d.name)
      .merge(labels)
      .transition()
      .duration(650)
      .ease(d3.easeCubicOut)
      .attr('x', (d) => d.x + labelOffsetX)
      .attr('y', (d) => d.y + labelOffsetY)
      .attr('opacity', 1)
      .text((d) => d.name);
  }

  clear() {
    if (this._cameraTimer) {
      this._cameraTimer.stop();
      this._cameraTimer = null;
    }
    // MapLibreインスタンスは破棄せず保持（再利用のため）、非表示にする
    if (this.tileContainer) {
      this.tileContainer.style.display = 'none';
    }
    if (this.container) {
      const svg = this.container.querySelector('.map-svg-overlay');
      if (svg) svg.remove();
    }
    this.svg = null;
    this.countryPaths = null;
    this.markerCircles = null;
    this.markerLabels = null;
    this.countryFeatures = [];
    this.readyPromise = null;
    this.pendingConfig = null;
  }

  getThemePrimary() {
    return getComputedStyle(document.documentElement).getPropertyValue('--theme-primary').trim() || '#66c2a5';
  }

  destroy() {
    this.clear();
    if (this.glMap) {
      this.glMap.remove();
      this.glMap = null;
    }
    if (this.tileContainer) {
      this.tileContainer.remove();
      this.tileContainer = null;
    }
  }
}
