import React from "react";
import styles from "./EmptyCart.module.css";
import { MdLocalShipping } from "react-icons/md";
export default function EmptyCart() {
  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <h3 className={styles.title}>장바구니가 비어 있습니다.</h3>
        <div className={styles.resultShipping}>
          모든 주문에 무료 배송 서비스가 제공됩니다.
        </div>
        <div className={styles.iconBox}>
          <MdLocalShipping className={styles.icon} />
        </div>
      </div>
    </section>
  );
}
