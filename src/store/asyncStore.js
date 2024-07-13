import { create } from "zustand";

export const useAsyncStore = create((set) => ({
  user: null,
  loading: false,
  error: null,
  fetchUser: async (id) => {
    set({ loading: true });
    try {
      const response = await fetch(`https://api.example.com/users/${id}`);
      const user = await response.json();
      set({ user, loading: false, error: null });
    } catch (error) {
      set({ error, loading: false });
    }
  },
}));

// This example shows how to handle loading states and errors in async operations.
