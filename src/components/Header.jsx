import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import User from "./User";
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerMemu from "./HamburgerMemu";

export default function Header() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const isHome = window.location.pathname === "/";
  const [toggle, setToggle] = useState(false);
  const SIDE_MENU = ["스마트폰", "태블릿", "갤럭시북", "워치", "버즈"];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 40) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${isVisible &&
        styles.visible} ${!isVisible && isHome && styles.home}`}
    >
      <div className={styles.wrap}>
        <h1 className={styles.title}>
          <Link
            to="/"
            className={`${styles.titleText} ${!isVisible &&
              isHome &&
              styles.home}`}
          >
            Samsung
          </Link>
        </h1>
        <div className={styles.nav}>
          <ul className={styles.menu}>
            {SIDE_MENU.map((item, index) => {
              return (
                <li
                  key={index}
                  className={styles.menuItem}
                  onClick={() =>
                    navigate("/products", { state: { menu: item } })
                  }
                >
                  {item}
                </li>
              );
            })}
          </ul>
          <User isHome={isHome} isVisible={isVisible} />
          <GiHamburgerMenu
            className={`${styles.toggleBtn} ${!isVisible &&
              isHome &&
              styles.home}`}
            onClick={() => setToggle(true)}
          />
        </div>
        <HamburgerMemu
          sideMenu={SIDE_MENU}
          active={toggle}
          handleClick={setToggle}
        />
      </div>
    </header>
  );
}
