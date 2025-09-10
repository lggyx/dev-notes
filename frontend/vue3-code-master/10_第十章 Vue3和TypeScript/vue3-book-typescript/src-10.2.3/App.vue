<script setup lang="ts">
import { ref, computed } from 'vue';

const count = ref(1);

// 不使用泛型的写法
// const double = computed(() => {
//   return count.value * 2;
// });

// 使用泛型的写法
const double = computed<number>(() => {
  return count.value * 2;
});
</script>

<template>
  <p>count: {{ count }}</p>
  <p>double: {{ double }}</p>
</template>

<style scoped></style>
