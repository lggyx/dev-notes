<template>
  <div>
    <!-- 用户页的面包屑导航 -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/" class="text-decoration-none">首页</router-link>
        </li>
        <li class="breadcrumb-item active">
          <router-link to="/users" class="text-decoration-none">用户</router-link>
        </li>
      </ol>
    </nav>
    <!-- 用户列表以及用户查看、用户详情、编辑用户是左右两个独立的部分 -->
    <div class="row">
      <!-- 用户列表 -->
      <div class="col-3">
        <h1>用户列表</h1>
        <div class="list-group">
          <!-- 跳转用户详情路由链接 -->
          <router-link
            v-for="id in ids"
            :key="id"
            :to="`/users/${id}`"
            class="list-group-item list-group-item-action"
            :class="{ active: id === currentId }"
            >用户 {{ id }}</router-link>
        </div>
      </div>
      <!-- 用户查看、用户详情、编辑用户 -->
      <div class="col-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const ids = ref([1, 2, 3, 4, 5]);

// 通过 useRoute 钩子声明当前 route 路由对象
const route = useRoute();
// 声明一个响应式数据为当前选中的用户id
const currentId = ref(null);
// 利用 watch 监控确认在不同用户点击以后路由参数发生变化
watch(
  () => route.params.id,
  (val) => {
    // 对当前选中的用户id重新赋值
    // 将变化以后新值在数据类型转化以后再给它
    currentId.value = +val;
  },
  {immediate: true} // 初始执行一次，刷新选中对应用户
);
</script>
