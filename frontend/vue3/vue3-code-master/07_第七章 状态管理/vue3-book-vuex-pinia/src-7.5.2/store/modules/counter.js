export default {
  state: {
    count: 0,
  },

  mutations: {
    increment(state, payload) {
      state.count += payload;
    },

    decrement(state, payload) {
      state.count -= payload;
    },
  },

  actions: {
    incrementIfOdd(context, num) {
      if (context.state.count % 2 === 1) {
        context.commit('increment', num);
      }
    },

    incrementAsync(context, num) {
      setTimeout(() => {
        context.commit('increment', num);
      }, 1000);
    },
  },

  getters: {
    oddOrEven(state) {
      return state.count % 2 === 1 ? '奇数' : '偶数';
    },
  },
};
