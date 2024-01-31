import React from "react";
import Container from "../components/Container";
import { useAuthContext } from "../context/AuthContext";
import { useQuery } from "react-query";
import { getMyCart } from "../apis/firebase";
import CartItem from "../components/CartItem";
import styles from "./MyCart.module.css";

export default function MyCart() {
  const { uid } = useAuthContext();
  const { data: cart } = useQuery(["cart", uid || ""], () => getMyCart(uid), {
    enabled: !!uid,
  });
  const isCart = cart && cart.length > 0;
  return (
    <Container>
      <ol className={styles.items}>
        {isCart &&
          cart.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
      </ol>
      <div className={styles.summary}>
        <div className={styles.subtotal}>
          <span>소계</span>
          <span className={styles.value}>₩2900000</span>
        </div>
        <div className={styles.shipping}>
          <span>배송</span>
          <span className={styles.value}>무료</span>
        </div>
        <div className={styles.total}>
          <span>총계</span>
          <span className={styles.totalValue}>₩500000000</span>
        </div>
      </div>
      <div className={styles.paymentBtnContainer}>
        <button className={styles.paymentBtn}>결제</button>
      </div>
    </Container>
  );
}
