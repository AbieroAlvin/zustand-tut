import { create } from "zustand";

export const useComputed = create((set, get) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id != id),
    })),
  get completedTodos() {
    return get().todos.filter((todo) => todo.completed);
  },
  get incompleteTodos() {
    return get().todos.filter((todo) => !todo.completed);
  },
}));

// Here, completedTodos and incompletedTodos are computed values that use the get function to access the current state
