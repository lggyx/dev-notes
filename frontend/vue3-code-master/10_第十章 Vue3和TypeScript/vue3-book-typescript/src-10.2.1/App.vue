<script setup lang="ts">
import { reactive } from 'vue';
/* 不使用泛型 */
// const person = reactive({
//   name: 'tom',
//   age: 0,
// });

// 下面是更新的正确写法
// person.name = 'Jack'
// person.age = 3

// 下面是更新的错误写法
// person.name = 3
// person.age = 'Jack'

// 使用泛型
// const person = reactive<{
//   name: string;
//   age: number;
// }>({
//   name: 'tom',
//   age: 0,
// });

// const person = reactive<{
//   name: string;
//   age: number;
// }>({
//   name: 0, // name只能是string值, 不能是number值
//   age: 'Tom', // age只能是number值，不能是string值
// });

// 定义接口
interface PersonState {
  name: string;
  age: number;
}
// 使用接口来指定泛型的具体类型
const person = reactive<PersonState>({
  name: 'tom',
  age: 0,
});

// 定义一个新的包含name和age的reactive响应对象
const person2 = reactive<PersonState>({
  name: 'Jack',
  age: 3,
});
</script>

<template>
  <p>person: {{ person.name }}-{{ person.age }}</p>
  <p>person2: {{ person2.name }}-{{ person2.age }}</p>
</template>

<style scoped></style>
