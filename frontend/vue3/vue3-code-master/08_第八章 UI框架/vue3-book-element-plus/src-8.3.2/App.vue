<template>
  <el-button @click="handleClick">Default</el-button>
</template>

<script setup>
const handleClick = () => {
  alert('响应点击');
};
</script>
