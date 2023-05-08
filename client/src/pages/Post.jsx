import Card2 from "../components/Post/Card2";
import Card1 from "../components/Post/Card1";

import Header from "./Extra/Header/Header";
import Footer from "./Extra/Footer/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPost } from "../api/posts";
import NotRequest from "../pages/Extra/NotRequest";
import useSEO from "../hooks/useSEO";
import { useAuthStore } from "../store/auth";

export default function Post() {
  const routeParams = useParams();
  const [post, setPost] = useState([]);
  const [status, setStatus] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [postHead, setPostHead] = useState({});

  const isAuth = useAuthStore((state) => state.isAuth);

  useSEO(postHead);

  useEffect(() => {
    async function apply() {
      try {
        if (isAuth) {
          await getPost(routeParams.id).then((response) => {
            setPost(response.data),
              setStatus(response.status),
              setPostHead({
                description: response.data.content.info.description,
                title: response.data.content.info.title,
                link: `https://drako.icu/blog/${response.data.content.info.filename}`,
                image:
                  import.meta.env.VITE_URL_BACKEND + "images/webp/"+
                  response.data.content.info.image,
              }),
              setIsLoading(false);
          });
        }
      } catch (error) {
        setStatus(error.request.status);
      }
    }
    apply();
  }, [isAuth]);

  return status >= 400 ? (
    <>
      <Header activeLink={"blog"}></Header>
      <Card1></Card1>
      <NotRequest status={status}></NotRequest>
      <Footer></Footer>
    </>
  ) : (
    <>
      <Header activeLink={"blog"}></Header>
      <Card1></Card1>
      <Card2 post={post} status={status} isLoading={isLoading}></Card2>
      <Footer></Footer>
    </>
  );
}
