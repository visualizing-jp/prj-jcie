import * as THREE from 'three';

export class WebGLLayer {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.particles = null;
    this.uniforms = {};
    this.animationId = null;
    this.progress = 0;
    this.themeColor = new THREE.Color('#ff6b6b');
  }

  init() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;

    this.createParticles();
    this.animate();

    window.addEventListener('resize', () => this.onResize());
  }

  createParticles() {
    const count = 2000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      randoms[i] = Math.random();
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1));

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uProgress: { value: 0 },
        uColor: { value: this.themeColor },
        uSize: { value: 3.0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      },
      vertexShader: `
        attribute float aRandom;
        uniform float uTime;
        uniform float uProgress;
        uniform float uSize;
        uniform float uPixelRatio;
        varying float vAlpha;

        void main() {
          vec3 pos = position;
          pos.x += sin(uTime * 0.3 + aRandom * 6.28) * 0.5;
          pos.y += cos(uTime * 0.2 + aRandom * 6.28) * 0.5;
          pos.z += sin(uTime * 0.1 + aRandom * 3.14) * 0.3;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = uSize * uPixelRatio * (1.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;

          vAlpha = 0.3 + aRandom * 0.5;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        varying float vAlpha;

        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = vAlpha * (1.0 - dist * 2.0);
          gl_FragColor = vec4(uColor, alpha * 0.6);
        }
      `,
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
    this.uniforms = material.uniforms;
  }

  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());
    this.uniforms.uTime.value += 0.01;
    this.uniforms.uProgress.value = this.progress;
    this.renderer.render(this.scene, this.camera);
  }

  setProgress(progress) {
    this.progress = progress;
  }

  setThemeColor(hex) {
    this.themeColor.set(hex);
    if (this.uniforms.uColor) {
      this.uniforms.uColor.value = this.themeColor;
    }
  }

  onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    if (this.uniforms.uPixelRatio) {
      this.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);
    }
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    this.particles?.geometry.dispose();
    this.particles?.material.dispose();
    this.renderer?.dispose();
  }
}
