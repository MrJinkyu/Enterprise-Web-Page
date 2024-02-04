import React from "react";
import Slider from "../components/Slider";
import styles from "./Home.module.css";
import News from "../components/News";
export default function Home() {
  return (
    <div className={styles.container}>
      <Slider />
      <News />
    </div>
  );
}
