<template>
  <div>
    点击次数为: {{ store.state.count }}, 当前次数为:
    {{ store.getters.oddOrEven }}
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
// 得到store对象
const store = useStore();
</script>

<script>
export default {
  name: 'CountShow',
};
</script>
