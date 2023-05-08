import useSEO from "./useSEO";

export default function usePostSEO(description, title, link) {
  console.log(description, title, link);
  useSEO({
    description: "Drako's Blog",
    title: "Drako's Blog",
    link: "https://drakodigital.com/images/drako.png",
  });
}
