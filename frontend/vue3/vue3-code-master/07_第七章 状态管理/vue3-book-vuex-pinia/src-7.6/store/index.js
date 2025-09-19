import { createStore } from 'vuex';
import counter from './modules/counter';
import userList from './modules/userList';

import createPersistedState from 'vuex-persistedstate';

const store = createStore({
  modules: {
    counter,
    userList,
  },
  // 配置Vuex的插件
  // plugins: [ 
  //   createPersistedState()
  // ]

  // 设置只存储counter模块状态值
  plugins: [
    createPersistedState({ paths: ['counter'] })
  ],
});

export default store;