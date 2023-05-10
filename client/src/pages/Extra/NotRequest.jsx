import themeLibrary from "../../themes/themeLibrary";
import { useThemeStore } from "../../store/theme";
import styles from "./NotRequest.module.css";
import { useNavigate } from "react-router-dom";
import { useConfigsStore } from "../../store/configs";

export default function NotRequest({ status }) {
  //const theme = useThemeStore((state) => state.theme);
  const theme = useConfigsStore((state) => state.configs.theme);
  const color = themeLibrary(theme);

  const navigate = useNavigate();

  function handleReload() {
    navigate("/");
    window.location.reload(false);
  }

  return (
    <div className={styles.container}>
      <h4 style={color.textEnable}>{status} &nbsp; ¡Oh, no!</h4>
      <button
        className={`${styles.button} ${
          theme === "night" ? styles.buttonNight : styles.buttonDay
        }`}
        onClick={handleReload}
      >
        Refresh Page
      </button>
    </div>
  );
}
