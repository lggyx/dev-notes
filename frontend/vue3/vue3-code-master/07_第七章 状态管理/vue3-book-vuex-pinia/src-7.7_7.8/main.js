import { createApp } from 'vue';
import App from './App.vue';
// 引入createPinia函数
import { createPinia } from 'pinia';

// 创建pinia插件对象
const pinia = createPinia();

// 安装pinia
createApp(App).use(pinia).mount('#app');
