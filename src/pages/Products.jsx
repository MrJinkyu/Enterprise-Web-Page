import React, { useState } from "react";
import { useQuery } from "react-query";
import { getProducts } from "../apis/firebase";
import styles from "./Products.module.css";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import SubMenuBanner from "../components/SubMenuBanner";

export default function Products() {
  const {
    state: { menu },
  } = useLocation();
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], getProducts);
  const [bannerMenu, setBannerMenu] = useState(null);
  const categoryItems =
    products && products.filter((product) => product.category === menu);
  const subItems =
    categoryItems &&
    bannerMenu &&
    categoryItems.filter((product) => product.type === bannerMenu);
  const subMenu = categoryItems && [
    ...new Set(categoryItems.map((product) => product.type)),
  ];
  return (
    <section className={styles.container}>
      <SubMenuBanner
        title={menu}
        subMenu={subMenu}
        bannerMenu={bannerMenu}
        setBannerMenu={setBannerMenu}
      />
      <ul className={styles.items}>
        {!subItems &&
          categoryItems &&
          categoryItems.map((item) => {
            return <ProductCard key={item.id} product={item} />;
          })}
        {subItems &&
          subItems.map((item) => {
            return <ProductCard key={item.id} product={item} />;
          })}
      </ul>
    </section>
  );
}
