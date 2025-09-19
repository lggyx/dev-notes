import { createRouter, createWebHashHistory } from 'vue-router';

const Home = () => import(/* webpackChunkName: "group-home" */ '@/views/Home');
const Users = () =>
 import(/* webpackChunkName: "group-user" */ '@/views/user/Users');
const UserStart = () =>
 import(/* webpackChunkName: "group-user" */ '@/views/user/UserStart');
const UserDetail = () =>
 import(/* webpackChunkName: "group-user" */ '@/views/user/UserDetail');
const UserEdit = () =>
 import(/* webpackChunkName: "group-user" */ '@/views/user/UserEdit');
const Header = () =>
 import(/* webpackChunkName: "group-comp" */ '@/components/Header');
const Footer = () =>
 import(/* webpackChunkName: "group-comp" */ '@/components/Footer');
const UsersAlert = () =>
 import(/* webpackChunkName: "group-comp" */ '@/components/UsersAlert');
const NotFound = () =>
 import(/* webpackChunkName: "group-comp" */ '@/views/NotFound');

import NProgress from 'nprogress'; // 引入进度条
import 'nprogress/nprogress.css'; // 引入进度条样式

const routes = [
  {
    path: '/',
    components: {
      default: Home,
      'router-view-header': Header,
      'router-view-footer': Footer,
    },
    meta: {
      enterActiveClass: 'animate__slideInLeft',
      leaveActiveClass: 'animate__slideOutRight',
    },
  },
  {
    path: '/users',
    components: {
      default: Users,
      'router-view-header': Header,
    },
    children: [
      {
        path: '',
        components: {
          default: UserStart,
          'users-alert': UsersAlert,
        },
      },
      { path: ':id', component: UserDetail },
      {
        name: 'userEdit',
        path: ':id/edit',
        component: UserEdit,
        props: (route) => ({
          id: route.params.id,
          name: route.query.name,
          age: route.query.age,
          level: '中级',
        }),
      },
    ],

    meta: {
      enterActiveClass: 'animate__bounceIn',
      leaveActiveClass: 'animate__bounceOut',
    },
  },

  {
    path: '/redirect-to-users',
    redirect: '/users',
  },
  {
    name: '404',
    path: '/404',
    components: {
      default: NotFound,
      'router-view-header': Header,
      'router-view-footer': Footer,
    },
  },
  {
    path: '/:notFound(.*)',
    redirect: (to) => {
      return {
        name: '404'
      };
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
});

// 注册全局前置守卫，每个路由进入前执行
router.beforeEach((to, from, next) => {
  // 开启进度条
  NProgress.start();
  // 放行进入下一个路由页面
  next();
});
// 注册全局后置守卫，路由切换完成之后执行
router.afterEach(() => {
  // 关闭进度条
  NProgress.done();
});

export default router;
