<template>
   <div>
    <h1>编辑用户</h1>
    <!-- 接收路由的params参数，参数名称为id，并进行展示使用 -->
    <p>用户编号：{{ $route.params.id }}</p>
    <!-- 接收路由的query参数，参数名称为name以及age -->
    <p>用户名称：{{ $route.query.name }}</p>
    <p>用户年龄：{{ $route.query.age }}</p>
    <h2>属性映射的参数内容：</h2>
    <p>id：{{ id }}</p>
    <p>name：{{ name }}</p>
    <p>age：{{ age }}</p>
    <p>level：{{ level }}</p>
    
    <!-- 利用事件绑定实现编程式导航应用 -->
    <button class="btn btn-primary" @click="goback">返回上页</button>
   </div>
  </template>
  
  <script setup>
  // 引入路由中useRouter这一hook钩子
  import { useRouter } from 'vue-router';
  const props = defineProps(['id', 'name', 'age', 'level']);
  // 获取应用程序中的路由顺
  const router = useRouter();
  console.log(router);
  const goback = () => {
   // 通过路由顺提供的方法返回到上一页
   router.back();
   // 通过go方法可以返回到前几层的页面
   // router.go(-2)
  };
  </script>