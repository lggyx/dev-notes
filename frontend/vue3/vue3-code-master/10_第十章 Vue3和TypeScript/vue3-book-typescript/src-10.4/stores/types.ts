// Todo类型
export interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}

// Todo列表的类型别名
export type TodoList = Todo[];

// Todos状态对象的类型
export interface TodosState {
  todos: TodoList;
}
