import { es } from "../languages/es";
import { en } from "../languages/en";
import { useLanguageStore } from "../store/language";
import { useEffect } from "react";

export default function useLanguage() {
  const language = useLanguageStore((state) => state.language);
  const languages = { es: es, en: en };
  return languages[language];
}
