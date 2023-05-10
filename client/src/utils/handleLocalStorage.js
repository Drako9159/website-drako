export function handleLocalStorage(localStorage, setTheme, setLanguage) {
  
  localStorage.getItem("themeMode") === null
    ? localStorage.setItem("themeMode", "day")
    : localStorage.getItem("themeMode");



  localStorage.getItem("languageMode") === null
    ? localStorage.setItem("languageMode", "en")
    : localStorage.getItem("languageMode");
/*
  localStorage.getItem("configs") === null
    ? localStorage.setItem("configs", JSON.stringify({ theme: "day", language: "en"}))
    : localStorage.getItem("configs");
*/
  
  setLanguage({ language: localStorage.getItem("languageMode") });
  setTheme({ theme: localStorage.getItem("themeMode") });
}
