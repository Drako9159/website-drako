import styles from "./Card2.module.css";
import ChargeAnimation from "../../pages/Extra/ChargeAnimation";
import { useThemeStore } from "../../store/theme";
import NotRequest from "../../pages/Extra/NotRequest";

export default function Card1({ post, status, isLoading }) {
  const theme = useThemeStore((state) => state.theme);

  if (isLoading) return <ChargeAnimation></ChargeAnimation>;
  if (status === 0) {
    return <ChargeAnimation></ChargeAnimation>;
  }
  if (status >= 400) {
    return <NotRequest status={status} />;
  }
 
 

  return (
    <div
      className={`${styles.container} ${
        theme === "night" ? styles.containerNight : styles.containerDay
      }`}
      dangerouslySetInnerHTML={{ __html: post.content.dataHTML }}
    ></div>
  );
}
