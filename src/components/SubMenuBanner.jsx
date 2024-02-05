import React, { useEffect, useState } from "react";
import styles from "./SubMenuBanner.module.css";

export default function SubMenuBanner({
  title,
  subMenu,
  bannerMenu,
  setBannerMenu,
}) {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 245) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title} 쇼핑하기</p>
      <ul className={`${styles.menu} ${scrolling && styles.fix}`}>
        <li
          onClick={() => setBannerMenu(null)}
          className={`${styles.item} ${!bannerMenu && styles.selected}`}
        >
          All
        </li>
        {subMenu &&
          subMenu.map((item, index) => {
            return (
              <li
                className={`${styles.item} ${item === bannerMenu &&
                  styles.selected}`}
                key={index}
                onClick={() => setBannerMenu(item)}
              >
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
