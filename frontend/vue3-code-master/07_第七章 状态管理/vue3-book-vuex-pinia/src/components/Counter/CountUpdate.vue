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
  import {ref} from 'vue'

  // 声明接收4个更新count数量的函数属性
  const props = defineProps({
    increment: Function,
    decrement: Function,
    incrementIfOdd: Function,
    incrementAsync: Function,
  })
  // 用来收集下拉选择数量的ref对象
  const num = ref(1)
  // 点击增加的回调
  const clickIncrement = () => {
    props.increment(num.value)
  }
  // 点击减少的回调
  const clickDecrement = () => {
    props.decrement(num.value)
  }
  // 点击奇数增加的回调
  const clickIncrementIfOdd = () => {
    props.incrementIfOdd(num.value)
  }
  // 点击异步增加按钮的回调
  const clickIncrementAsync = () => {
    props.incrementAsync(num.value)
  }
</script>

<script>
export default {
  name: 'CountUpdate',
}
</script>