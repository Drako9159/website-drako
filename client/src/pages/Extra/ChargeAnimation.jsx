import styles from "./ChargeAnimation.module.css";

import { useThemeStore } from "../../store/theme";

export default function ChargeAnimation() {
  const themeMode = useThemeStore((state) => state.theme);
  return (
    <div className={styles.container}>
      <span
        className={`${styles.loader} ${
          themeMode === "night" ? styles.loaderNight : styles.loaderDay
        }`}
      ></span>
    </div>
  );
}
