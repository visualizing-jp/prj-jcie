// Phase 5で実装
export class ChartLayer {
  constructor(container) {
    this.container = container;
  }

  render(chartConfig) {
    // TODO: D3.jsチャート描画
  }

  clear() {
    if (this.container) {
      this.container.innerHTML = '';
    }
  }
}
