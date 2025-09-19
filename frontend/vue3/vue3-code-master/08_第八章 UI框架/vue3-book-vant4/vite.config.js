import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// 引入vant按需打包的插件
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
});
