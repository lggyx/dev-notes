// 1.从vue-router中引入创建路由器与创建history模式的两个函数
import { createRouter, createWebHashHistory } from 'vue-router';
// 2.引入路由组件
import Home from '@/views/Home'; // 首页
import Users from '@/views/User/Users'; // 用户页
import UserStart from '@/views/User/UserStart'; // 用户起始页
import UserDetail from '@/views/User/UserDetail'; // 用户详情
import UserEdit from '@/views/User/UserEdit'; // 编辑用户
// 3.配置静态路由表
const routes = [
  { path: '/', component: Home },
  {
    path: '/users',
    component: Users,
    // 设置用户版块嵌套子路由
    // 注意path路径不需要添加/users前缀路径也不需要添加/这一起始路径
    children: [
      // 嵌套路由默认显示模块，用户起始页
      { path: '', component: UserStart },
      // 用户详情页
      { path: ':id', component: UserDetail },
      // 编辑用户页
      { 
        path: ':id/edit', 
        component: UserEdit,
        // 可以将路由的参数进行属性化映射操作，组件中只需要进行属性接收即可使用路由的参数内容
        // 1.布尔型：可以映射params参数，但无法映射query等其它参数
        // props: true,
        
        // 2.对象型：只可以映射静态常量对象属性，无法映射params与query等参数
        // props: { level: '初级' },

        // 3.函数型：可以映射任意参数内容，包括params、query与自定义静态常量对象属性
        props: (route) => ({
          id: route.params.id,
          name: route.query.name,
          age: route.query.age,
          level: '中级',
        }),
      },
    ],
  },
];
// 4. 创建路由器对象
// 需要明确路由的操作模式history以及确认静态路由表内容routes
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 全局配置linkActiveClass链接的高亮
  linkActiveClass: 'active',
});

// 5. 向外暴露路由器
export default router