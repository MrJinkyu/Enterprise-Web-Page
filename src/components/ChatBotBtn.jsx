import React from "react";
import styles from "./ChatBotBtn.module.css";
export default function ChatBotBtn({ handleClick }) {
  return (
    <button className={styles.btn} onClick={() => handleClick((prev) => !prev)}>
      <img
        className={styles.img}
        src="https://res.cloudinary.com/dew8mkvyz/image/upload/v1699336797/mxo2gd6fbjexsugjodip.png"
        alt="chatbot"
      />
    </button>
  );
}
