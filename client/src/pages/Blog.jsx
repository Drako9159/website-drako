import Header from "./Extra/Header/Header";
import Footer from "./Extra/Footer/Footer";
import Card1 from "../components/Blog/Card1";
import Card2 from "../components/Blog/Card2";
import { useState, useEffect } from "react";
import { getPostsEn, getPostsEs } from "../api/posts";
import { useLanguageStore } from "../store/language";
import { useConfigsStore } from "../store/configs";
import NotRequest from "../pages/Extra/NotRequest";
import useSEO from "../hooks/useSEO";
import useLanguage from "../hooks/useLanguage";
import { useAuthStore } from "../store/auth";

export default function Blog() {
  useSEO(useLanguage().head.blog);
  
  const language = useConfigsStore((state) => state.configs.language);
  const [posts, setPosts] = useState([]);
  const [imagesUrl, setImagesUrl] = useState(""); // [0] = [url, setUrl
  const [status, setStatus] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const isAuth = useAuthStore((state) => state.isAuth);

  useEffect(() => {
    async function getPosts() {
      try {
        if (language === "es" && isAuth) {
          await getPostsEs().then((response) => {
            setPosts(response.data.content),
            setImagesUrl(response.data.image.url),
              setStatus(response.status),
              setIsLoading(false);
              
          });
        } else if (language === "en" && isAuth) {
          await getPostsEn().then((response) => {
            setPosts(response.data.content),
            setImagesUrl(response.data.image.url),
              setStatus(response.status),
              setIsLoading(false);
              
          });
        }
      } catch (error) {
        setStatus(error.request.status);
      }
    }
    getPosts();
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
      <Card2 posts={posts} status={status} isLoading={isLoading} imagesUrl={imagesUrl}></Card2>
      <Footer></Footer>
    </>
  );
}
