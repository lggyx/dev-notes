// 1.从vue-router中引入创建路由器与创建history模式的两个函数
import { createRouter, createWebHashHistory } from 'vue-router';
// 2.引入路由组件
import Home from '@/views/Home'; // 首页
import Users from '@/views/User/Users'; // 用户页
import UserStart from '@/views/User/UserStart'; // 用户起始页
import UserDetail from '@/views/User/UserDetail'; // 用户详情
import UserEdit from '@/views/User/UserEdit'; // 编辑用户

import Header from '@/components/Header'; // 头部导航
import Footer from '@/components/Footer'; // 底部版权
import UsersAlert from '@/components/UsersAlert';

import NotFound from '@/views/NotFound'

// 3.配置静态路由表
// 设置静态路由表
const routes = [
  {
    path: '/',
    components: {
      // 需要注意的是原来的component单数变成了components复数
      default: Home,
      // 定义了router-view-header指向Header头部菜单组件
      // 定义了router-view-footer指向Footer底部版权组件
      // 需要确认router-view部分是有定义则显示，没定义则不显示的原则
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
    // 设置用户版块嵌套子路由
    // 注意path路径不需要添加/users前缀路径也不需要添加/这一起始路径
    children: [
      // 嵌套路由默认显示模块，用户起始页
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

  // 重定向路由
  {
    path: '/redirect-to-users',
    redirect: '/users',
  },
  // NotFound页面路由
  {
    name: '404',
    path: '/404',
    components: {
      default: NotFound,
      'router-view-header': Header,
      'router-view-footer': Footer,
    },
  },
  // 不匹配的任意路由转发请求都自动重定向404页面
  {
    path: '/:notFound(.*)',
    // redirect: '/404',
    // redirect: {name: '404'},
    redirect: (to) => {
      return {
        name: '404'
      };
    },
  },
];
// 4. 创建路由器对象
// 需要明确路由的操作模式history以及确认静态路由表内容routes
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 全局配置linkActiveClass链接的高亮
  linkActiveClass: 'active',
  /* 
  路由跳转时要调用的回调函数，用来指定跳转后滚动停留的位置坐标
  位置坐标为包含left和top值的对象
  savedPosition：为前面离开时内部保存的滚动条的位置坐标对象，
  只有当点击浏览器的后退或前进按钮进行路由跳转时此参数才会有值
  */
  // scrollBehavior: (to, from, savedPosition) => {
  //   // 如果savedPosition有值，直接返回它，这样浏览器后退或前进时能停留在原来的位置
  //   if (savedPosition) {
  //     return savedPosition
  //   }
  //   // 否则停止在最上面最左边的位置
  //   return {left: 0, top: 0}
  // }
});

// 5. 向外暴露路由器
export default router;
