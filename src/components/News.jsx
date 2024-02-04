import React, { useEffect, useRef, useState } from "react";

import styles from "./News.module.css";
export default function News() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <section className={styles.news} ref={sectionRef}>
      <div className={`${styles.titleBox} ${isVisible && styles.anime}`}>
        <h3>
          삼성전자의
          <br />
          <em>새로운 소식</em>을 만나 보세요
        </h3>
      </div>
      <div className={`${styles.newsContents} ${isVisible && styles.anime}`}>
        <ul className={styles.newsItems}>
          <li className={styles.item}>
            <a
              target="blank"
              href="https://news.samsung.com/kr/%EC%82%BC%EC%84%B1-vxt-%EA%B5%AD%EC%A0%9C-%EC%A0%95%EB%B3%B4%EB%B3%B4%ED%98%B8-%EA%B4%80%EB%A6%AC%EC%B2%B4%EA%B3%84-%ED%91%9C%EC%A4%80-%EC%9D%B8%EC%A0%95-%EB%B0%9B%EC%95%84?utm_source=mainkv&utm_medium=internal"
            >
              <div className={styles.imgBox1}></div>
              <div className={styles.info}>
                <p className={styles.title}>
                  삼성 VXT, 국제 정보보호 관리체계 표준 인정 받아
                </p>
                <p className={styles.date}>2024.02.01</p>
              </div>
            </a>
          </li>
          <li className={styles.item}>
            <a
              target="blank"
              href="https://news.samsung.com/kr/%EC%82%BC%EC%84%B1%EC%A0%84%EC%9E%90-msci-esg-%ED%8F%89%EA%B0%80%EC%84%9C-aa-%EB%93%B1%EA%B8%89-%EA%B5%AD%EB%82%B4-ict-%EC%97%85%EA%B3%84-%EC%B5%9C%EA%B3%A0-%EC%88%98%EC%A4%80?utm_source=mainkv&utm_medium=internal"
            >
              <div className={styles.imgBox2}></div>
              <div className={styles.info}>
                <p className={styles.title}>
                  삼성전자, MSCI ESG 평가서 ‘AA’ 등급… 국내 ICT 업계 최고 수준
                </p>
                <p className={styles.date}>2024.02.01</p>
              </div>
            </a>
          </li>
          <li className={styles.item}>
            <a
              target="blank"
              href="https://news.samsung.com/kr/%EB%B6%81%EC%9C%A0%EB%9F%BD-%EA%B0%90%EC%84%B1-%EB%8B%B4%EC%9D%80-%EB%8D%94-%ED%94%84%EB%A0%88%EC%9E%84-%EC%82%BC%EC%84%B1%EC%A0%84%EC%9E%90x%EB%A7%88%EB%A6%AC%EB%A9%94%EA%BC%AC?utm_source=mainkv&utm_medium=internal"
            >
              <div className={styles.imgBox3}></div>
              <div className={styles.info}>
                <p className={styles.title}>
                  북유럽 감성 담은 ‘더 프레임’, 삼성전자X마리메꼬 한정판 협업
                  컬렉션 선봬
                </p>
                <p className={styles.date}>2024.01.31</p>
              </div>
            </a>
          </li>
          <li className={styles.item}>
            <a
              target="blank"
              href="https://news.samsung.com/kr/%EC%82%BC%EC%84%B1%EC%A0%84%EC%9E%90-ise-2024%EC%84%9C-%EB%8B%A4%EC%96%91%ED%95%9C-%EC%83%81%EC%97%85%EC%9A%A9-%EB%94%94%EC%8A%A4%ED%94%8C%EB%A0%88%EC%9D%B4-%EC%8B%A0%EC%A0%9C%ED%92%88-%EC%84%A0?utm_source=mainkv&utm_medium=internal"
            >
              <div className={styles.imgBox4}></div>
              <div className={styles.info}>
                <p className={styles.title}>
                  삼성전자 ISE 2024서 다양한 상업용 디스플레이 신제품 선보여
                </p>
                <p className={styles.date}>2024.01.31</p>
              </div>
            </a>
          </li>
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
  );
}
