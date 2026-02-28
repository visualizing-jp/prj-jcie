import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  base: '/prj-jcie/',
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../docs',
    emptyOutDir: true,
  },
  server: {
    open: true,
  },
  appType: 'spa',
});
