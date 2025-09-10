<template>
  <div>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <button @click="clickIncrement">增加</button>
    <button @click="clickDecrement">减少</button>
    <button @click="clickIncrementIfOdd">奇数增加</button>
    <button @click="clickIncrementAsync">异步增加(延迟1S)</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import useCounterStore from '@/stores/counter';

const num = ref(1);
// 产生store对象
const counterStore = useCounterStore();

const clickIncrement = () => {
  // 可以直接调用定义在actions中的increment方法，并传入num值
  counterStore.increment(num.value);
};

const clickDecrement = () => {
  counterStore.decrement(num.value);
};

const clickIncrementIfOdd = () => {
  counterStore.incrementIfOdd(num.value);
};

const clickIncrementAsync = () => {
  counterStore.incrementAsync(num.value);
};
</script>

<script>
export default {
  name: 'CountUpdate',
};
</script>
