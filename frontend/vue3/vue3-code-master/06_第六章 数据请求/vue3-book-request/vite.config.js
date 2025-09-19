import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      // 代理地址接口的前缀路径
      '/apiPrefix': {
        target: 'http://39.98.123.211:8510/api', // 转发的目标接口
        changeOrigin: true, // 确认修改来源实现跨域
        rewrite: path => path.replace(/^\/apiPrefix/, ''), // 去掉代理前缀路径
      },

      // 代理地址接口的前缀路径
      '/jsonPrefix': {
        target: 'http://localhost:5000', // 转发的目标接口
        changeOrigin: true, // 确认修改来源实现跨域
        rewrite: path => path.replace(/^\/jsonPrefix/, ''), // 去掉代理前缀路径
      },
    },
  },
  // 设置别名与后缀
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
    extensions: ['.js', '.ts', '.vue'],
  },
})
