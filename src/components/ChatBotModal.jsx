import React from "react";
import ChatBot from "react-simple-chatbot";

export default function ChatBotModal() {
  return (
    <div>
      <ChatBot
        steps={[
          {
            id: "hello-world",
            message: "Hello World!",
            end: true,
          },
        ]}
      />
    </div>
  );
}
