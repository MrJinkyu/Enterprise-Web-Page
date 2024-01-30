import React from "react";
import Slider from "../components/Slider";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.homeContainer}>
      <section className={styles.home}>
        <Slider />
      </section>
      <section className={styles.smartphone}>
        <div className={styles.smartphoneWrapper}>
          <div className={styles.info}>
            <p className={styles.title}>Galaxy S24 Ultra</p>
            <p className={styles.description}>
              의사소통하는 가장 쉬운 방법,<br></br>
              실시간 통역
            </p>
            <button
              onClick={() =>
                navigate("/products", { state: { menu: "스마트폰" } })
              }
              className={styles.btn}
            >
              더 알아보기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
