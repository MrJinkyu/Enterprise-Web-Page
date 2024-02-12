import React from "react";
import ChatBot from "react-simple-chatbot";
import { MdClose } from "react-icons/md";
import styles from "./ChatBotModal.module.css";
import { ThemeProvider } from "styled-components";

export default function ChatBotModal({ handleClick }) {
  const theme = {
    background: "var(--color-white)",
    headerBgColor: "var(--color-accent)",
    headerFontColor: "var(--color-white)",
    headerFontSize: "16px",
    botBubbleColor: "var(--color-accent)",
    botFontColor: "var(--color-white)",
    userBubbleColor: "var(--color-white)",
    userFontColor: "var(--color-black)",
  };
  const steps = [
    {
      id: "0",
      message: "안녕하세요 저의 기업형 웹 페이지에 방문해주셔서 감사합니다.",
      trigger: "1",
    },
    {
      id: "1",
      message: "무엇을 도와드릴까요?",
      trigger: "2",
    },
    {
      id: "2",
      options: [
        { value: "안내", label: "소모품/수리비 안내", trigger: "3" },
        { value: "찾기", label: "센터찾기", trigger: "4" },
      ],
    },
    {
      id: "3",
      message: `소모품/수리비 안내를 선택하셨습니다.`,
      trigger: "5",
    },
    {
      id: "4",
      message: "센터찾기를 선택하셨습니다.",
      trigger: "6",
    },
    {
      id: "5",
      message: "제품을 선택하세요.",
      trigger: "7",
    },
    {
      id: "7",
      options: [
        { value: "모바일", label: "모바일", trigger: "9" },
        { value: "TV", label: "TV", trigger: "11" },
        { value: "노트북", label: "노트북", trigger: "13" },
      ],
    },
    {
      id: "6",
      message: "원하시는 센터 찾기 방법을 선택해주세요!.",
      trigger: "8",
    },
    {
      id: "8",
      options: [
        { value: "지역명", label: "지역명으로 찾기", trigger: "10" },
        { value: "지하철역", label: "지하철역으로 찾기", trigger: "12" },
        { value: "센터명", label: "센터명으로 찾기", trigger: "14" },
      ],
    },
    {
      id: "9",
      message: "모바일 제품의 예상 수리비를 안내해드릴게요.",
      end: true,
    },
    {
      id: "11",
      message: "TV 제품의 예상 수리비를 안내해드릴게요.",
      end: true,
    },
    {
      id: "13",
      message: "노트북 제품의 예상 수리비를 안내해드릴게요.",
      end: true,
    },
    {
      id: "10",
      message: "지역명 찾기 방법으로 센터를 안내해드릴게요.",
      end: true,
    },
    {
      id: "12",
      message: "지하철명 찾기 방법으로 센터를 안내해드릴게요.",
      end: true,
    },
    {
      id: "14",
      message: "센터명 찾기 방법으로 센터를 안내해드릴게요.",
      end: true,
    },
  ];

  return (
    <div className={styles.container}>
      <button
        className={styles.closeBtn}
        onClick={() => {
          handleClick(false);
        }}
      >
        <MdClose />
      </button>
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="삼성전자서비스 챗봇"
          placeholder={"채팅이 불가능한 채널입니다."}
          steps={steps}
          className={styles.bot}
          recognitionEnable={true}
          width="400px"
          botAvatar="https://res.cloudinary.com/dew8mkvyz/image/upload/v1699336797/mxo2gd6fbjexsugjodip.png"
        />
      </ThemeProvider>
    </div>
  );
}
