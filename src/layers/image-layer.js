export class ImageLayer {
  constructor(container) {
    this.container = container;
    this.currentImage = null;
  }

  show(imageConfig) {
    if (!imageConfig?.src) return;

    this.clear();

    const img = document.createElement('img');
    const base = import.meta.env.BASE_URL;
    const src = imageConfig.src.startsWith('/') ? `${base}${imageConfig.src.slice(1)}` : imageConfig.src;
    img.src = src;
    img.alt = imageConfig.alt || '';
    img.style.cssText = `
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: ${imageConfig.opacity ?? 1};
    `;

    this.container.appendChild(img);
    this.currentImage = img;
  }

  hide() {
    this.clear();
  }

  clear() {
    if (this.currentImage) {
      this.currentImage.remove();
      this.currentImage = null;
    }
  }
}
