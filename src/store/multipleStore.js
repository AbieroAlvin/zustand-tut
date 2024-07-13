import { create } from "zustand";

export const useMultiple = create((set) => ({
  user: { name: "", email: "" },
  todos: [],
  setUser: (user) => set({ user }),
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));

// This store has two main slices: user and todos, each with their own actions.
