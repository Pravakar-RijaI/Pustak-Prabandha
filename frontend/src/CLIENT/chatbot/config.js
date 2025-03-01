import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "Pustak Prabandha Assistant",
  initialMessages: [
    createChatBotMessage("Hello! I am the Pustak Prabandha Assistant. You can ask me about book requests, borrowing rules, return policies, and more."),
  ],
};

export default config;
