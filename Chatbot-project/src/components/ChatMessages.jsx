import {  useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";



export function ChatMessages({ chatMessages }) {
  const chatMessageRef = useRef(null);

  useEffect(() => {
    if (chatMessageRef.current) {
      chatMessageRef.current.scrollTop =
        chatMessageRef.current.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-message-container" ref={chatMessageRef}>
      {chatMessages.map((msg) => (
        <ChatMessage
          key={msg.id}
          message={msg.message}
          sender={msg.sender}
        />
      ))}
    </div>
  );
}