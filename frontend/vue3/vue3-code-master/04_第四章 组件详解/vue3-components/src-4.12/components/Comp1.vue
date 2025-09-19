<template>
  <h1>Comp 1</h1>
</template>

<script setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
} from 'vue';

onBeforeMount(() => {
  console.log('Comp1 onBeforeMount');
});

onMounted(() => {
  console.log('Comp1 onMounted');
});

onBeforeUpdate(() => {
  console.log('Comp1 onBeforeUpdate');
});

onUpdated(() => {
  console.log('Comp1 onUpdated');
});

onBeforeUnmount(() => {
  console.log('Comp1 onBeforeUnmount');
});

onUnmounted(() => {
  console.log('Comp1 onUnmounted');
});

// 新添加的生命周期钩子函数，在KeepAlive使用的时候才触发
// 组件激活时触发
onActivated(() => {
  console.log('Comp1 onActivated');
});
// 组件失活时触发
onDeactivated(() => {
  console.log('Comp1 onDeactivated');
});
</script>
<script>
export default {
  name: 'Comp1',
};
</script>
