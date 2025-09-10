import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

// 定义路由表
const routes: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'About',
    path: '/about',
    component: About,
    meta: {
      hidden: true, // 也可以是false
    },
  },
];

// 创建路由器
const router = createRouter({
  history: createWebHashHistory(), // 指定为hash模式
  routes, // 配置路由表
});

export default router;
