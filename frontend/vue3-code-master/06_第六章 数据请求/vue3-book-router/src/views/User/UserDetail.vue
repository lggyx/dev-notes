<template>
  <div v-if="user">
    <h1>用户详情</h1>
    <!-- 接收路由的params参数，参数名称为id -->
    <p>用户编号：{{ $route.params.id }}</p>
    <p>用户名称：{{ user.name }}</p>
    <p>用户地址：{{ user.address }}</p>
    <p>用户头像：<img :src="user.avatar" /></p>
    <!-- 将router-link声明式导航改造成编程式导航 -->
    <button class="btn btn-primary" @click="gotoEdit">编辑用户</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { reqGetUser } from '@/request';
import { onBeforeRouteUpdate, useRouter, useRoute } from 'vue-router';


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

// 设置用户响应式数据
const user = ref(null);
// 需要利用watch监控确认路由中的params参数产生变化
// 如果确实参数内容发生变化，则需要利用接口请求新的用户详情信息
// immediate的作用是需要对路由进行立即监控处理
watch(
 () => route.params.id,
 async (newVal) => {
  if (newVal) {
    user.value = await reqGetUser(route.params.id);
  }
 },
 {
  immediate: true,
 }
);
</script>
