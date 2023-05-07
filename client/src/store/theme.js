import { create } from "zustand";
// getTheme is for set theme day or night

export const useThemeStore = create((set) => ({
  theme: "day",
  setTheme: (state) => set({ theme: state.theme }),
}));
