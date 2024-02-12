import React from "react";
import styles from "./SubMenuBanner.module.css";

export default function SubMenuBanner({
  title,
  subMenu,
  bannerMenu,
  setBannerMenu,
}) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title} 쇼핑하기</p>
      <ul className={styles.menu}>
        <li
          onClick={() => setBannerMenu(null)}
          className={`${styles.item} ${!bannerMenu && styles.selected}`}
        >
          전체보기
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
