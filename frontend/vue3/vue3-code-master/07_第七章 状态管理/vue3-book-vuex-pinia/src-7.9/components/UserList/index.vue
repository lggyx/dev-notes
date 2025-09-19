<template>
  <h2>github用户列表</h2>
  <button @click="clickGetUsers">获取用户</button>
  <h3 v-if="loading">正在加载中...</h3>
  <ul v-else>
    <li v-for="user in users" :key="user.login">
      <a :href="user.html_url" target="_blank">{{ user.login }}</a>
    </li>
  </ul>
</template>

<script setup>
import { storeToRefs } from 'pinia';
// 引入用户列表模块的useStore函数
import useUserListStore from '../../stores/userList';
// 创建用户列表模块对应的store对象
const userListStore = useUserListStore();
// 利用storeToRefs让解构出的数据也是响应式的
const { loading, users } = storeToRefs(userListStore);

// 点击回调中通过store对象调用searchUsers方法来请求获取用户列表显示
const clickGetUsers = () => {
  userListStore.searchUsers('atguigu');
};
</script>
