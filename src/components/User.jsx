import React, { useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import styles from "./User.module.css";

export default function User() {
  const navigate = useNavigate();
  const { user, login, logout } = useAuthContext();
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.container}>
      <AiOutlineShopping
        className={styles.icon}
        onClick={() => setVisible((prev) => !prev)}
      />
      <ul className={`${styles.menu} ${visible === true && styles.show}`}>
        {user && user.isAdmin && (
          <li
            className={styles.menuItem}
            onClick={() => navigate("/products/new")}
          >
            제품등록
          </li>
        )}
        <li className={styles.menuItem} onClick={() => navigate("/cart")}>
          장바구니
        </li>
        <li className={styles.menuItem} onClick={() => navigate("/interest")}>
          관심목록
        </li>
        {!user && (
          <li className={styles.menuItem} onClick={login}>
            로그인
          </li>
        )}
        {user && (
          <li className={styles.menuItem} onClick={logout}>
            로그아웃
          </li>
        )}
      </ul>
    </div>
  );
}