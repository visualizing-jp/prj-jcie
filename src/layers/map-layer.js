import * as d3 from 'd3';
import { feature } from 'topojson-client';

const VIEWBOX_WIDTH = 1440;
const VIEWBOX_HEIGHT = 900;
const BASE_SCALE = 230;
const WORLD_MAP_URL = '/data/countries-110m.json';

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
  }

  render(mapConfig) {
    if (!mapConfig?.visible) return;

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

    this.readyPromise = d3.json(WORLD_MAP_URL).then((topology) => {
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

  createSvg() {
    if (!this.container || this.svg) return;

    this.container.innerHTML = '';
    this.svg = d3
      .select(this.container)
      .append('svg')
      .attr('viewBox', `0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`)
      .attr('preserveAspectRatio', 'xMidYMid meet')
      .attr('aria-label', 'world map');

    this.svg
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', VIEWBOX_WIDTH)
      .attr('height', VIEWBOX_HEIGHT)
      .attr('fill', '#06111e')
      .attr('fill-opacity', 0.7);
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
    const highlightCountries = new Set(mapConfig.highlightCountries || []);
    const lightenNonVisited = Boolean(mapConfig.lightenNonVisited || mapConfig.lightenAllCountries);
    const themePrimary = getComputedStyle(document.documentElement)
      .getPropertyValue('--theme-primary')
      .trim() || '#ff6b6b';

    const projection = d3
      .geoMercator()
      .center(center)
      .scale(BASE_SCALE * zoom)
      .translate([VIEWBOX_WIDTH / 2, VIEWBOX_HEIGHT / 2]);
    const path = d3.geoPath(projection);

    this.countryPaths
      .transition()
      .duration(650)
      .ease(d3.easeCubicOut)
      .attr('d', path)
      .attr('fill', (d) => {
        const name = d.properties?.name;
        return highlightCountries.has(name) ? themePrimary : '#3f4f63';
      })
      .attr('fill-opacity', (d) => {
        const name = d.properties?.name;
        if (highlightCountries.size === 0) {
          return mapConfig.lightenAllCountries ? 0.35 : 0.68;
        }
        if (highlightCountries.has(name)) {
          return 0.96;
        }
        return lightenNonVisited ? 0.22 : 0.5;
      })
      .attr('stroke', (d) => (highlightCountries.has(d.properties?.name) ? '#ffffff' : '#a5b4c7'))
      .attr('stroke-opacity', (d) => (highlightCountries.has(d.properties?.name) ? 0.9 : 0.35))
      .attr('stroke-width', (d) => (highlightCountries.has(d.properties?.name) ? 1.2 : 0.6));

    this.updateMarkers(mapConfig.markers || [], projection, themePrimary);
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

  updateMarkers(markers, projection, fallbackColor) {
    if (!this.markerCircles || !this.markerLabels) return;

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
          color: marker.color || fallbackColor,
          size: Number(marker.size) || 7,
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
      .attr('r', (d) => (d.isCurrent ? d.size + 3 : d.size))
      .attr('fill', (d) => d.color)
      .attr('fill-opacity', (d) => (d.isCurrent ? 0.95 : 0.72))
      .attr('stroke', '#ffffff')
      .attr('stroke-width', (d) => (d.isCurrent ? 2 : 1))
      .attr('stroke-opacity', 0.95);

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
      .attr('x', (d) => d.x + 10)
      .attr('y', (d) => d.y - 12)
      .attr('fill', '#ffffff')
      .attr('font-size', 14)
      .attr('font-weight', 600)
      .attr('paint-order', 'stroke')
      .attr('stroke', 'rgba(6,17,30,0.9)')
      .attr('stroke-width', 3)
      .attr('stroke-linejoin', 'round')
      .attr('opacity', 0)
      .text((d) => d.name)
      .merge(labels)
      .transition()
      .duration(650)
      .ease(d3.easeCubicOut)
      .attr('x', (d) => d.x + 10)
      .attr('y', (d) => d.y - 12)
      .attr('opacity', 1)
      .text((d) => d.name);
  }

  clear() {
    if (this.container) {
      this.container.innerHTML = '';
    }
    this.svg = null;
    this.countryPaths = null;
    this.markerCircles = null;
    this.markerLabels = null;
    this.countryFeatures = [];
    this.readyPromise = null;
    this.pendingConfig = null;
  }
}
