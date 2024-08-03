import React, { useState } from "react";
import styles from "./ProductCard.module.css";
import { useNavigate } from "react-router-dom";
import { formatToWon } from "../utils/formatToWon";

export default function ProductCard({ product }) {
  const { image, title, price, colors, id, isNew } = product;
  const navigate = useNavigate();
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <li
      className={styles.item}
      onClick={() => navigate(`/products/${id}`, { state: { product } })}
    >
      <div
        className={styles.inner}
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        <div className={`${styles.hoverText} ${mouseOver && styles.visible}`}>
          제품 자세히 살펴보기
        </div>
        <div className={styles.title}>
          {title} {isNew && <span className={styles.newItem}>New</span>}
        </div>
        <img src={image} alt={title} className={styles.img} />
        {colors && (
          <ul className={styles.colors}>
            {colors.map((color, index) => (
              <li
                key={index}
                className={styles.color}
                style={{ backgroundColor: `#${color.split("#")[1]}` }}
              >
                <span className={styles.colorText}>{color.split("#")[0]}</span>
              </li>
            ))}
          </ul>
        )}
        <div className={styles.priceContainer}>
          <span>기준가</span>
          <span className={styles.price}>₩{formatToWon(price)}부터</span>
        </div>
      </div>
    </li>
  );
}
