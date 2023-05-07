import { create } from "zustand";

export const titlesTabStore = create((set) => ({
  title: "Antonio",
  setTitleTab: (state) => set({ title: state.title }),
}));
