import React from "react";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const { image, title, price, colors, options, id } = product;
  return (
    <li className={styles.item}>
      <div className={styles.inner}>
        <img src={image} alt={title} className={styles.img} />
        {colors && (
          <div className={styles.colors}>
            {colors.map((color) => (
              <span className={styles.color}>{color}</span>
            ))}
          </div>
        )}
        {options && (
          <div className={styles.options}>
            {options.map((option) => (
              <span className={styles.option}>{option}</span>
            ))}
          </div>
        )}
        <div className={styles.title}>{title}</div>
        <div className={styles.priceContainer}>
          <span>기준가</span>
          <span className={styles.price}>{price}원</span>
        </div>
      </div>
    </li>
  );
}
