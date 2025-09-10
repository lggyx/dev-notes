<template>
  <div class="container">
    <!-- 可以给router-view指定name，利用命名视图模式渲染 -->
    <router-view name="router-view-header"></router-view>
    <router-view></router-view>
    <router-view name="router-view-footer"></router-view>
  </div>
</template>
