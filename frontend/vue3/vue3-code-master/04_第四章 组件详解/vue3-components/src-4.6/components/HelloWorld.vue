<template>
  <div>
    <button @click="$emit('increaseParentCount', 2)">直接触发自定义事件</button>
    <button @click="increase">通过脚本触发自定义事件</button>
  </div>
</template>

<script setup>
// defineEmits是一个字符串数组，每个字符串是一个事件的名称
const emits = defineEmits(['increaseParentCount']);
const increase = () => {
  emits('increaseParentCount', 3);
};
</script>
