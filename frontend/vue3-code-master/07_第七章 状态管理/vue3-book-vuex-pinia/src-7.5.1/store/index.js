import { createStore } from 'vuex';
import counter from './modules/counter';

const store = createStore({
  // 配置Vuex模块
  modules: {
    counter,
  },
});

export default store;
