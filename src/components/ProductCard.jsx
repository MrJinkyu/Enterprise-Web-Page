import React from "react";
import styles from "./ProductCard.module.css";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const { image, title, price, colors, options, id } = product;
  const navigate = useNavigate();
  return (
    <li
      className={styles.item}
      onClick={() => navigate(`/products/${id}`, { state: { product } })}
    >
      <div className={styles.inner}>
        <img src={image} alt={title} className={styles.img} />
        <div className={styles.info}>
          {colors && (
            <ul className={styles.colors}>
              {colors.map((color, index) => (
                <li
                  key={index}
                  className={styles.color}
                  style={{ backgroundColor: `#${color.split("#")[1]}` }}
                >
                  <span className={styles.colorText}>
                    {color.split("#")[0]}
                  </span>
                </li>
              ))}
            </ul>
          )}
          {options && (
            <ul className={styles.options}>
              {options.map((option, index) => (
                <li key={index} className={styles.option}>
                  {option}
                </li>
              ))}
            </ul>
          )}
          <div className={styles.title}>{title}</div>
          <div className={styles.priceContainer}>
            <span>기준가</span>
            <span className={styles.price}>₩{price}</span>
          </div>
        </div>
      </div>
    </li>
  );
}
