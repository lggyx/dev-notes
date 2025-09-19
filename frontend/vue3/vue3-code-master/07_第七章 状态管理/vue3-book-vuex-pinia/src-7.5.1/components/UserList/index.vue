<template>
  <h2>github用户列表</h2>
  <h3 v-if="store.state.userList.loading">正在加载中...</h3>
  <ul v-else>
    <li v-for="user in store.state.userList.users" :key="user.login">
      <a :href="user.html_url" target="_blank">{{ user.login }}</a>
    </li>
  </ul>
</template>

<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

onMounted(() => store.dispatch('userList/searchUsers', 'atguigu'))

</script>

<script>
export default {
  name: 'UserList',
}
</script>

<style scoped>

</style>
