<template>
  <div class="p-5 mb-4 bg-light rounded-3">
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold">404页面未找到</h1>
      <p class="col-md-12 fs-4">在你找寻真理的路上可能迷失了方向</p>
      <!-- 利用编程式导航进行返回上页的跳转操作 -->
      <button @click="goHome" class="btn btn-primary btn-lg">
        去首页
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goHome = () => {
  router.replace('/')
};
</script>
