<template>
  <div class="container">
    <router-view name="router-view-header"></router-view>
    <router-view v-slot="{ Component, route }">
      <!-- 
        利用router-view的slot与component动态组件实现路由切换的动画效果
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
