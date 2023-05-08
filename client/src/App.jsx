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
import { loginRequest } from "./api/auth";
import { useAuthStore } from "./store/auth";
import { useThemeStore } from "./store/theme";
import { useLanguageStore } from "./store/language";
import { handleLocalStorage } from "./utils/handleLocalStorage";
import useAuth from "./hooks/useAuth";

export default function App() {
  const setTheme = useThemeStore((state) => state.setTheme);
  const setLanguageMode = useLanguageStore((state) => state.setLanguage);

  handleLocalStorage(localStorage, setTheme, setLanguageMode);

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
            <Route path="*" element={<NotFound></NotFound>} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </Layout>
  );
}
