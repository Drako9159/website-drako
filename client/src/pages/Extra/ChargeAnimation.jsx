import styles from "./ChargeAnimation.module.css";

import { useThemeStore } from "../../store/theme";
import { useConfigsStore } from "../../store/configs";

export default function ChargeAnimation() {
  //const themeMode = useThemeStore((state) => state.theme);
  const theme = useConfigsStore((state) => state.configs.theme);
  return (
    <div className={styles.container}>
      <span
        className={`${styles.loader} ${
          theme === "night" ? styles.loaderNight : styles.loaderDay
        }`}
      ></span>
    </div>
  );
}
