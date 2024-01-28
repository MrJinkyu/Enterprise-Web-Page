import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ProductDetail.module.css";

export default function ProductDetail() {
  const {
    state: { product },
  } = useLocation();
  const { image, title, price, colors, options, type } = product;
  const [selectedColor, setSelectedColor] = useState();
  const [selectedOption, setSelectedOption] = useState();
  return (
    <section className={styles.container}>
      <div className={styles.type}>{type} 구입하기</div>
      <div className={styles.price}>₩{price}부터</div>
      <div className={styles.main}>
        <img className={styles.img} src={image} alt={title} />
        <div className={styles.info}>
          <div className={styles.box}>
            <p className={styles.description}>
              <strong>모델.</strong>당신이 선택한 모델은?
            </p>
            <div className={styles.title}>{title}</div>
          </div>

          <div className={styles.box}>
            <p className={styles.description}>
              <strong>색상.</strong>마음에 드는 색상을 선택하세요.
            </p>
            <p className={styles.selectedColor}>색상 - {selectedColor}</p>
            <ul className={styles.colors}>
              {colors.map((color, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedColor(color.split("#")[0])}
                  className={`${styles.color} ${
                    selectedColor === color.split("#")[0] && styles.selected
                  }`}
                >
                  <div
                    className={styles.colorShow}
                    style={{ backgroundColor: `#${color.split("#")[1]}` }}
                  ></div>
                </li>
              ))}
            </ul>
          </div>

          {options && (
            <div className={styles.box}>
              <p className={styles.description}>
                <strong>저장 용량.</strong>당신에게 알맞은 저장 용량은?
              </p>
              <ul className={styles.options}>
                {options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectedOption(option)}
                    className={`${styles.optionContainer} ${
                      option === selectedOption && styles.selected
                    }`}
                  >
                    <span className={styles.option}>{option}</span>
                    <span>₩{price + index * 200000}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button className={styles.cartBtn}>장바구니에 담기</button>
        </div>
      </div>
    </section>
  );
}
