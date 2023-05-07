import Card2 from "../components/Post/Card2";
import Card1 from "../components/Post/Card1";

import Header from "./Extra/Header/Header"
import Footer from "./Extra/Footer/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPost } from "../api/posts";
import NotRequest from "../pages/Extra/NotRequest";

export default function Post() {
  const routeParams = useParams();
  const [post, setPost] = useState([]);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    async function apply() {
      try {
        await getPost(routeParams.id).then((response) => {
          setPost(response.data), setStatus(response.status);
        });
      } catch (error) {
        //console.log(error.response.status);
        setStatus(error.request.status);
      }
    }
    setTimeout(() => {
      apply();
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
      <Card2 post={post} status={status}></Card2>
      <Footer></Footer>
    </>
  );
}
