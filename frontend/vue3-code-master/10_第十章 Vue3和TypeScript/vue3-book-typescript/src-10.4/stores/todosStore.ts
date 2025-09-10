import type { Todo, TodosState } from './types';
import { defineStore } from 'pinia';

const useTodosStore = defineStore('todos', {
  // 定义返回初始化state对象的函数
  // 指定返回值类型为TodoState类型
  state: (): TodosState => ({
    todos: [],
  }),

  actions: {
    // 根据传入的title添加一个新的todo
    // 指定传入的title为string类型
    addTodo(title: string) {
      const todo: Todo = {
        id: Date.now(),
        title: title,
        completed: false,
      };
      this.todos.unshift(todo);
    },

    // 切换指定id的todo的完成状态
    // 指定传入的id为number类型
    toggleTodo(id: number) {
      this.todos.some((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          return true;
        }
        return false;
      });
    },

    // 删除指定id的todo
    // 指定传入的id为number类型
    deleteTodo(id: number) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },

    // 删除所有完成的todo
    deleteCompleteTodos() {
      this.todos = this.todos.filter((todo) => !todo.completed);
    },
  },

  getters: {
    // 完成的数量
    // 指定返回值类型为number类型
    completedSize(): number {
      return this.todos.reduce(
        (pre, todo) => pre + (todo.completed ? 1 : 0),
        0
      );
    },
  },
});

export default useTodosStore;
