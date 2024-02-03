import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk";
import React, { useEffect, useRef } from "react";
import styles from "./PaymentWidget.module.css";

export default function PaymentWidget({ products, price, customer }) {
  const paymentWidgetRef = useRef(null);
  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(
        process.env.REACT_APP_TOSSPAYMENTS_CLIENT_KEY,
        customer.id
      );

      paymentWidget.renderPaymentMethods("#payment-widget", price);

      paymentWidgetRef.current = paymentWidget;
    })();
  }, [price, customer.id]);
  return (
    <div className={styles.paymentWidget}>
      <h3 className={styles.paymentHeader}>주문서</h3>
      <div id="payment-widget" />
      <div className={styles.paymentBtnContainer}>
        <button
          className={styles.paymentBtn}
          onClick={async () => {
            const paymentWidget = paymentWidgetRef.current;

            try {
              await paymentWidget?.requestPayment({
                orderId: customer.id,
                orderName: `${products[0].type} 외 ${products.length}건`,
                customerName: `${customer.last}${customer.first}`,
                customerMobilePhone: `${customer.mobilePhone}`,
                successUrl: `${window.location.origin}/success`,
                failUrl: `${window.location.origin}/fail`,
              });
            } catch (err) {
              console.log(err);
            }
          }}
        >
          결제하기
        </button>
      </div>
    </div>
  );
}
