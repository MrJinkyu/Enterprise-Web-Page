import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import User from "./User";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <h1 className={styles.title}>
          <Link to="/" className={styles.titleText}>
            Samsung
          </Link>
        </h1>
        <div className={styles.nav}>
          <ul className={styles.menu}>
            <li
              className={styles.menuItem}
              onClick={() =>
                navigate("/products", { state: { menu: "스마트폰" } })
              }
            >
              스마트폰
            </li>
            <li
              className={styles.menuItem}
              onClick={() =>
                navigate("/products", { state: { menu: "태블릿" } })
              }
            >
              태블릿
            </li>
            <li
              className={styles.menuItem}
              onClick={() =>
                navigate("/products", { state: { menu: "갤럭시북" } })
              }
            >
              갤럭시북
            </li>
            <li
              className={styles.menuItem}
              onClick={() => navigate("/products", { state: { menu: "워치" } })}
            >
              워치
            </li>
            <li
              className={styles.menuItem}
              onClick={() => navigate("/products", { state: { menu: "버즈" } })}
            >
              버즈
            </li>
            <li className={styles.menuItem}>고객지원</li>
          </ul>
          <User />
        </div>
      </div>
    </header>
  );
}
