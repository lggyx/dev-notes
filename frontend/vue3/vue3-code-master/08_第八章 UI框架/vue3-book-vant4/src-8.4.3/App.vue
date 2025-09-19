<script setup>
import { ref } from 'vue';
// 设置选项卡默认选中项
const active = ref(1);
// 设置选项卡ref值
const tabRef = ref(null);
// 切换选项卡时的事件回调
const changeTab = (index) => {
  console.log('当前选项卡下标：', index);
};
// 点击按钮对选项卡的方法进行调用
const switchTab = () => {
  tabRef.value.scrollTo(2);
};
</script>
<template>
  <!-- 利用第三方按钮，在找到tabs选项卡以后调用其方法 -->
  <van-button type="primary" @click="switchTab">切换至第3个标签</van-button>
  <!-- 属性绑定与事件监听 -->
  <van-tabs v-model:active="active" ref="tabRef" @change="changeTab">
    <van-tab title="标签 1">内容 1</van-tab>
    <van-tab title="标签 2">内容 2</van-tab>
    <van-tab title="标签 3">内容 3</van-tab>
    <van-tab title="标签 4">内容 4</van-tab>
  </van-tabs>
</template>
