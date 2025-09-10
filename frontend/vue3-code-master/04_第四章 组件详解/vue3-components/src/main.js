import { createApp } from 'vue';
import App from './App.vue';
import myPlugins from './myPlugins' // 引入插件

const app = createApp(App);
// 安装插件
app.use(myPlugins, {
  small: 12,
  medium: 24,
  large: 36,
});
app.mount('#app');