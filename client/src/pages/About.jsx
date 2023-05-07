import Header from "./Extra/Header/Header";
import Footer from "./Extra/Footer/Footer";
import Card1 from "../components/About/Card1";
import { useEffect } from "react";
import { useLanguageStore } from "../store/language";
import languageLibrary from "../languages/languageLibrary";

export default function About() {
  const language = useLanguageStore((state) => state.language);
  const strings = languageLibrary(language);
  useEffect(() => {
    document.title = strings.titlesTab.about;
  }, []);
  return (
    <>
      <Header activeLink={"about"}></Header>
      <Card1></Card1>
      <Footer></Footer>
    </>
  );
}
