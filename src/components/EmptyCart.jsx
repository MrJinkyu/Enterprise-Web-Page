import React from "react";
import styles from "./EmptyCart.module.css";
import { useNavigate } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";

export default function EmptyCart() {
  const navigate = useNavigate();
  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <h3 className={styles.title}>장바구니가 비어 있습니다.</h3>
        <div className={styles.resultShipping}>
          모든 주문에 무료 배송 서비스가 제공됩니다.
        </div>
      </div>
      <div className={styles.smartphone}>
        <div className={styles.smartphoneWrapper}>
          <div className={styles.text}>
            <p className={styles.name}>Galaxy S24 Ultra</p>
            <p className={styles.description}>
              의사소통하는 가장 쉬운 방법,<br></br>
              실시간 통역
            </p>
            <button
              onClick={() =>
                navigate("/products", { state: { menu: "스마트폰" } })
              }
              className={styles.btn}
            >
              <span className={styles.btnText}>더 알아보기</span>
              <MdOutlineNavigateNext className={styles.btnIcon} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
