import styles from "./Card1.module.css";
import pickArrow from "../../assets/icons/arrowDown.png";
import { Link } from "react-router-dom";
import languageLibrary from "../../languages/languageLibrary";
import { useThemeStore } from "../../store/theme";
import { useLanguageStore } from "../../store/language";
import themeLibrary from "../../themes/themeLibrary";

export default function Card1() {
  const language = useLanguageStore((state) => state.language);
  const theme = useThemeStore((state) => state.theme);
  const color = themeLibrary(theme);
  const strings = languageLibrary(language);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link className={styles.button} to="/blog">
          <div>
            <img
              style={
                theme === "night"
                  ? { filter: "contrast(1%)" }
                  : { filter: "none" }
              }
              src={pickArrow}
            ></img>
          </div>
          <p style={color.textEnable}>{strings.posts.text1}</p>
        </Link>
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
