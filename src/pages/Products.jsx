import React from "react";
import { useQuery } from "react-query";
import { getProducts } from "../apis/firebase";
import styles from "./Products.module.css";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";

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
      <ul className={styles.items}>
        {smartphones &&
          smartphones.map((item) => {
            return <ProductCard key={item.key} product={item} />;
          })}
      </ul>
    </section>
  );
}
