<template>
  <div>
    <h1>用户详情</h1>
    <p>用户编号：{{ $route.params.id }}</p>
    <button class="btn btn-primary" @click="gotoEdit">编辑用户</button>
  </div>
</template>

<script setup>
import { onBeforeRouteUpdate } from 'vue-router';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const gotoEdit = () => {
  router.push({
    name: 'userEdit',
    params: { id: route.params.id },
    query: { name: '张三', age: 18 },
  });
};

// 组件更新前守卫
onBeforeRouteUpdate((to, from) => {
  if (to.params.id !== from.params.id) {
    alert(`已经切换查看不同的用户信息，目标用户id为${to.params.id}`);
  }
});
</script>
