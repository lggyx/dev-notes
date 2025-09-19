<template>
  <h2>Grandson</h2>
  <!-- 普通数据无法添加到实例对象上，所以孙组件无法实现渲染 -->
  <!-- Property "msg" was accessed during render but is not defined on instance -->
  <p>msg:{{ msg }}</p>
  <!-- 代理数据可以进行正常的渲染 -->
  <p>count:{{ count }}</p>
  <button @click="increaseCount">increaseCount</button>
  <button @click="increase">increase</button>
</template>

<script setup>
import { inject } from 'vue';
const msg = inject('msg'); // 非响应式数据
const count = inject('count'); // 响应式数据
const increase = inject('increase'); // 函数
const increaseCount = () => {
  count.value++; // 可以实现响应式修改与渲染
};

</script>
