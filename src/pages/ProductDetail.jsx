import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ProductDetail.module.css";
import useCarts from "../hooks/useCarts";
import { useAuthContext } from "../context/AuthContext";
import useLocal from "../hooks/useLocal";
import { formatToWon } from "../utils/formatToWon";

export default function ProductDetail() {
  const {
    state: { product },
  } = useLocation();
  const navigate = useNavigate();
  const { image, title, price, colors, options, type, category, id } = product;
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(price);
  const { addOrUpdateItem } = useCarts();
  const { user } = useAuthContext();
  const { getLocalItems, addOrUpdateLocalItems } = useLocal();

  const handleClick = () => {
    if (!selectedColor || (options && !selectedOption)) {
      alert("제품의 옵션을 선택해주세요.");
      return;
    }
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
    if (!user) {
      const items = getLocalItems();
      const updatedItems = [...items, newProduct];
      addOrUpdateLocalItems(updatedItems);
    }
    addOrUpdateItem.mutate(newProduct, { onSuccess: () => navigate("/cart") });
  };
  return (
    <section className={styles.container}>
      <div className={styles.type}>{type} 구입하기</div>
      <div className={styles.price}>₩{price}부터</div>
      <div className={styles.main}>
        <div className={styles.imgBox}>
          <img className={styles.img} src={image} alt={title} />
        </div>
        <div className={styles.info}>
          <div className={styles.title}>{title}</div>
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
            <div className={styles.box}>
              <p className={styles.description}>
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
                    <span>₩{formatToWon(price + index * 200000)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button className={styles.cartBtn} onClick={handleClick}>
            장바구니에 담기
          </button>
        </div>
      </div>
    </section>
  );
}
