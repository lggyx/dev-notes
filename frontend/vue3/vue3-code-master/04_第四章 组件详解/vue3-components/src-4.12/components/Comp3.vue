<template>
  <h1>Comp 3</h1>
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
  console.log('Comp3 onBeforeMount');
});

onMounted(() => {
  console.log('Comp3 onMounted');
});

onBeforeUpdate(() => {
  console.log('Comp3 onBeforeUpdate');
});

onUpdated(() => {
  console.log('Comp3 onUpdated');
});

onBeforeUnmount(() => {
  console.log('Comp3 onBeforeUnmount');
});

onUnmounted(() => {
  console.log('Comp3 onUnmounted');
});

// 新添加的生命周期钩子函数，在KeepAlive使用的时候才触发
// 组件激活时触发
onActivated(() => {
  console.log('Comp3 onActivated');
});
// 组件失活时触发
onDeactivated(() => {
  console.log('Comp3 onDeactivated');
});
</script>
<script>
export default {
  name: 'Comp3',
};
</script>
