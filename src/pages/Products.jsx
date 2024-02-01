import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getProducts } from "../apis/firebase";
import styles from "./Products.module.css";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import SubMenuBanner from "../components/SubMenuBanner";
import Container from "../components/Container";

export default function Products() {
  const {
    state: { menu },
  } = useLocation();
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], getProducts, { staleTime: 1000 * 60 * 5 });
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
    <Container>
      {isLoading && <p>Loading...</p>}
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
          categoryItems.map((item) => {
            return <ProductCard key={item.id} product={item} />;
          })}
        {subItems &&
          subItems.map((item) => {
            return <ProductCard key={item.id} product={item} />;
          })}
      </ul>
    </Container>
  );
}
