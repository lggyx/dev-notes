<script setup>
import Home from './views/Home.vue'; // 引入首页
import Users from './views/Users.vue'; // 引入用户页
import { ref, markRaw } from 'vue';
const selectPage = ref(null); // 设置选中组件的ref对象
// 定义切换页面的方法
function changePage(page) {
  // 注意： 通过markRaw指定不对page组件本身进行响应处理
  selectPage.value = markRaw(page);
}
// 初始化默认页面为首页
changePage(Home);
</script>

<template>
  <div class="container">
    <button class="btn btn-secondary" @click="changePage(Home)">
      切换到首页
    </button>
    &nbsp;
    <button class="btn btn-secondary" @click="changePage(Users)">
      切换到用户页
    </button>
    <hr>
    <!-- 利用动态组件加载，动态显示用户切换的页面内容 -->
    <component :is="selectPage"></component>
  </div>
</template>
