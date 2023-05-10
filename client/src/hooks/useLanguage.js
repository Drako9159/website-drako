import { es } from "../languages/es";
import { en } from "../languages/en";
import { useLanguageStore } from "../store/language";
import { useEffect } from "react";
import { useConfigsStore } from "../store/configs";

export default function useLanguage() {
  const language = useConfigsStore((state) => state.configs.language);
  const languages = { es: es, en: en };
  return languages[language];
}
