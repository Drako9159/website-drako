import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import ScrollToTop from "./utils/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./pages/Extra/Layout";
import Post from "./pages/Post";
import Blog from "./pages/Blog";
import Wrapper from "./pages/Extra/Wrapper";
import NotFound from "./pages/Extra/NotFound";
import { useThemeStore } from "./store/theme";
import { useLanguageStore } from "./store/language";
import { handleLocalStorage } from "./utils/handleLocalStorage";
import useConfigs from "./hooks/useConfigs";
import useAuth from "./hooks/useAuth";
import { useConfigsStore } from "./store/configs";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const setTheme = useThemeStore((state) => state.setTheme);
  const setLanguageMode = useLanguageStore((state) => state.setLanguage);

  //handleLocalStorage(localStorage, setTheme, setLanguageMode);

  useConfigs();

  //const setConfigTheme = useConfigsStore((state) => state.setTheme);
  //setConfigTheme({ theme: "daysss" });
  //const setThemeConfig
  //useConfigsStore.getState().setTheme({ theme: "day" })
  //console.log(useConfigsStore.getState().configs);

  useAuth();

  return (
    <Layout>
      <Wrapper>
        <BrowserRouter>
          <ScrollToTop></ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Post />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound></NotFound>} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </Layout>
  );
}
