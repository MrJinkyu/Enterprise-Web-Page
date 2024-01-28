import React from "react";
import styles from "./SubMenuBanner.module.css";

export default function SubMenuBanner({
  title,
  subMenu,
  bannerMenu,
  setBannerMenu,
}) {
  console.log(subMenu);
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <ul className={styles.menu}>
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
                className={`${styles.item} ${
                  item === bannerMenu && styles.selected
                }`}
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
