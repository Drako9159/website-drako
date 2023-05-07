import Header from "./Extra/Header/Header";
import Footer from "./Extra/Footer/Footer";
import Card1 from "../components/Blog/Card1";
import Card2 from "../components/Blog/Card2";
import { useState, useEffect } from "react";
import { getPostsEn, getPostsEs } from "../api/posts";
import { useLanguageStore } from "../store/language";
import NotRequest from "../pages/Extra/NotRequest";
import languageLibrary from "../languages/languageLibrary";
import useSEO from "../hooks/useSEO";
import useLanguage from "../hooks/useLanguage";

export default function Blog() {
  const language = useLanguageStore((state) => state.language);
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState(0);
  useSEO(useLanguage().head.blog);

  const strings = languageLibrary(language);

  useEffect(() => {
    async function getPosts() {
      try {
        if (language === "es") {
          await getPostsEs().then((response) => {
            setPosts(response.data.content), setStatus(response.status);
          });
        } else if (language === "en") {
          await getPostsEn().then((response) => {
            setPosts(response.data.content), setStatus(response.status);
          });
        }
      } catch (error) {
        setStatus(error.request.status);
      }
    }
    setTimeout(() => {
      getPosts();
    }, 1500);
  }, []);

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
      <Card2 posts={posts} status={status}></Card2>
      <Footer></Footer>
    </>
  );
}
