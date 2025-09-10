import { createApp } from 'vue';
import App from './App.vue';
// 1.从vue-router中引入创建路由器与创建history模式的两个函数
import { createRouter, createWebHashHistory } from 'vue-router';
// 2.引入首页和用户页的路由组件
import Home from '@/views/Home';
import Users from '@/views/Users';
// 3.配置静态路由表
const routes = [
  { path: '/', component: Home },
  { path: '/users', component: Users },
];
// 4. 创建路由器对象
// 需要明确路由的操作模式history以及确认静态路由表内容routes
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
// 5.安装路由器
// use则是插件使用的操作模式，明确路由的本质其实就是vue的一个插件
createApp(App).use(router).mount('#app');
