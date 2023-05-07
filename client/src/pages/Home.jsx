import Header from "./Extra/Header/Header";
import Card1 from "../components/Home/Card1";
import Footer from "./Extra/Footer/Footer";
import useSEO from "../hooks/useSEO";
import useLanguage from "../hooks/useLanguage";

export default function Home() {
  useSEO(useLanguage().head.home);
  return (
    <>
      <Header />
      <Card1 />
      <Footer />
    </>
  );
}
