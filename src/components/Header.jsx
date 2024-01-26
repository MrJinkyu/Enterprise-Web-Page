import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import User from "./User";

export default function Header() {
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
          <User />
        </div>
      </div>
    </header>
  );
}
