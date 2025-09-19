<template>
  <div class="container">
    <!-- 导航菜单头部组件使用 -->
    <Header></Header>
    <!-- 利用router-view进行路由页面在指定位置的渲染 -->
    <router-view></router-view>
  </div>
</template>

<script setup>
// 引入导航菜单头部组件
import Header from '@/components/Header';
</script>
