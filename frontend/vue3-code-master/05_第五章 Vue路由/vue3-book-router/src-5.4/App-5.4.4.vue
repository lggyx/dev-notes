<template>
  <div class="container">
    <!-- 利用router-link实现路由的声明式导航跳转 -->
    <router-link active-class="active" to="/" class="btn btn-secondary">切换到首页</router-link>
    <router-link to="/users" custom v-slot="{ navigate, isActive }">
      <button
        class="btn btn-secondary"
        :class="[isActive && 'active']"
        @click="navigate"
      >切换到用户页</button>
    </router-link>
    <hr>
    <!-- 利用router-view进行路由页面在指定位置的渲染 -->
    <router-view></router-view>
  </div>
</template>