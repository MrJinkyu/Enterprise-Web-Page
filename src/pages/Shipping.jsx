import React, { useState } from "react";
import styles from "./Shipping.module.css";
import useShipping from "../hooks/useShipping";
import { useLocation, useNavigate } from "react-router-dom";

export default function Shipping() {
  const {
    state: { cart, resultPrice },
  } = useLocation();
  const [info, setInfo] = useState({});
  const navigate = useNavigate();
  const {
    shippingQuery: { data: shippings },
    addItem,
    removeItem,
  } = useShipping();
  const hasInfo = Object.keys(info).length > 0;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((info) => ({ ...info, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.mobilePhone.length < 10 || info.mobilePhone.length > 15) {
      alert("휴대폰 번호는 10자리~15자리 사이를 입력해주세요.");
      return;
    }
    if (!cart || !resultPrice || !info) {
      return;
    }
    addItem.mutate(info);
    navigate("/cart/shipping/payment", {
      state: { cart, resultPrice, info },
    });
  };

  const handleClick = () => {
    if (cart && resultPrice && info) {
      navigate("/cart/shipping/payment", {
        state: { cart, resultPrice, info },
      });
    }
  };
  const [isNew, setIsNew] = useState(false);
  const [selectedItem, setSelectedItem] = useState(undefined);
  return (
    <section className={styles.container}>
      <div className={styles.titleBox}>
        <h3 className={styles.title}>
          주문하신 제품이 어디로 배송되길 원하십니까?
        </h3>
      </div>
      {shippings && shippings.length > 0 && (
        <div className={styles.prevItemsText}>기존 배송지</div>
      )}
      <ul className={styles.shippingItems}>
        {shippings &&
          shippings.length > 0 &&
          shippings.map((item) => {
            return (
              <li
                key={item.id}
                className={`${styles.shippingItem} ${item.id === selectedItem &&
                  styles.selected}`}
                onClick={() => {
                  setIsNew(false);
                  setSelectedItem(item.id);
                  setInfo(item);
                }}
              >
                <div className={styles.text}>
                  <p className={styles.shippingName}>
                    {item.first} {item.last}
                  </p>
                  <p className={styles.shippingDetail}>{item.detail}</p>
                </div>
                <button
                  onClick={() => {
                    removeItem.mutate(item.id, {
                      onSuccess: () => setInfo({}),
                    });
                  }}
                  className={styles.deleteItem}
                >
                  삭제
                </button>
              </li>
            );
          })}
      </ul>
      <div className={styles.btnContainer}>
        <button
          onClick={() => {
            setIsNew(true);
            setSelectedItem(undefined);
            setInfo({});
          }}
          className={`${styles.newShippingBtn} ${isNew && styles.selected}`}
        >
          새 주소 사용
        </button>
      </div>
      {isNew && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="last"
            placeholder="성"
            onChange={handleChange}
            value={info.last ?? ""}
            required
          />
          <input
            type="text"
            name="first"
            placeholder="이름"
            onChange={handleChange}
            value={info.first ?? ""}
            required
          />
          <input
            type="number"
            name="mobilePhone"
            placeholder="휴대폰 번호"
            onChange={handleChange}
            value={info.mobilePhone ?? ""}
            required
          />
          <div className={styles.address}>
            <select
              name="state"
              onChange={handleChange}
              value={info.state ?? ""}
              required
            >
              <option value="">시/도</option>
              <option value="강원도">강원도</option>
              <option value="경기도">경기도</option>
              <option value="경상남도">경상남도</option>
              <option value="경상북도">경상북도</option>
              <option value="전라남도">전라남도</option>
              <option value="전라북도">전라북도</option>
              <option value="제주도">제주도</option>
              <option value="충청남도">충청남도</option>
              <option value="충청북도">충청북도</option>
              <option value="서울">서울</option>
              <option value="부산">부산</option>
              <option value="대구">대구</option>
              <option value="인천">인천</option>
              <option value="광주">광주</option>
              <option value="대전">대전</option>
              <option value="울산">울산</option>
              <option value="세종">세종</option>
            </select>
            <input
              type="text"
              name="city"
              placeholder="지역/도시"
              onChange={handleChange}
              value={info.city ?? ""}
              required
            />
          </div>
          <input
            type="number"
            name="postalCode"
            placeholder="우편번호"
            onChange={handleChange}
            value={info.postalCode ?? ""}
            required
          />
          <input
            type="text"
            name="detail"
            placeholder="건물 번지, 이름 또는 거리 이름"
            onChange={handleChange}
            value={info.detail ?? ""}
            required
          />
          <button className={styles.submitBtn}>결제페이지로 이동</button>
        </form>
      )}

      {!isNew && (
        <div className={styles.submitBtnContaier}>
          <button
            disabled={!hasInfo}
            onClick={handleClick}
            className={`${styles.btn} ${!hasInfo && styles.disabled}`}
          >
            결제페이지로 이동
          </button>
        </div>
      )}
    </section>
  );
}
