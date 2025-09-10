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
import { useStore } from 'vuex';
const num = ref(1);

// 得到store
const store = useStore();

const clickIncrement = () => {
  // 触发名为increment的mutation调用，并传递num值
  store.commit('increment', num.value);
};

const clickDecrement = () => {
  // 触发名为decrement的mutation调用，并传递num值
  store.commit('decrement', num.value);
};

const clickIncrementIfOdd = () => {
  // 触发名为incrementIfOdd的action调用，并传递num值
  store.dispatch('incrementIfOdd', num.value);
};

const clickIncrementAsync = () => {
  // 触发名为incrementAsync的action调用，并传递num值
  store.dispatch('incrementAsync', num.value);
};
</script>

<script>
export default {
  name: 'CountUpdate',
};
</script>
