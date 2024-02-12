import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.title}>Samsung</div>
          <a
            href="https://github.com/MrJinkyu/Enterprise-Web-Page"
            target="blank"
            className={styles.link}
          >
            깃허브 바로가기
          </a>
        </div>
        <div className={styles.description}>
          이 프로젝트는 포트폴리오 목적으로 제작되었습니다. 상업적인 용도로
          사용하지 않을 것이며, 기존 사이트<em>(삼성전자)</em>에서 자료를 가져와
          활용하였습니다. 이 프로젝트의 목적은 개인적인 학습과 기술 데모를 위한
          것입니다. 원작자가 아닌 다른 소스로부터 자료를 가져왔음을 밝힙니다.
        </div>
      </div>
    </section>
  );
}
