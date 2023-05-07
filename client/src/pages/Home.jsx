import Header from "./Extra/Header/Header";
import Card1 from "../components/Home/Card1";
import Footer from "./Extra/Footer/Footer";
import useSEO from "../hooks/useSEO";
/*
<HeadProvider>
        <title>Cargando datos</title>
        <meta name="description" content="informacionhome" />
        <meta name="theme-color" content="#ffffff"/>
        <link rel="canonical" href="https://drako.icu" />
      </HeadProvider>*/
export default function Home() {
  useSEO({ description: "Welcome to my webpage", title: "hermoni", link: "https://drako.icu" });
  return (
    <>
      <Header />
      <Card1 />
      <Footer />
    </>
  );
}
