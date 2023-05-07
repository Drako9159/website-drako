import Header from "./Extra/Header/Header";
import Footer from "./Extra/Footer/Footer";
import Card1 from "../components/About/Card1";
import useSEO from "../hooks/useSEO";
import useLanguage from "../hooks/useLanguage";


export default function About() {
  useSEO(useLanguage().head.about);
  return (
    <>
      <Header activeLink={"about"}></Header>
      <Card1></Card1>
      <Footer></Footer>
    </>
  );
}
