<template>
  <h2>github用户列表</h2>
  <button @click="clickGetUsers">获取用户列表</button>
  <h3 v-if="store.state.userList.loading">正在加载中...</h3>
  <ul v-else>
    <li v-for="user in store.state.userList.users" :key="user.login">
      <a :href="user.html_url" target="_blank">{{ user.login }}</a>
    </li>
  </ul>
</template>

<script setup>
import { useStore } from 'vuex';

// 得到store对象
const store = useStore();
// 点击的回调中分发搜索用户列表的异步action
// 需要传递一个关键字参数, 这里选择传递"atguigu"
const clickGetUsers = () => {
  store.dispatch('userList/searchUsers', 'atguigu');
};
</script>

<script>
export default {
  name: 'UserList',
};
</script>
