import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './dist',
    emptyOutDir: true,
    commonjsOptions: {},
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'canyon-ui',
      name: 'CanyonUi',
    },
    rollupOptions: {},
  },
});
