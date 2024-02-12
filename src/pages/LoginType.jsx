import React from "react";
import styles from "./LoginType.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function LoginType() {
  const {
    state: { cart, resultPrice },
  } = useLocation();
  const navigate = useNavigate();
  const { login } = useAuthContext();
  return (
    <section className={styles.container}>
      <div className={styles.titleBox}>
        <h3 className={styles.title}>빠르게 결제하시려면 로그인하세요.</h3>
      </div>
      <div className={styles.type}>
        <div className={styles.loginBox}>
          <div className={styles.loginTitle}>구글 계정으로 로그인</div>
          <div className={styles.loginDescription}>
            회원으로 주문하시면 상품과 배송지를 저장할 수 있습니다.
          </div>
          <button
            className={styles.loginBtn}
            onClick={() => {
              login();
              navigate("/cart");
            }}
          >
            구글 계정 로그인하기
          </button>
        </div>
        <div className={styles.loginBox}>
          <div className={styles.loginTitle}>비회원으로 주문 계속 진행하기</div>
          <div className={styles.loginDescription}>
            비회원으로 주문하시면 상품과 배송지가 임시적으로 저장됩니다.
          </div>
          <button
            className={styles.loginBtn}
            onClick={() => {
              navigate("/cart/shipping", { state: { cart, resultPrice } });
            }}
          >
            비회원으로 주문하기
          </button>
        </div>
      </div>
    </section>
  );
}
