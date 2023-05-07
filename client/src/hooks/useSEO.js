import { useEffect, useRef } from "react";

export default function useSEO({ description, title, link }) {
  const prevTitle = useRef(document.title);
  const prevDescription = useRef(
    document.querySelector('meta[name="description"]').getAttribute("content")
  );
  const prevLink = useRef(document.querySelector('link[rel="canonical"]'));

  useEffect(() => {
    const previousTitle = prevTitle.current;
    if (title) {
      document.title = `${title}`;
    }
    return () => (document.title = previousTitle);
  }, [title]);

  useEffect(() => {
    const previousDescription = prevDescription.current;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (description) {
      metaDescription.setAttribute("content", `${description}`);
    }
    return () => metaDescription.setAttribute("content", previousDescription);
  }, [description]);

  useEffect(() => {
    const previousLink = prevLink.current;
    const linkCanonical = document.querySelector('link[rel="canonical"]');
    if (link) {
      linkCanonical.setAttribute("href", `${link}`);
    }
    return () => linkCanonical.setAttribute("href", previousLink);
  }, [link]);
}
