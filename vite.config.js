import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/explorer-Djoinjoy/',
  build: {
    outDir: 'docs',
  },
});
