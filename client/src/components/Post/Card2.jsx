import styles from "./Card2.module.css";
import ChargeAnimation from "../../pages/Extra/ChargeAnimation";
import NotRequest from "../../pages/Extra/NotRequest";
import { useConfigsStore } from "../../store/configs";
import handleThemePost from "./colors/handleThemePost";

export default function Card1({ post, status, isLoading, colorPost }) {
  const theme = useConfigsStore((state) => state.configs.theme);

  if (isLoading) return <ChargeAnimation></ChargeAnimation>;
  if (status === 0) {
    return <ChargeAnimation></ChargeAnimation>;
  }
  if (status >= 400) {
    return <NotRequest status={status} />;
  }

  // ${handleThemePost(colorPost).container}
  return (
    <div
      className={`${styles.container} ${
        theme === "night" ? styles.containerNight : styles.containerDay
      } `}
      dangerouslySetInnerHTML={{ __html: post.content.dataHTML }}
    ></div>
  );
}
