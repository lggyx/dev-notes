<template>
  <div>
    <input
      type="text"
      v-model="title"
      placeholder="点击Enter键添加"
      @keyup.enter="addTodo"
    />
    <ul>
      <li v-for="todo in todosStore.todos" :key="todo.id">
        <input type="checkbox" @click="toggleTodo(todo.id!)" />
        <span style="display: inline-block; width: 200px">{{
          todo.title
        }}</span>
        <span @click="deleteTodo(todo.id!)">X</span>
      </li>
    </ul>
    <div>
      完成数量: {{ todosStore.completedSize }}
      <button @click="deleteAllCompleted">删除所有完成的</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Todos',
};
</script>

<script lang="ts" setup>
import { ref } from 'vue';
import useTodosStore from './stores/todosStore';

const todosStore = useTodosStore();
const title = ref('');

// 添加todo
const addTodo = () => {
  todosStore.addTodo(title.value);
  title.value = '';
};

// 切换指定todo的完成状态
// 指定传入的id为number类型
const toggleTodo = (id: number) => {
  todosStore.toggleTodo(id);
};

// 删除指定todo
// 指定传入的id为number类型
const deleteTodo = (id: number) => {
  todosStore.deleteTodo(id);
};

// 删除所有已完成的todo
const deleteAllCompleted = () => {
  todosStore.deleteCompleteTodos();
};
</script>
