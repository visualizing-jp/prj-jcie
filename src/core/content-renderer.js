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

    // ヒーロー画面判定
    const isHero = step.id && step.id.endsWith('-hero');
    if (isHero) {
      section.classList.add('hero-step');
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

      // データソース表示（チャートconfig内 + ステップレベル）
      const chartSources = step.chart?.charts
        ?.map((c) => c.config?.source)
        .filter(Boolean) || [];
      const stepSources = step.source
        ? (Array.isArray(step.source) ? step.source : [step.source])
        : [];
      const sources = [...chartSources, ...stepSources];
      if (sources.length > 0) {
        const sourceDiv = document.createElement('div');
        sourceDiv.className = 'chart-source';
        sources.forEach((src) => {
          const label = document.createElement('span');
          label.textContent = '出典: ';
          sourceDiv.appendChild(label);
          if (src.url) {
            const a = document.createElement('a');
            a.href = src.url;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.textContent = src.name || src.url;
            sourceDiv.appendChild(a);
          } else {
            label.textContent += src.name || '';
          }
        });
        card.appendChild(sourceDiv);
      }

      // Split Text: h2要素を行単位で分割
      this.applySplitText(card);

      this.applyPosition(card, step.text.position);
      section.appendChild(card);
    }

    return section;
  }

  /**
   * h2テキストを行（文字列）単位で分割し、clip-pathスライドイン用にラップ
   */
  applySplitText(card) {
    const headings = card.querySelectorAll('h2');
    headings.forEach((h2) => {
      const text = h2.textContent;
      if (!text.trim()) return;

      // インラインスタイルを保持
      const style = h2.getAttribute('style') || '';

      // テキストを句読点・改行で自然に分割、短い場合はそのまま1行
      const segments = text.length > 20
        ? this.splitIntoLines(text)
        : [text];

      h2.innerHTML = '';
      if (style) h2.setAttribute('style', style);

      segments.forEach((seg, i) => {
        const line = document.createElement('span');
        line.className = 'split-line';

        const inner = document.createElement('span');
        inner.className = 'split-line-inner';
        inner.textContent = seg;
        // staggerディレイ
        inner.style.transitionDelay = `${i * 0.08}s`;

        line.appendChild(inner);
        h2.appendChild(line);
      });
    });
  }

  /**
   * テキストを自然な区切り（句読点、助詞）で分割
   */
  splitIntoLines(text) {
    // まず句読点で分割を試みる
    const parts = text.split(/(?<=[。、！？〜～ ―])/);
    if (parts.length >= 2) {
      return parts.filter((p) => p.trim().length > 0);
    }
    // 区切りがない場合は半分に分ける
    const mid = Math.ceil(text.length / 2);
    return [text.slice(0, mid), text.slice(mid)];
  }

  applyPosition(card, position) {
    if (!position) return;

    if (position.width) {
      card.style.maxWidth = position.width;
    }

    // horizontal / vertical はstepのflexboxで制御
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
            src="${import.meta.env.BASE_URL}images/fgfj-logo-horizontal-white.svg"
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
