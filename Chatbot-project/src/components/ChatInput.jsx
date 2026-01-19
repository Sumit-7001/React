import { useState} from "react";
import { Chatbot } from "supersimpledev";


export function ChatInput({ chatMessages, setMessages }) {
  const [inputText, setInputText] = useState("");

  function sendMessage() {
    if (!inputText.trim()) return;

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "/user.png",
        id: crypto.randomUUID(),
      },
    ];

    setMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);

    setTimeout(() => {
      setMessages([
        ...newChatMessages,
        {
          message: response,
          sender: "/robot.png",
          id: crypto.randomUUID(),
        },
      ]);
    }, 500);

    setInputText("");
  }

  return (
    <div className="input-container">
      <input
        placeholder="Send a message to Chatbot"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}

