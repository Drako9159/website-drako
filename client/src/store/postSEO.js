import { create } from "zustand";

export const usePostStore = create((set) => ({
  postSEO: {
    description: "Drako's Blog",
    title: "Drako's Blog",
    link: "https://drako.icu/blog",
  },
  setPostSEO: (state) => set({ postSEO: state.postSEO }),
}));


