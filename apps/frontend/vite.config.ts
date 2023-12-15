import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { resolve } from 'path';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
    host: true,
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: [
      { find: '@api', replacement: resolve(__dirname, 'src/api') },
      { find: '@assets', replacement: resolve(__dirname, 'src/assets') },
      { find: '@style', replacement: resolve(__dirname, 'src/style') },
    ],
  },
});
