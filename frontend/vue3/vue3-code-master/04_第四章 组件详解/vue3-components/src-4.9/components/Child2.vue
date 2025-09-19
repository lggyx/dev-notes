<template>
  <div>
    <h1>Child2</h1>
    <button @click="increase">increase</button>
  </div>
</template>

<script setup>
import emitter from '../servies/emitter'; // 引入事件总线
// 在组件内部分发事件
const increase = () => {
  emitter.emit('increaseCount', 2);
};
</script>
