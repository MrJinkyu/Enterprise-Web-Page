import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import SubMenuBanner from "../components/SubMenuBanner";
import useProducts from "../hooks/useProducts";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Products() {
  const {
    state: { menu },
  } = useLocation();
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();
  const [bannerMenu, setBannerMenu] = useState(null);
  useEffect(() => {
    setBannerMenu(null);
  }, [menu]);
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
      {isLoading && <LoadingSpinner />}
      {error && <p>{error}</p>}
      <SubMenuBanner
        title={menu}
        subMenu={subMenu}
        bannerMenu={bannerMenu}
        setBannerMenu={setBannerMenu}
      />
      <ul className={styles.items}>
        {!subItems &&
          categoryItems &&
          categoryItems
            .sort((a, b) => b.price - a.price)
            .map((item) => {
              return <ProductCard key={item.id} product={item} />;
            })}
        {subItems &&
          subItems
            .sort((a, b) => b.price - a.price)
            .map((item) => {
              return <ProductCard key={item.id} product={item} />;
            })}
      </ul>
    </section>
  );
}
