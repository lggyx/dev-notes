import { createApp } from 'vue';
import App from './App.vue';
// 完整引入vant
import Vant from 'vant';
// 完整引入vant的样式文件
import 'vant/lib/index.css';

// 安装Vant
createApp(App).use(Vant).mount('#app');
