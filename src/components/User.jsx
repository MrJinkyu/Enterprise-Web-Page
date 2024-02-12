import React, { useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import styles from "./User.module.css";
import useCarts from "../hooks/useCarts";
import useLocal from "../hooks/useLocal";

export default function User({ isHome, isVisible }) {
  const navigate = useNavigate();
  const { user, login, logout } = useAuthContext();
  const [visible, setVisible] = useState(false);
  const {
    cartsQuery: { data: cart },
  } = useCarts();
  const isCart = cart && cart.length > 0;
  const { getLocalItems } = useLocal();
  const localItems = getLocalItems();
  const isLocalCart = localItems && localItems.length > 0;

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <AiOutlineShopping
          className={`${styles.icon} ${!isVisible && isHome && styles.home}`}
          onClick={() => setVisible((prev) => !prev)}
        />
        {user && isCart && (
          <span
            className={`${styles.count} ${!isVisible && isHome && styles.home}`}
          >
            {cart.length}
          </span>
        )}
        {!user && isLocalCart && (
          <span
            className={`${styles.count} ${!isVisible && isHome && styles.home}`}
          >
            {localItems.length}
          </span>
        )}
      </div>
      <ul
        onMouseLeave={() => setVisible(false)}
        className={`${styles.menu} ${visible === true && styles.show}`}
      >
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
