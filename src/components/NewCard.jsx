import React from "react";
import styles from "./NewCard.module.css";

export default function NewCard() {
  return (
    <li className={styles.item}>
      <a href="#">
        <div className={styles.imgBox}></div>
        <div className={styles.info}>
          <p className={styles.title}>
            삼성 VXT, 국제 정보보호 관리체계 표준 인정 받아
          </p>
          <p className={styles.date}>2024.02.01</p>
        </div>
      </a>
    </li>
  );
}
