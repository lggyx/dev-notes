import { createStore } from 'vuex';
import counter from './modules/counter';
import userList from './modules/userList';

const store = createStore({
  modules: {
    counter,
    userList,
  },
});

export default store;