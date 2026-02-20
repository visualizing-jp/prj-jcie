import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class ScrollController {
  constructor({ onStepEnter, onStepLeave, onProgress }) {
    this.onStepEnter = onStepEnter;
    this.onStepLeave = onStepLeave;
    this.onProgress = onProgress;
    this.lenis = null;
    this.triggers = [];
  }

  init() {
    this.initLenis();
    this.initStepTriggers();
  }

  initLenis() {
    this.lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    // LenisをGSAP tickerに接続
    this.lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => this.lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  initStepTriggers() {
    const steps = document.querySelectorAll('.step');

    steps.forEach((step, index) => {
      const trigger = ScrollTrigger.create({
        trigger: step,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => this.onStepEnter(index, 'down'),
        onEnterBack: () => this.onStepEnter(index, 'up'),
        onLeave: () => this.onStepLeave(index, 'down'),
        onLeaveBack: () => this.onStepLeave(index, 'up'),
      });

      this.triggers.push(trigger);
    });

    // 全体進捗のscrub
    ScrollTrigger.create({
      trigger: '#scroll-content',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => this.onProgress(self.progress),
    });
  }

  destroy() {
    this.triggers.forEach((t) => t.kill());
    this.triggers = [];
    this.lenis?.destroy();
    ScrollTrigger.getAll().forEach((t) => t.kill());
  }
}
