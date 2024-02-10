import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Payment.module.css";
import CartItem from "../components/CartItem";
import PaymentWidget from "../components/PaymentWidget";

export default function Payment() {
  const {
    state: { cart, resultPrice, info },
  } = useLocation();
  const isCart = cart && cart.length > 0;
  return (
    <section className={styles.container}>
      <div className={styles.titleBox}>
        <h3 className={styles.title}>
          주문하시겠습니까?
          <br />
          입력하신 사항이 모두 정확한지 확인해주십시오.
        </h3>
      </div>
      <ol className={styles.items}>
        {isCart &&
          cart
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((item) => {
              return <CartItem key={item.id} item={item} isCheck={true} />;
            })}
      </ol>
      <div className={styles.deliveryContainer}>
        <h3 className={styles.deliveryHeader}>받는사람정보</h3>
        <table className={styles.deliveryAddress}>
          <tr>
            <th className={styles.deliveryTh}>이름</th>
            <td className={styles.deliveryTd}>
              {info.last}
              {info.first}
            </td>
          </tr>
          <tr>
            <th className={styles.deliveryTh}>배송주소</th>
            <td className={styles.deliveryTd}>
              {info.state} {info.city} {info.detail} {info.postalCode}
            </td>
          </tr>
          <tr>
            <th className={styles.deliveryTh}>연락처</th>
            <td className={styles.deliveryTd}>{info.mobilePhone}</td>
          </tr>
        </table>
      </div>
      <div className={styles.summaryContainer}>
        <h3 className={styles.summaryHeader}>총계</h3>
        <div className={styles.summary}>
          <div className={styles.subtotal}>
            <span>소계</span>
            <span className={styles.value}>₩{resultPrice}</span>
          </div>
          <div className={styles.shipping}>
            <span>배송</span>
            <span className={styles.value}>무료</span>
          </div>
          <div className={styles.total}>
            <span>총계</span>
            <span className={styles.totalValue}>₩{resultPrice}</span>
          </div>
        </div>
      </div>
      <PaymentWidget products={cart} price={resultPrice} customer={info} />
    </section>
  );
}
