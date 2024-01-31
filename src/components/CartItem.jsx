import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import styles from "./CartItem.module.css";

export default function CartItem({ item }) {
  const { image, type, option, color, price, quantity } = item;
  return (
    <li className={styles.item}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={image} alt={type} />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{`${type} ${option} ${color}`}</div>
        <div className={styles.counter}>
          <FaMinus className={styles.minusBtn} />
          <span className={styles.quantity}>{quantity}</span>
          <FaPlus className={styles.plusBtn} />
        </div>
        <div className={styles.priceContainer}>
          <div className={styles.price}>₩{price * quantity}</div>
          <div className={styles.deleteContainer}>
            <button className={styles.deleteBtn}>삭제</button>
          </div>
        </div>
      </div>
    </li>
  );
}
