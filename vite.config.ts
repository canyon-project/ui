import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import Pages from 'vite-plugin-pages';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins:[
          'istanbul',
          [
            'canyon',
            {
              commitSha:process.env.GITHUB_SHA,
              projectID:process.env.GITHUB_REPOSITORY_ID,
              branch:process.env.GITHUB_REF
            },
          ],
        ],
      },
    }),
    Pages({
      exclude: ['**/helper/**'],
    }),
    dts(),
  ],
  base: '/ui/',
  build:
    process.env.USE_DTS_PLUGIN === 'true'
      ? {
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
          sourcemap: true,
        }
      : {},
});
