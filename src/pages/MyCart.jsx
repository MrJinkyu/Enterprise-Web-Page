import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import styles from "./MyCart.module.css";
import useCarts from "../hooks/useCarts";
import EmptyCart from "../components/EmptyCart";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import useLocal from "../hooks/useLocal";
import { useAuthContext } from "../context/AuthContext";

export default function MyCart() {
  const {
    cartsQuery: { isLoading, data: cart },
  } = useCarts();
  const { user } = useAuthContext();
  const { getLocalItems } = useLocal();
  const [localItems, setLocalItems] = useState(getLocalItems());
  const navigate = useNavigate();
  const isCart = cart && cart.length > 0;
  const isLocalCart = localItems && localItems.length > 0;
  const resultPrice = cart
    ? cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    : localItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  const handleClick = () => {
    if (cart && resultPrice) {
      navigate("/cart/shipping", { state: { cart, resultPrice } });
    }
  };
  const handleUpdate = (updated) => {
    setLocalItems((items) =>
      items.map((item) => (item.id === updated.id ? updated : item))
    );
  };
  const handleDeleted = (deletedId) => {
    setLocalItems((items) => items.filter((item) => item.id !== deletedId));
  };
  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(localItems));
  }, [localItems]);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <section className={styles.container}>
        {(isCart || isLocalCart) && (
          <div className={styles.topResult}>
            <p className={styles.resultPrice}>장바구니 총액: ₩{resultPrice}</p>
            <p className={styles.resultShipping}>
              모든 주문에 무료 배송 서비스가 제공됩니다.
            </p>
            <button onClick={handleClick} className={styles.resultBtn}>
              결제
            </button>
          </div>
        )}
        <ol className={styles.items}>
          {user &&
            isCart &&
            cart
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((item) => {
                return <CartItem key={item.id} item={item} isUser={!!user} />;
              })}
          {!user &&
            localItems &&
            localItems
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdate={handleUpdate}
                    onDeleted={handleDeleted}
                  />
                );
              })}
        </ol>
        {(isCart || isLocalCart) && (
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
        )}
        {(isCart || isLocalCart) && (
          <div className={styles.paymentBtnContainer}>
            <button className={styles.paymentBtn} onClick={handleClick}>
              결제
            </button>
          </div>
        )}
        {!isCart && !isLocalCart && <EmptyCart />}
      </section>
    </>
  );
}
