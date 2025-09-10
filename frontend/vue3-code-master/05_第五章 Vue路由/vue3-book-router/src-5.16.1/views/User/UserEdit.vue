<template>
   <div>
    <h1 id="top">编辑用户</h1>
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
    <div style="height:700px;"></div>
    <router-link
     :to="{ params: $route.params, query: $route.query, hash: '#top' }"
     id="bottom"
     class="btn btn-secondary"
     >返回顶部</router-link>
   </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  const props = defineProps(['id', 'name', 'age', 'level']);
  const router = useRouter();
  const goback = () => {
   router.back();
  };
  </script>