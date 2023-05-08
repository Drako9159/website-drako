import axios from "axios";
import { useAuthStore } from "../store/auth";

const authApi = axios.create({
  baseURL: import.meta.env.VITE_URL_BACKEND,
  credentials: "include",
  withCredentials: true,
});

authApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  config.headers = {
    authorization: `Bearer ${token.token}`,
    Accept: "application/json",
    credentials: "include",
    withCredentials: true,
  };
  return config;
});

export default authApi;
