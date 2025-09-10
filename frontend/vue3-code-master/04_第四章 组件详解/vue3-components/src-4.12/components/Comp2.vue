<template>
  <h1>Comp 2</h1>
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
  console.log('Comp2 onBeforeMount');
});

onMounted(() => {
  console.log('Comp2 onMounted');
});

onBeforeUpdate(() => {
  console.log('Comp2 onBeforeUpdate');
});

onUpdated(() => {
  console.log('Comp2 onUpdated');
});

onBeforeUnmount(() => {
  console.log('Comp2 onBeforeUnmount');
});

onUnmounted(() => {
  console.log('Comp2 onUnmounted');
});

// 新添加的生命周期钩子函数，在KeepAlive使用的时候才触发
// 组件激活时触发
onActivated(() => {
  console.log('Comp2 onActivated');
});
// 组件失活时触发
onDeactivated(() => {
  console.log('Comp2 onDeactivated');
});
</script>
<script>
export default {
  name: 'Comp2',
};
</script>
