<template>
  <div>
   <h1>用户详情</h1>
   <p>用户编号：{{ $route.params.id }}</p>
   <button class="btn btn-primary" @click="gotoEdit">编辑用户</button>
  </div>
 </template>
 
 <script setup>
 import { useRouter, useRoute } from 'vue-router';
 const router = useRouter();
 const route = useRoute();
 const gotoEdit = () => {
   router.push({
    name: 'userEdit',
    params: { id: route.params.id },
    query: { name: '张三', age: 18 },
    hash: '#bottom',
   });
 };
 </script>