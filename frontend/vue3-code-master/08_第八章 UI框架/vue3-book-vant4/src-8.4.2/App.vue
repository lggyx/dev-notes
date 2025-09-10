<template>
  <van-button type="primary" @click="handleClick">主要按钮</van-button>
</template>

<script setup>
const handleClick = () => {
  alert('响应点击');
};
</script>
