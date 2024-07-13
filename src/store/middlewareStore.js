import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const middlewareStore = create(
  devtools((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
  }))
);

//Zustand supports middleware for adding extra functionality. Here's an example using the devtools middleware for Redux DevTools integration:
