import { resolve } from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts';
import Pages from 'vite-plugin-pages';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    Pages({
      exclude: ['**/helper/**'],
    }),
    dts(),],
  build: process.env.USE_DTS_PLUGIN === 'true'?{
    outDir: './dist',
    emptyOutDir: true,
    commonjsOptions: {},
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'canyon-ui',
      name: 'CanyonUi',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'antd'],
    },
  }:{},
})
