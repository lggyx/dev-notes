<script setup lang="ts">
// const emit = defineEmits(['increment', 'setMsg']);
// // 分发事件，事件名是特定的，但传递的数据是任意的
// emit('increment', 3);
// emit('setMsg', 'atguigu');

const emit = defineEmits<{
  (e: 'increment', num: number): void;
  (e: 'setMsg', value?: string): void;
}>();

// 分发事件的正确写法
emit('increment', 3);
emit('setMsg', 'atguigu');

// 分发事件的错误写法
// 事件名或传递的数据类型不正确
// emit('increment2', 3);
// emit('increment', 'abc');
</script>

<template>
  <p>HelloWorld</p>
</template>

<style scoped></style>
