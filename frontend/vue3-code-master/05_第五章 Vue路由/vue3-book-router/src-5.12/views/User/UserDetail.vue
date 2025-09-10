<template>
  <div>
   <h1>用户详情</h1>
   <p>用户编号：{{ $route.params.id }}</p>
   
   <!-- 将router-link声明式导航改造成编程式导航 -->
   <button class="btn btn-primary" @click="gotoEdit">编辑用户</button>
  </div>
 </template>
 
 <script setup>
 // 引入路由中useRouter、useRoute这两hook钩子
 import { useRouter, useRoute } from 'vue-router';
 // 获取应用程序中的路由顺
 const router = useRouter();
 // 获取当前路由顺对象
 const route = useRoute();
 const gotoEdit = () => {
   // 1.字符串路径
   // router.push(`/users/${route.params.id}/edit?name=张三&age=18`)

   // 2.带有路径的对象与query查询参数
   // 注意：path不能与params配合使用，但它可以与query参数结合使用
   // router.push({ 
   //   path: `/users/${route.params.id}/edit`, 
   //   query: { name: '张三', age: 18 } 
   // })
   
   // 3.命名的路由，带params与query参数
   router.push({
    name: 'userEdit',
    params: { id: route.params.id },
    query: { name: '张三', age: 18 },
   });

   // 4.替换位置处理
   // router.replace({
   //  name: 'userEdit',
   //  params: { id: route.params.id },
   //  query: { name: '张三', age: 18 },
   // })
 };
 </script>