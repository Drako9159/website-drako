import styles from ".//NotFound.module.css";
import { Link } from "react-router-dom";

import { useThemeStore } from "../../store/theme";
import themeLibrary from "../../themes/themeLibrary";
import { useConfigsStore } from "../../store/configs";

export default function NotFound() {
 // const theme = useThemeStore((state) => state.theme);
  const theme = useConfigsStore((state) => state.configs.theme);
  const color = themeLibrary(theme);

  return (
    <div style={color.textDisable} className={styles.container}>
      <h2>404 Not Found</h2>
      <Link className={styles.button} style={color.textDisable} to="/">
        Volver
      </Link>
    </div>
  );
}
