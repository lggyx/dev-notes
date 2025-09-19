import { createApp } from 'vue';
import App from './App.vue';
// 完整引入Element Plus框架
import ElementPlus from 'element-plus';
// 完整引入Element Plus的样式文件
import 'element-plus/dist/index.css';

// 安装Element Plus
createApp(App).use(ElementPlus).mount('#app');
