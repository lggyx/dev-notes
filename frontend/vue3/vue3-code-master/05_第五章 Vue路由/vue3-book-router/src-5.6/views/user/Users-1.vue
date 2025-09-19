<template>
  <div>
    <!-- 用户页的面包屑导航 -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/" class="text-decoration-none">首页</router-link>
        </li>
        <li class="breadcrumb-item active">
          <router-link to="/users" class="text-decoration-none"
            >用户</router-link
          >
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
            >用户 {{ id }}</router-link
          >
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
import { ref } from 'vue';
const ids = ref([1, 2, 3, 4, 5]);
</script>
