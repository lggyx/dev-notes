<template>
  <div class="container">
    <!-- 利用router-link定义路由链接 -->
    <router-link to="/" class="btn btn-secondary">切换到首页</router-link>
    <router-link to="/users" class="btn btn-secondary">切换到用户页</router-link>
    <hr>
    <!-- 利用router-view定义路由组件在此显示-->
    <router-view></router-view>
  </div>
</template>
