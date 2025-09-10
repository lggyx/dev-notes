<template>
  <div>
    <p>count:{{ count }}</p>
    <button @click="increase">increase</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);
const increase = () => {
  count.value++;
};

// 允许其他组件使用当前组件的count与increase
defineExpose({
  count,
  increase,
});
</script>
