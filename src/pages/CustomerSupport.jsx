import React, { useState } from "react";
import styles from "./CustomerSupport.module.css";
import ChatBotModal from "../components/ChatBotModal";

export default function CustomerSupport() {
  const [modal, setModal] = useState(false);
  return (
    <section className={styles.container}>
      <div className={styles.titleBox}>
        <h3>챗봇 상담</h3>
      </div>
      <div className={styles.contentBox}>
        <div className={styles.intro}>
          <div className={styles.imgBox}></div>
          <p className={styles.introText}>
            "규스비는 <em>인공지능 채팅</em> 로봇 입니다."
          </p>
        </div>
        <div className={styles.msgBox}>
          <div className={styles.msg}>
            <p className={styles.msgText}>
              삼성전자서비스는 <em>신속한 상담</em> 및 <em>고객 편의</em>를
              제공하기 위하여 <em>챗봇 상담</em>
              서비스를 운영하고 있습니다.
            </p>
            <button className={styles.msgBtn} onClick={() => setModal(true)}>
              챗봇 상담 시작
            </button>
          </div>
        </div>
      </div>
      {modal && <ChatBotModal handleClick={setModal} />}
    </section>
  );
}
