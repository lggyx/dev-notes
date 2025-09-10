import { createStore } from 'vuex';
// 创建store对象, 并配置state、getters、mutations和actions
const store = createStore({
  // 包含n个共享状态数据的对象
  state: {
    count: 0,
  },
  // 包含n个基于state的计算属性方法的对象
  getters: {
    evenOrOdd(state) {
      return state.count % 2 === 1 ? '奇数' : '偶数';
    },
  },
  // 包含n个直接更新状态数据的方法的对象
  mutations: {
    increment(state, num) {
      state.count += num;
    },

    decrement(state, payload) {
      state.count -= payload;
    },
  },
  // 包含n个执行同步或异步操作后间接更新状态数据的方法的对象
  actions: {
    incrementIfOdd(context, num) {
      if (context.state.count % 2 === 1) {
        context.commit('increment', num);
      }
    },

    incrementAsync({ commit }, num) {
      setTimeout(() => {
        commit('increment', num);
      }, 1000);
    },
  },
});
// 默认暴露store
export default store;
