import axios from "../libs/axios";

export async function getPostsEs() {
  return await axios.get("/posts?language=es");
}
export async function getPostsEn() {
  return await axios.get("/posts?language=en");
}
export async function getPost(id) {
  return await axios.get(`/posts/${id}`);
}
