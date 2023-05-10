import { create } from "zustand";

export const useConfigsStore = create((set) => ({
  configs: {
    theme: "day",
    language: "en",
  },
  setConfigs: (configs) => set((state) => ({ configs: configs })),
  setTheme: (theme) =>
    set((state) => ({
      configs: { theme: theme.theme, language: state.configs.language },
    })),

  setLanguage: (language) =>
    set((state) => ({
      configs: { theme: state.configs.theme, language: language.language },
    })),
}));
