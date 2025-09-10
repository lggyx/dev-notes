<template>
  <div class="container">
    <router-view name="router-view-header"></router-view>
    <router-view v-slot="{ Component, route }">
      <transition
        mode="out-in"
        :enter-active-class="`animate__animated ${route.meta.enterActiveClass}`"
        :leave-active-class="`animate__animated ${route.meta.leaveActiveClass}`"
      >
        <keep-alive>
          <component :is="Component" />
        </keep-alive>

        <!-- 利用字符串实现首页与用户页的缓存页包含 -->
        <!-- <keep-alive include="Home,Users">
          <component :is="Component" />
        </keep-alive> -->
        <!-- 利用正则实现首页与用户页的缓存页包含 -->
        <!-- <keep-alive :include="/Home|Users/">
          <component :is="Component" />
        </keep-alive> -->
        <!-- 利用数组实现首页与用户页的缓存页包含 -->
        <!-- <keep-alive :include="['Home','Users']">
          <component :is="Component" />
        </keep-alive> -->
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
