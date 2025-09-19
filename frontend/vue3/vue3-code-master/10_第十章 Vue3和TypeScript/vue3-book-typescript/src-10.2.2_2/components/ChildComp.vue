<template>
  <h3>Child组件标题</h3>
</template>

<script lang="ts" setup>
const fn = () => {
  alert('fn()');
};

// 向外暴露fn
defineExpose({
  fn
});
</script>
