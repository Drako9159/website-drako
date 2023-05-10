import styles from "./Layout.module.css";
import themeLibrary from "../../themes/themeLibrary";
import { useThemeStore } from "../../store/theme";
import { useConfigsStore } from "../../store/configs";

export default function Layout({ children }) {
  const theme = useConfigsStore((state) => state.configs.theme);
  //const theme = useThemeStore((state) => state.theme);
  const color = themeLibrary(theme);
  return (
    <div style={color.layout} className={styles.container}>
      {children}
    </div>
  );
}
