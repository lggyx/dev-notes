import axios from 'axios';
export default {
  state: {
    loading: false, // 是否正在请求中
    users: [], // 要显示的用户列表
  },

  mutations: {
    // 更新为请求中的mutation
    requesting(state) {
      state.loading = true;
      state.users = [];
    },
    // 更新为请求成功的Mutation
    reqSuccess(state, users) {
      state.loading = false;
      state.users = users;
    },
  },

  actions: {
    // 请求搜索用户列表的异步action
    async searchUsers({ commit }, keyword) {
      // 在发请求前, 触发mutation调用将state状态变为请求中
      commit('requesting');
      // 发送异步ajax请求, 通过await 得到成功的响应
      const response = await axios.get(
        'https://api.github.com/search/users?q=' + keyword
      );
      // 取出用户列表
      const users = response.data.items;
      // 触发mutation调用, 将state状态变为成功
      commit('reqSuccess', users);
    },
  },
};
