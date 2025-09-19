import { defineStore } from 'pinia';
import axios from 'axios';

const useUserListStore = defineStore('userList', {
  state: () => {
    return {
      loading: false,
      users: [],
    };
  },

  actions: {
    // 搜索用户列表的异步action
    async searchUsers(keyword) {
      // 更新状态数据, loading指定为true, users指定为空数组
      this.loading = true;
      this.users = [];
      // 发送ajax请求
      const response = await axios.get(
        'https://api.github.com/search/users?q=' + keyword
      );
      // 请求成功后, 根据返回的用户列表更新users, loading指定false
      const users = response.data.items;
      this.users = users;
      this.loading = false;
    },
  },
});

export default useUserListStore;
