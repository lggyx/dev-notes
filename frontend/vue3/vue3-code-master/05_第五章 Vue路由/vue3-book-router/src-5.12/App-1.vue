<template>
  <div class="container">
    <router-view name="router-view-header"></router-view>
    <!-- 利用transition包裹默认router-view进行路由切换动画的支持处理 -->
    <transition
      enter-active-class="animate__animated animate__bounceIn"
      leave-active-class="animate__animated animate__bounceOut"
    >
      <router-view></router-view>
    </transition>
    <router-view name="router-view-footer"></router-view>
  </div>
</template>