import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { LuUserCircle2 } from "react-icons/lu";
export default function Header() {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <h1 className={styles.title}>
          <Link to="/">Samsung</Link>
        </h1>
        <div className={styles.nav}>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>스마트폰</li>
            <li className={styles.menuItem}>태블릿</li>
            <li className={styles.menuItem}>갤럭시북</li>
            <li className={styles.menuItem}>워치</li>
            <li className={styles.menuItem}>버즈</li>
            <li className={styles.menuItem}>고객지원</li>
          </ul>
          <div className={styles.user}>
            <LuUserCircle2
              className={styles.userIcon}
              onClick={() => setUserMenuVisible((prev) => !prev)}
            />
            <ul
              className={`${styles.userMenu} ${
                userMenuVisible === true && styles.show
              }`}
            >
              <li className={styles.userMenuItem}>로그인</li>
              <li className={styles.userMenuItem}>장바구니</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
