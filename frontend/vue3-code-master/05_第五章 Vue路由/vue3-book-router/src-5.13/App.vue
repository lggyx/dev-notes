<template>
  <div class="container">
    <router-view name="router-view-header"></router-view>
    <router-view v-slot="{ Component, route }">
      <!-- 利用router-view的slot插槽与component动态组件渲染实现transition在不同路由页面上的不同动画效果
        mode:
        in-out: 新元素先进行过渡，完成之后当前元素过渡离开。
        out-in: 当前元素先进行过渡，完成之后新元素过渡进入。
      -->
      <transition
        mode="out-in"
        :enter-active-class="`animate__animated ${route.meta.enterActiveClass}`"
        :leave-active-class="`animate__animated ${route.meta.leaveActiveClass}`"
      >
        <component :is="Component" />
      </transition>
    </router-view>
    <router-view name="router-view-footer"></router-view>
  </div>
</template>

<style>
  .container {
    height: 1200px;
  }
</style>
