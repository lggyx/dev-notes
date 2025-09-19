<template>
  <div>
    <count-show :count="count" />
    <hr />
    <count-update
      :increment="increment"
      :decrement="decrement"
      :incrementIfOdd="incrementIfOdd"
      :incrementAsync="incrementAsync"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CountShow from './CountShow.vue';
import CountUpdate from './CountUpdate.vue';

// 定义CountShow和CountUpdate共享的count数量ref对象
const count = ref(0);
// 将count增加指定数量的函数
const increment = (num) => {
  count.value += num;
};
// 将count减少指定数量的函数
const decrement = (num) => {
  count.value -= num;
};
// count数量为奇数才增加指定数量的函数
const incrementIfOdd = (num) => {
  if (count.value % 2 === 1) {
    count.value += num;
  }
};
// 延迟1S异步将count增加指定数量的函数
const incrementAsync = (num) => {
  setTimeout(() => {
    count.value += num;
  }, 1000);
};
</script>

<script>
export default {
  name: 'Counter',
};
</script>