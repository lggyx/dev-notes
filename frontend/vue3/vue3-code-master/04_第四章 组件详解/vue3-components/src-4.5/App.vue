<script setup>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
const refCount = ref(null);

// 利用ref找到子组件并控制子组件的count响应式数据
const increaseChildCount = () => {
  refCount.value.count++;
};

// 利用ref找到子组件并控制子组件的increase方法的调用
const invokeChildIncrease = () => {
  refCount.value.increase();
};
</script>

<template>
  <HelloWorld ref="refCount" />
  <button @click="increaseChildCount">increaseChildCount</button>
  <button @click="invokeChildIncrease">invokeChildIncrease</button>
</template>
