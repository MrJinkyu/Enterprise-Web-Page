import React from "react";
import Slider from "../components/Slider";
import styles from "./Home.module.css";
import NewCard from "../components/NewCard";
export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.home}>
        <Slider />
      </section>
      <section className={styles.news}>
        <div className={styles.titleBox}>
          <h3>
            삼성전자의
            <br />
            <em>새로운 소식</em>을 만나 보세요
          </h3>
        </div>
        <div className={styles.newsContents}>
          <ul className={styles.newsItems}>
            <NewCard />
            <NewCard />
            <NewCard />
            <NewCard />
          </ul>
          <a
            href="https://news.samsung.com/kr/"
            target="blank"
            className={styles.linkBtn}
          >
            새로운 소식 더보기
          </a>
        </div>
      </section>
    </div>
  );
}
