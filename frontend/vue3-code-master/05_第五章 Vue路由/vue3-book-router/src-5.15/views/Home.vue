<template>
  <div>首页</div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

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

// 初始
onBeforeMount(() => {
  console.log('Home onBeforeMount');
});

onMounted(() => {
  console.log('Home onMounted');
});

// 更新
onBeforeUpdate(() => {
  console.log('Home onBeforeUpdate');
});

onUpdated(() => {
  console.log('Home onUpdated');
});

// 销毁
onBeforeUnmount(() => {
  console.log('Home onBeforeUnmount');
});

onUnmounted(() => {
  console.log('Home onUnmounted');
});

// 激活
onActivated(() => {
  console.log('Home onActivated');
});

// 失活
onDeactivated(() => {
  console.log('Home onDeactivated');
});
</script>
