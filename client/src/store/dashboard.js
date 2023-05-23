import { create } from "zustand";

export const useDashboardStore = create((set) => ({
  token: "",
  profile: null,
  isAuth: false,
  setToken: (token) => set((state) => ({ token, isAuth: true })),
  logout: () => set((state) => ({ token: "", isAuth: false, profile: null })),
}));
