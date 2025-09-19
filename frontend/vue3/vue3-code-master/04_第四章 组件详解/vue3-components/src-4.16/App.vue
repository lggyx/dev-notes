<template>
  <!-- 插件组件的调用 -->
  <Header></Header>
  <!-- 插件指令的调用 -->
  <p v-upper:medium="'Hello Vue3'"></p>
  <!-- 插件全局方法调用 -->
  <p>{{ globalMethod('hi Vue3') }}</p>
</template>