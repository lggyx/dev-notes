<script setup>
import { provide, ref } from 'vue';
import Child from './components/Child.vue';

const count = ref(0);

provide('count', count); // count是ref数据类型
provide('msg', '你好，尚硅谷'); // msg是非响应式数据类型

const increase = () => {
  count.value++;
};
provide('increase', increase); // increase是函数
</script>

<template>
  <Child />
  <p>msg:{{ msg }}</p>
  <p>count:{{ count }}</p>
  <p>state.count:{{ state.count }}</p>
</template>