import { create } from "zustand";

export const useLanguageStore = create((set) => ({
  language: "en",
  setLanguage: (state) => set({ language: state.language }),
}));


