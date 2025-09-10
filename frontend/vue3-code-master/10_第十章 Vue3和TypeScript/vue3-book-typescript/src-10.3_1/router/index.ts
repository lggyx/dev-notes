import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

// 定义路由表
const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'About',
    path: '/about',
    component: About,
  },
];

// 创建路由器
const router = createRouter({
  history: createWebHashHistory(), // 指定为hash模式
  routes, // 配置路由表
});

export default router;
