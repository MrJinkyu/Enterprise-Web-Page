import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ProductDetail.module.css";
import Container from "../components/Container";
import { FaHandPointRight } from "react-icons/fa";
import useCarts from "../hooks/useCarts";

export default function ProductDetail() {
  const {
    state: { product },
  } = useLocation();
  const navigate = useNavigate();
  const { image, title, price, colors, options, type, category, id } = product;
  const [selectedTitle, setSelectedTitle] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const [selectedOption, setSelectedOption] = useState();
  const [selectedPrice, setSelectedPrice] = useState();
  const { addOrUpdateItem } = useCarts();
  const handleClick = () => {
    const newProduct = {
      id,
      category,
      type,
      title,
      image,
      color: selectedColor,
      option: selectedOption,
      price: selectedPrice,
      quantity: 1,
      createdAt: new Date().toString(),
    };
    addOrUpdateItem.mutate(newProduct, { onSuccess: () => navigate("/cart") });
  };
  return (
    <section className={styles.container}>
      <div className={styles.type}>{type} 구입하기</div>
      <div className={styles.price}>
        <span>₩{price}부터</span>
        <span className={styles.interestBtn}>관심목록에 추가하기</span>
      </div>
      <div className={styles.main}>
        <div className={styles.imgBox}>
          <img className={styles.img} src={image} alt={title} />
        </div>
        <div className={styles.info}>
          <div className={styles.box}>
            <p className={styles.description}>
              {!selectedTitle && <FaHandPointRight className={styles.hand} />}
              <strong>모델.</strong>당신이 선택한 모델은?
            </p>
            <div
              className={`${styles.title} ${selectedTitle && styles.selected}`}
              onClick={() => setSelectedTitle(title)}
            >
              {title}
            </div>
          </div>

          <div
            className={`${styles.box} ${!selectedTitle && styles.hideColor}`}
          >
            <p className={styles.description}>
              {selectedTitle && !selectedColor && (
                <FaHandPointRight className={styles.hand} />
              )}
              <strong>색상.</strong>마음에 드는 색상을 선택하세요.
            </p>
            <p className={styles.selectedColor}>색상 - {selectedColor}</p>
            <ul className={styles.colors}>
              {colors.map((color, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedColor(color.split("#")[0])}
                  className={`${styles.color} ${selectedColor ===
                    color.split("#")[0] && styles.selected}`}
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
            <div
              className={`${styles.box} ${(!selectedTitle || !selectedColor) &&
                styles.hideOptions}`}
            >
              <p className={styles.description}>
                {selectedTitle && selectedColor && !selectedOption && (
                  <FaHandPointRight className={styles.hand} />
                )}
                <strong>저장 용량.</strong>당신에게 알맞은 저장 용량은?
              </p>
              <ul className={styles.options}>
                {options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setSelectedOption(option);
                      setSelectedPrice(price + index * 200000);
                    }}
                    className={`${styles.optionContainer} ${option ===
                      selectedOption && styles.selected}`}
                  >
                    <span className={styles.option}>{option}</span>
                    <span>₩{price + index * 200000}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            className={`${styles.cartBtn} ${(!selectedTitle ||
              !selectedColor ||
              !selectedOption) &&
              styles.hide}`}
            onClick={handleClick}
          >
            장바구니에 담기
          </button>
        </div>
      </div>
    </section>
  );
}
