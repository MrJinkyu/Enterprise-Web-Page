import React, { useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import styles from "./User.module.css";
import { useQuery } from "react-query";
import { getMyCart } from "../apis/firebase";

export default function User({ isHome, isVisible }) {
  const navigate = useNavigate();
  const { user, uid, login, logout } = useAuthContext();
  const [visible, setVisible] = useState(false);
  const { data: cart } = useQuery(["cart", uid || ""], () => getMyCart(uid), {
    enabled: !!uid,
  });
  const isCart = cart && cart.length > 0;
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <AiOutlineShopping
          className={`${styles.icon} ${!isVisible && isHome && styles.home}`}
          onClick={() => setVisible((prev) => !prev)}
        />
        {isCart && (
          <span
            className={`${styles.count} ${!isVisible && isHome && styles.home}`}
          >
            {cart.length}
          </span>
        )}
      </div>

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
