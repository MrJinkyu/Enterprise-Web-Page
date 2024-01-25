import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { AiOutlineShopping } from "react-icons/ai";
import { useAuthContext } from "../context/AuthContext";

export default function Header() {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const { user, login, logout } = useAuthContext();
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
            <AiOutlineShopping
              className={styles.userIcon}
              onClick={() => setUserMenuVisible((prev) => !prev)}
            />
            <ul
              className={`${styles.userMenu} ${
                userMenuVisible === true && styles.show
              }`}
            >
              <li className={styles.userMenuItem}>장바구니</li>
              <li className={styles.userMenuItem}>관심목록</li>
              {!user && (
                <li className={styles.userMenuItem} onClick={login}>
                  로그인
                </li>
              )}
              {user && (
                <li className={styles.userMenuItem} onClick={logout}>
                  로그아웃
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
