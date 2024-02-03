import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import styles from "./CartItem.module.css";
import useCarts from "../hooks/useCarts";

export default function CartItem({ item, isCheck }) {
  const { image, type, option, color, price, quantity } = item;
  const { addOrUpdateItem, removeItem } = useCarts();
  const handlePlus = () => {
    if (item.quantity > 99) {
      return;
    }
    addOrUpdateItem.mutate({ ...item, quantity: quantity + 1 });
  };
  const handleMinus = () => {
    if (item.quantity < 2) {
      return;
    }
    addOrUpdateItem.mutate({ ...item, quantity: quantity - 1 });
  };
  const handleRemove = () => {
    removeItem.mutate(item.id);
  };
  return (
    <li className={`${styles.item} ${isCheck && styles.check}`}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={image} alt={type} />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{`${type} ${option} ${color}`}</div>
        <div className={styles.counter}>
          {!isCheck && (
            <FaMinus className={styles.minusBtn} onClick={handleMinus} />
          )}
          <span className={styles.quantity}>{quantity}</span>
          {!isCheck && (
            <FaPlus className={styles.plusBtn} onClick={handlePlus} />
          )}
        </div>
        <div className={styles.priceContainer}>
          <div className={styles.price}>₩{price * quantity}</div>
          {!isCheck && (
            <div className={styles.deleteContainer}>
              <button className={styles.deleteBtn} onClick={handleRemove}>
                삭제
              </button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}
