import * as d3 from 'd3';
import { feature } from 'topojson-client';

const WORLD_MAP_URL = `${import.meta.env.BASE_URL}data/countries-110m.json`;

const TARGET_COUNTRIES = [
  'Vietnam', 'El Salvador', 'Nigeria', 'Indonesia', 'Niger',
  'Malawi', 'Kenya', 'Zimbabwe', 'Cameroon', 'India',
  'Belize', 'South Africa', 'Myanmar', 'United States of America',
  'Philippines', 'Pakistan', 'Afghanistan',
];

const HIGHLIGHT_COLOR = 'rgb(118, 80, 127)';
const INTERVAL_MS = 4000;

export class GlobeAnimation {
  constructor(container) {
    this.container = container;
    this.svg = null;
    this.projection = null;
    this.path = null;
    this.countryPaths = null;
    this.countryFeatures = [];
    this.currentIndex = 0;
    this.timer = null;
    this.isPlaying = false;
    this.countryNameEl = null;
  }

  async init() {
    const topology = await d3.json(WORLD_MAP_URL);
    const countryObject = topology?.objects?.countries;
    if (!countryObject) throw new Error('countries object not found');

    this.countryFeatures = feature(topology, countryObject).features;
    this.createGlobe();
    this.start();
  }

  createGlobe() {
    const width = this.container.clientWidth || 800;
    const height = this.container.clientHeight || 800;
    const size = Math.min(width, height);
    const radius = size * 0.42;

    this.projection = d3.geoOrthographic()
      .scale(radius)
      .translate([width / 2, height / 2])
      .clipAngle(90)
      .rotate([0, -20, 0]);

    this.path = d3.geoPath(this.projection);

    this.svg = d3.select(this.container)
      .append('svg')
      .attr('class', 'globe-svg')
      .attr('width', width)
      .attr('height', height);

    // 海（球体背景）
    this.svg.append('circle')
      .attr('cx', width / 2)
      .attr('cy', height / 2)
      .attr('r', radius)
      .attr('fill', '#0a1628')
      .attr('stroke', '#1a3050')
      .attr('stroke-width', 1.5);

    // グラティキュール（緯度経度線）
    const graticule = d3.geoGraticule();
    this.svg.append('path')
      .datum(graticule())
      .attr('class', 'globe-graticule')
      .attr('d', this.path)
      .attr('fill', 'none')
      .attr('stroke', '#1a2a40')
      .attr('stroke-width', 0.4);

    // 国境パス
    this.countryPaths = this.svg.append('g')
      .attr('class', 'globe-countries')
      .selectAll('path')
      .data(this.countryFeatures, (d) => d.properties?.name)
      .join('path')
      .attr('d', this.path)
      .attr('fill', '#2a3a50')
      .attr('fill-opacity', 0.6)
      .attr('stroke', '#4a5a70')
      .attr('stroke-width', 0.5)
      .attr('stroke-opacity', 0.5);

    // 球体の光沢（上部にグラデーション）
    const defs = this.svg.append('defs');
    const gradient = defs.append('radialGradient')
      .attr('id', 'globe-sheen')
      .attr('cx', '40%')
      .attr('cy', '30%')
      .attr('r', '60%');
    gradient.append('stop').attr('offset', '0%').attr('stop-color', '#ffffff').attr('stop-opacity', 0.06);
    gradient.append('stop').attr('offset', '100%').attr('stop-color', '#000000').attr('stop-opacity', 0);

    this.svg.append('circle')
      .attr('cx', width / 2)
      .attr('cy', height / 2)
      .attr('r', radius)
      .attr('fill', 'url(#globe-sheen)')
      .attr('pointer-events', 'none');
  }

  start() {
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.animateLoop();
  }

  stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  animateLoop() {
    if (!this.isPlaying) return;

    const countryName = TARGET_COUNTRIES[this.currentIndex];
    this.focusCountry(countryName);

    this.currentIndex = (this.currentIndex + 1) % TARGET_COUNTRIES.length;
    this.timer = setTimeout(() => this.animateLoop(), INTERVAL_MS);
  }

  focusCountry(name) {
    const feat = this.countryFeatures.find((f) => {
      const n = f.properties?.name;
      return n === name || n === this.getAlternativeName(name);
    });
    if (!feat) return;

    const centroid = d3.geoCentroid(feat);
    const targetRotation = [-centroid[0], -centroid[1]];
    const currentRotation = this.projection.rotate();

    // 回転アニメーション
    const interp = d3.interpolate(
      [currentRotation[0], currentRotation[1]],
      targetRotation
    );

    const self = this;
    d3.transition()
      .duration(1200)
      .ease(d3.easeCubicInOut)
      .tween('rotate', () => (t) => {
        const r = interp(t);
        self.projection.rotate([r[0], r[1], 0]);
        self.redraw(name);
      });

    // 国名表示
    this.showCountryName(name);
  }

  redraw(highlightName) {
    if (!this.countryPaths) return;
    this.countryPaths
      .attr('d', this.path)
      .attr('fill', (d) => d.properties?.name === highlightName ? HIGHLIGHT_COLOR : '#2a3a50')
      .attr('fill-opacity', (d) => d.properties?.name === highlightName ? 0.85 : 0.5);

    // グラティキュール更新
    this.svg.select('.globe-graticule').attr('d', this.path);
  }

  showCountryName(name) {
    if (!this.countryNameEl) return;
    d3.select(this.countryNameEl)
      .transition().duration(300)
      .style('opacity', 0)
      .on('end', () => {
        if (!this.countryNameEl) return;
        this.countryNameEl.textContent = name;
        d3.select(this.countryNameEl)
          .transition().duration(500)
          .style('opacity', 1);
      });
  }

  setCountryNameElement(el) {
    this.countryNameEl = el;
  }

  getAlternativeName(name) {
    const map = {
      'United States of America': 'United States',
      'Russia': 'Russian Federation',
    };
    return map[name] || name;
  }

  destroy() {
    this.stop();
    if (this.svg) {
      this.svg.remove();
      this.svg = null;
    }
    this.countryPaths = null;
    this.countryFeatures = [];
    this.countryNameEl = null;
  }
}
