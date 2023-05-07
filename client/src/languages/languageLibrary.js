import { es } from "./es";
import { en } from "./en";

export default function languageLibrary(language) {
  const languages = { es: es, en: en };
  return languages[language];
}
