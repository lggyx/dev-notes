<template>
  <div>
    <p>{{ msg }}</p>
    <p>count:{{ count }}</p>
    <p>update:{{ update }}</p>
    <button @click="count++">count++</button>
    <button @click="increase">increase</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 简单数组接收属性方式
// const props = defineProps(["msg", "count"])
// 简单对象接收属性方式
// const props = defineProps({
//   msg: String,
//   count: Number,
// });
// 复杂对象接收属性方式
const props = defineProps({
  msg: String,
  count: {
    type: Number, // 约束数据类型
    default: 7, // 设置默认值
    required: true, // 是否必须传递
    validator: (val) => val > 0 && val < 3, // 自定义校验规则
  },
});
const update = ref(props.count);
const increase = () => {
  update.value++;
};
</script>
