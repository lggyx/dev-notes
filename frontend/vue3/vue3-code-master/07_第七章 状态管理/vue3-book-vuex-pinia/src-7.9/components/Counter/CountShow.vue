<template>
  <div>
    <!-- 模板中可以通过store对象直接读取state数据和getters中的计算属性 -->
    点击次数为: {{ counterStore.count }}, 
    当前次数为: {{ counterStore.oddOrEven }}
  </div>
</template>

<script setup>
// 引入counter模块的useStore函数
import useCounterStore from '@/stores/counter';
// 创建store对象
const counterStore = useCounterStore();
</script>

<script>
export default {
  name: 'CountShow',
};
</script>
