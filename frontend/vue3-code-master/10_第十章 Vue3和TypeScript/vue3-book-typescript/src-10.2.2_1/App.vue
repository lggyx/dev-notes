<script setup lang="ts">
import { ref } from 'vue';

// const count = ref(1);
// const names = ref([]);

const count = ref<number>(1); // 指定value的类型必须是number
const names = ref<string[]>([]); // 指定value的类型必须是string[]

// 更新的正确写法
count.value += 2;
names.value.push('atguigu');

// 更新的错误写法
// count.value += '2'; // count的value不能是string值,只能是number值
// names.value.push(2); // names是string[], 不能放入number值

// 使用泛型
// const refData = ref<{
//   count: number;
//   names: string[];
// }>({
//   count: 1,
//   names: [],
// });

// 接口 + 泛型
interface RefData {
  count: number;
  names: string[];
}
const refData = ref<RefData>({
  count: 1,
  names: [],
});
</script>

<template>
  <p>count: {{ count }}</p>
  <p>names: {{ names }}</p>
  <p>refData: {{ refData.count }}-{{ refData.names }}</p>
</template>

<style scoped></style>
