import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [tailwindcss()],
  base: '/prj-jcie/',
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        aids: resolve(__dirname, 'src/aids/index.html'),
        tuberculosis: resolve(__dirname, 'src/tuberculosis/index.html'),
        malariae: resolve(__dirname, 'src/malariae/index.html'),
      },
    },
  },
  server: {
    open: true,
  },
});
