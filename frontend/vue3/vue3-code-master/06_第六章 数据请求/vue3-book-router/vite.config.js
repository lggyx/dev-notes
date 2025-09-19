import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { manualChunksPlugin } from 'vite-plugin-webpackchunkname'

const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), manualChunksPlugin()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
    extensions: ['.js', '.ts', '.vue'],
  },
})
