import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/personal-website/',
  plugins: [vue()],
  // resolve: {
  //   alias: {
  //     '@assets': path.resolve(__dirname, 'dist/assets')
  //   }
  // },
})
