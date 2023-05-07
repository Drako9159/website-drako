import styles from "./Header.module.css";
import pickDay from "../../../assets/icons/sunAll.png";
import pickNight from "../../../assets/icons/sunWhite.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguageStore } from "../../../store/language";
import { useThemeStore } from "../../../store/theme";
import themeLibrary from "../../../themes/themeLibrary";
import languageLibrary from "../../../languages/languageLibrary";

export default function Header({ activeLink }) {
  const language = useLanguageStore((state) => state.language);
  const [btn, setBtn] = useState(styles.notActive);
  const [isActiveButton, setActiveButton] = useState(styles.burguerNotActive);
  const [animationDay, setAnimationDay] = useState("");
  const [animationNight, setAnimationNight] = useState("");

  const theme = useThemeStore((state) => state.theme);
  const strings = languageLibrary(language);
  const setTheme = useThemeStore((state) => state.setTheme);

  const color = themeLibrary(theme);

  function handleClickBurguer(e) {
    if (isActiveButton === styles.burguerNotActive) {
      setActiveButton(styles.burguerActive);
      setBtn(styles.active);
    } else {
      setActiveButton(styles.burguerNotActive);
      setBtn(styles.notActive);
    }
  }

  function handleTheme() {
    setAnimationDay(styles.pickDayAnimationOn);
    setAnimationNight(styles.pickNightAnimationOn);
    if (theme === "night") {
      setTheme({ theme: "day" });
      localStorage.setItem("themeMode", "day");
    } else {
      setTheme({ theme: "night" });
      localStorage.setItem("themeMode", "night");
    }
  }

  return (
    <div className={styles.container}>
      <div
        className={`${styles.title} ${
          theme === "night" ? styles.titleNight : styles.titleDay
        }`}
      >
        <Link className={styles.linkTitle} to="/">
          <h3 style={color.textEnable}>{strings.header.home}</h3>
        </Link>
      </div>

      <div
        className={`${styles.nav} ${
          theme === "night" ? styles.navNight : styles.navDay
        }`}
      >
        <ul>
          <li>
            <Link
              className={`${styles.linksDesktop}  ${
                activeLink === "blog" && theme === "night"
                  ? styles.activeLinkNight
                  : activeLink === "blog" && theme === "day"
                  ? styles.activeLinkDay
                  : ""
              } `}
              to="/blog"
            >
              <h3>{strings.header.nav[0]}</h3>
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              <h3>{strings.header.nav[1]}</h3>
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              <h3> {strings.header.nav[2]}</h3>
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              <h3>{strings.header.nav[3]}</h3>
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              <h3>{strings.header.nav[4]}</h3>
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              <h3>{strings.header.nav[5]}</h3>
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.linksDesktop}  ${
                activeLink === "about" && theme === "night"
                  ? styles.activeLinkNight
                  : activeLink === "about" && theme === "day"
                  ? styles.activeLinkDay
                  : ""
              } `}
              to="/about"
            >
              <h3> {strings.header.nav[6]}</h3>
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.buttons}>
        <div className={styles.iconDayOrNigth}>
          <div
            className={`${styles.dayOrNight} ${
              theme === "night" ? styles.setNight : styles.setDay
            }`}
            onClick={handleTheme}
          >
            <img
              alt="day-night"
              className={
                /////////////////////////////////////
                `${styles.pickDayAnimation} ${
                  theme === "night" ? styles.pickDay : animationDay
                }`
              }
              src={pickDay}
            ></img>
            <img
              alt="night-day"
              className={` ${styles.pickNightAnimation} ${
                theme === "day" ? styles.pickNight : animationNight
              }`}
              src={pickNight}
            ></img>
          </div>
        </div>

        <div
          className={`${styles.containerBtn} ${
            theme === "night"
              ? styles.containerBtnNight
              : styles.containerBtnDay
          }`}
          onClick={(e) => handleClickBurguer(e)}
        >
          <div className={`${styles.btn} ${btn}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={styles.icon}>
          <svg className={styles.svg} viewBox={"0 0 10 10"}>
            <defs>
              <circle
                id={"circle"}
                cx={5}
                cy={5}
                r="4"
                fill={"transparent"}
                strokeWidth={"0.5"}
              ></circle>
            </defs>

            <use
              xlinkHref={"#circle"}
              stroke={color.colorLogo.a}
              strokeDasharray={"0,2.09,8.38,30"}
            />
            <use
              xlinkHref={"#circle"}
              stroke={color.colorLogo.b}
              strokeDasharray={"0,10.47,8.38,30"}
            />
            <use
              xlinkHref={"#circle"}
              stroke={color.colorLogo.c}
              strokeDasharray={"2.09,16.75,6.3"}
            />
          </svg>
          <p
            className={`${styles.logo} ${
              theme === "night" ? styles.logoNight : styles.logoDay
            }`}
          >
            a
          </p>
        </div>
      </div>

      <div
        className={`${styles.burguerNav} ${isActiveButton} ${
          theme === "night" ? styles.burguerNavNight : styles.burguerNavDay
        }`}
      >
        <ul>
          <li>
            <Link className={styles.linksDesktop}>
              <div className={styles.iconDayOrNigthMobile}>
                <div
                  className={`${styles.dayOrNight} ${
                    theme === "night" ? styles.setNight : styles.setDay
                  }`}
                  onClick={handleTheme}
                >
                  <img
                    alt="day-night"
                    className={`${styles.pickDayAnimation} ${
                      theme === "night" ? styles.pickDay : animationDay
                    }`}
                    src={pickDay}
                  ></img>
                  <img
                    alt="night-day"
                    className={` ${styles.pickNightAnimation} ${
                      theme === "day" ? styles.pickNight : animationNight
                    }`}
                    src={pickNight}
                  ></img>
                </div>
              </div>
            </Link>
          </li>

          <li>
            <Link className={styles.linksDesktop} to="/blog">
              <h3>{strings.header.nav[0]}</h3>
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              <h3>{strings.header.nav[1]}</h3>
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              <h3> {strings.header.nav[2]}</h3>
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              <h3> {strings.header.nav[3]}</h3>
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              <h3> {strings.header.nav[4]}</h3>
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/">
              <h3> {strings.header.nav[5]}</h3>
            </Link>
          </li>
          <li>
            <Link className={styles.linksDesktop} to="/about">
              <h3>{strings.header.nav[6]}</h3>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
