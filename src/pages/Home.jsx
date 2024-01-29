import React from "react";
import Slider from "../components/Slider";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <section className={styles.firstSection}>
      <Slider />
    </section>
  );
}
