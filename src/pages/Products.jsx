import React from "react";
import { useQuery } from "react-query";
import { getProducts } from "../apis/firebase";
import styles from "./Products.module.css";
import { useLocation } from "react-router-dom";

export default function Products() {
  const {
    state: { menu },
  } = useLocation();
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], getProducts);
  const smartphones =
    products && products.filter((product) => product.category === menu);
  return (
    <section className={styles.container}>
      <ul>
        {smartphones &&
          smartphones.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
      </ul>
    </section>
  );
}
