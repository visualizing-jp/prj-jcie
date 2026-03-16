export class ImageLayer {
  constructor(container) {
    this.container = container;
    this.currentImage = null;
    this.parallaxEnabled = false;
    this.handleScroll = this.updateParallax.bind(this);
  }

  show(imageConfig) {
    if (!imageConfig?.src) return;

    this.clear();

    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
    `;

    const img = document.createElement('img');
    const base = import.meta.env.BASE_URL;
    const src = imageConfig.src.startsWith('/') ? `${base}${imageConfig.src.slice(1)}` : imageConfig.src;
    img.src = src;
    img.alt = imageConfig.alt || '';
    const fit = imageConfig.fit || 'cover';
    // fit: "cover" (default) — 領域全体を埋める（トリミングあり）
    // fit: "width" — 横幅に合わせる（上下に余白の可能性あり）
    // fit: "height" — 縦幅に合わせる（左右に余白の可能性あり）
    // fit: "contain" — 全体が見える（余白あり）
    const fitStyles = {
      cover:   'width: 100%; height: 120%; object-fit: cover;',
      width:   'width: 100%; height: auto; object-fit: contain;',
      height:  'width: auto; height: 120%; object-fit: contain;',
      contain: 'width: 100%; height: 100%; object-fit: contain;',
    };
    const objectPosition = imageConfig.objectPosition || 'center center';

    img.style.cssText = `
      ${fitStyles[fit] || fitStyles.cover}
      object-position: ${objectPosition};
      opacity: ${imageConfig.opacity ?? 1};
      transform: translateY(-10%);
      will-change: transform;
      transition: transform 0.05s linear;
    `;

    // テーマカラーオーバーレイグラデーション
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.7) 0%,
        transparent 40%,
        transparent 60%,
        rgba(0, 0, 0, 0.4) 100%
      );
      pointer-events: none;
      z-index: 1;
    `;

    wrapper.appendChild(img);
    wrapper.appendChild(overlay);
    this.container.appendChild(wrapper);
    this.currentImage = wrapper;
    this.parallaxImg = img;

    // パララックス開始
    this.parallaxEnabled = true;
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  updateParallax() {
    if (!this.parallaxEnabled || !this.parallaxImg) return;
    const scrollY = window.scrollY || window.pageYOffset;
    const vh = window.innerHeight;
    // スクロール位置に応じて画像を微妙にずらす（-10%〜0%の範囲）
    const offset = -10 + (scrollY / vh) * 3;
    const clamped = Math.max(-10, Math.min(0, offset));
    this.parallaxImg.style.transform = `translateY(${clamped}%)`;
  }

  hide() {
    this.clear();
  }

  clear() {
    this.parallaxEnabled = false;
    window.removeEventListener('scroll', this.handleScroll);
    if (this.currentImage) {
      this.currentImage.remove();
      this.currentImage = null;
      this.parallaxImg = null;
    }
  }
}
