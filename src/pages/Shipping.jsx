import React from "react";
import Container from "../components/Container";
import styles from "./Shipping.module.css";

export default function Shipping({ products, resultPrice }) {
  return (
    <Container>
      <h3 className={styles.title}>
        주문하신 제품이 어디로 배송되길 원하십니까?
      </h3>
      <form className={styles.form}>
        <input type="text" name="last" placeholder="성" />
        <input type="text" name="first" placeholder="이름" />
        <input type="number" name="mobilePhone" placeholder="휴대폰 번호" />
        <div className={styles.address}>
          <select name="state">
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
          <input type="text" name="city" placeholder="지역/도시" />
        </div>
        <input type="number" name="postalCode" placeholder="우편번호" />
        <input
          type="text"
          name="detail"
          placeholder="건물 번지, 이름 또는 거리 이름"
        />
        <button className={styles.btn}>주문검토</button>
      </form>
    </Container>
  );
}
