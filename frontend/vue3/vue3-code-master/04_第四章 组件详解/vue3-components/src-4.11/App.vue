<template>
  <button @click="changeTab(Comp1)">ChangeComp1</button>
  <button @click="changeTab(Comp2)">ChangeComp2</button>
  <button @click="changeTab(Comp3)">ChangeComp3</button>
  <component :is="tab"></component>
</template>
<script setup>
import Comp1 from './components/Comp1.vue';
import Comp2 from './components/Comp2.vue';
import Comp3 from './components/Comp3.vue';
import { ref, markRaw } from 'vue';
// 设置需要切换的目标
const tab = ref(null);
// 定义切换组件函数，将组件本身当成参数传递
function changeTab(comp) {
  // 将tab的值设置为非代理对象
  // 这是为了不对组件进行递归响应式数据代理操作以便增强性能
  tab.value = markRaw(comp);
}
// 默认切换显示组件1
changeTab(Comp1);
</script>
