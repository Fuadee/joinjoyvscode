import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/joinjoyvscode/',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
});
