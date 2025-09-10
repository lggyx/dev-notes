<template>
  <h3>输入框自动获取焦点</h3>
  <input type="text" ref="inputRef" />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

// 用于保存input标签的ref对象
// const inputRef = ref();
const inputRef = ref<HTMLInputElement>(); // 进行泛型声明

// 在组件挂载后, 让input获取焦点
onMounted(() => {
  // inputRef.value.focus();
  inputRef.value?.focus();
});
</script>
