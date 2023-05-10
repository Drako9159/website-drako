import styles from "./Card1.module.css";
import { useThemeStore } from "../../store/theme";
import { useLanguageStore } from "../../store/language";
import languageLibrary from "../../languages/languageLibrary";
import themeLibrary from "../../themes/themeLibrary";
import { useConfigsStore } from "../../store/configs";

export default function Card1() {
  const language = useConfigsStore((state) => state.configs.language);
  //const theme = useThemeStore((state) => state.theme);
  const theme = useConfigsStore((state) => state.configs.theme);
  const color = themeLibrary(theme);
  const strings = languageLibrary(language);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 style={color.textEnable} className={styles.animation1}>
          {strings.blog.text1} <br></br>
        </h1>
        <h1 style={color.textDisable} className={styles.animation2}>
          {strings.blog.text2}
        </h1>
      </div>
      <div className={styles.right}>
        <div className={styles.logotipo}>
          <h2 style={color.textEnable} className={styles.logoHead}>
            antonio
          </h2>
          <div style={color.textEnable} className={styles.logosSub}>
            <h2>a</h2>
            <h2>a</h2>
            <h2>a</h2>
            <h2>a</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
