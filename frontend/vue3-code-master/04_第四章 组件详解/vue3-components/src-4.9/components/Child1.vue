<template>
  <div>
    <h1>Child1</h1>
    <p>count:{{ count }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import emitter from '../servies/emitter'; // 引入事件总线
const count = ref(0);
// 绑定事件的回调函数，接收事件参数并进行使用
const increaseCountCallback = (num) => {
  count.value += num;
};
// 在组件挂载时，订阅事件
onMounted(() => {
  emitter.on('increaseCount', increaseCountCallback);
});
// 在组件卸载时，取消订阅事件
onBeforeUnmount(() => {
  emitter.off('increaseCount', increaseCountCallback);
});
</script>
