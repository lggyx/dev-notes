<script setup>
// 从vue库引入ref函数
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
// 创建初始value为0的响应式的ref对象
const count = ref(0);
// 定义增加count值的函数
const increment = () => {
  count.value++;
};
</script>

<template>
  <div>
    <h2>App组件标题</h2>
    <!-- 显示count -->
    <p>count: {{ count }}</p>
    <!-- 增加count值的按钮 -->
    <button @click="increment">增加</button>
    <HelloWorld />
  </div>
</template>

<style scoped>
div {
  border: 1px solid #aaa;
  margin: 20px;
}
/* 4.3.4 */
/* div h3 {
  font-size: 40px;
} */
div :deep(h3) {
  font-size: 40px;
}
</style>
