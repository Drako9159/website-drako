import axios from "../libs/axios";
const user = import.meta.env.VITE_USER_KEY;
const password = import.meta.env.VITE_USER_PASSWORD;

export async function loginRequest() {
  return await axios.post("/auth", { user, password });
}

export async function dashboardRequest(user, password) {
  return await axios.post("/dashboard", { user, password });
}