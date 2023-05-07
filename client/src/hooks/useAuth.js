import { useEffect } from "react";
import { loginRequest } from "../api/auth";
import { useAuthStore } from "../store/auth";

export default function useAuth() {
  useEffect(() => {
    async function loginAPI() {
      try {
        await loginRequest().then((res) => {
          useAuthStore
            .getState()
            .setToken({ token: res.headers.authorization });
        });
      } catch (error) {
        console.log(error);
      }
    }
    loginAPI();
  }, []);
}
