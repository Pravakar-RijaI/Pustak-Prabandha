import React, { useState } from "react";
import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const ChatbotComponent = () => {
  const [showChat, setShowChat] = useState(false); // Initially hidden

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
      <button 
        onClick={() => setShowChat(!showChat)}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "10px 15px",
          borderRadius: "5px",
          cursor: "pointer",
          position: "fixed",
          bottom: "20px",
          right: "20px",
        }}
      >
        {showChat ? "Close Chat" : "Chat with Us"}
      </button>

      {showChat && (
        <div style={{
          position: "fixed", bottom: "70px", right: "20px",
          width: "300px", height: "400px", backgroundColor: "white",
          borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
        }}>
          <Chatbot 
            config={config} 
            messageParser={MessageParser} 
            actionProvider={ActionProvider} 
          />
        </div>
      )}
    </div>
  );
};

export default ChatbotComponent;
