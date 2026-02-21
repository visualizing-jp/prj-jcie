export class ContentRenderer {
  constructor(config) {
    this.config = config;
    this.container = document.getElementById('scroll-content');
    this.stepElements = [];
  }

  render() {
    this.config.steps.forEach((step, index) => {
      const el = this.createStepElement(step, index);
      this.container.appendChild(el);
      this.stepElements.push(el);
    });
  }

  createStepElement(step, index) {
    const section = document.createElement('section');
    section.className = 'step';
    section.dataset.step = index;
    section.id = step.id;
    if (step.scrollHeight) {
      section.style.minHeight = step.scrollHeight;
    }

    if (step.fixedClosing) {
      section.classList.add('fixed-closing-step');
      section.appendChild(this.createFixedClosingElement());
      return section;
    }

    if (step.text?.content) {
      const card = document.createElement('div');
      card.className = 'text-card';
      card.innerHTML = step.text.content;
      this.applyPosition(card, step.text.position);
      section.appendChild(card);
    }

    return section;
  }

  applyPosition(card, position) {
    if (!position) return;

    const parent = card.parentElement || card.closest('.step');

    if (position.width) {
      card.style.maxWidth = position.width;
    }

    // horizontal / vertical はstepのflexboxで制御
    const hMap = { left: 'flex-start', center: 'center', right: 'flex-end' };
    const vMap = { top: 'flex-start', center: 'center', bottom: 'flex-end' };

    // 親step要素にスタイルを適用するため、dataset経由で情報を渡す
    card.dataset.hAlign = position.horizontal || 'center';
    card.dataset.vAlign = position.vertical || 'center';
  }

  activateStep(index) {
    const el = this.stepElements[index];
    if (!el) return;

    const card = el.querySelector('.text-card');
    if (card) {
      card.classList.add('visible');

      // 位置をstepのflexboxに反映
      const h = card.dataset.hAlign || 'center';
      const v = card.dataset.vAlign || 'center';
      const hMap = { left: 'flex-start', center: 'center', right: 'flex-end' };
      const vMap = { top: 'flex-start', center: 'center', bottom: 'flex-end' };
      el.style.justifyContent = hMap[h] || 'center';
      el.style.alignItems = vMap[v] || 'center';
    }
  }

  deactivateStep(index) {
    const el = this.stepElements[index];
    if (!el) return;

    const card = el.querySelector('.text-card');
    if (card) {
      card.classList.remove('visible');
    }
  }

  createFixedClosingElement() {
    const wrapper = document.createElement('div');
    wrapper.className = 'fixed-closing-inner';
    wrapper.innerHTML = `
      <div class="fixed-closing-main">
        <div class="fixed-closing-logo">
          <img
            class="fixed-closing-logo-image"
            src="/images/fgfj-logo-horizontal-white.svg"
            alt="FGFJ Friends of the Global Fund, Japan"
          />
        </div>
        <div class="fixed-closing-contact">
          <p>〒107-0052 東京都港区赤坂1-1-12 明産溜池ビル7F (公財)日本国際交流センター 内</p>
          <p>Email: fgfj&lt;at&gt;jcie.or.jp (&lt;at&gt;を@に変更してお送りください)</p>
          <p>TEL: 03-6277-7811(代) FAX: 03-6277-6712</p>
        </div>
      </div>
      <hr class="fixed-closing-divider" />
      <p class="fixed-closing-copy">© Japan Center for International Exchange. All rights reserved.</p>
    `;
    return wrapper;
  }
}
