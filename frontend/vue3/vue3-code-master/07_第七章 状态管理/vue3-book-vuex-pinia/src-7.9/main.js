import { createApp } from 'vue';
import App from './App.vue';
// 引入createPinia函数
import { createPinia } from 'pinia';
// 引入Pinia数据持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 创建pinia插件对象
const pinia = createPinia();
// 安装Pinia数据持久化插件
pinia.use(piniaPluginPersistedstate)

// 安装pinia
createApp(App).use(pinia).mount('#app');
