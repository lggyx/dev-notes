import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 设置别名与省略后缀
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
    extensions: ['.js', '.vue', '.ts'],
  },
})
