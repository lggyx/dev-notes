import { defineStore } from 'pinia';

/* 
调用defineStore产生用于创建store的函数，专门用来管理count数据
参数一：标识ID
参数二：配置对象，包含state/actions/getters，注意没有mutations
*/
const useCounterStore = defineStore('counter', {
  // 注意state必须是箭头函数，返回状态对象
  state: () => {
    return {
      count: 0,
    };
  },

  // 包含n个action方法的对象
  actions: {
    increment(num) {
      this.count += num;
    },
    decrement(num) {
      this.count -= num;
    },
    incrementIfOdd(num) {
      if (this.count % 2 === 1) {
        this.increment(num);
      }
    },
    incrementAsync(num) {
      setTimeout(() => {
        this.increment(num);
      }, 1000);
    },
  },
  // 包含n个计算属性方法的对象
  getters: {
    oddOrEven() {
      return this.count % 2 === 1 ? '奇数' : '偶数';
    },
  },
  persist: true // 声明开启持久化
});

export default useCounterStore;
