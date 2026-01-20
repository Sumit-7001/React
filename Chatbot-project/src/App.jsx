import { useState } from "react";

import "./App.css";
import{ChatInput} from './components/ChatInput'
import{ChatMessages} from './components/ChatMessages'

 function App() {
  const [chatMessages, setMessages] = useState([
    {
      message: "Hello Chatbot",
      sender: "/user.png",
      id: 1,
    },
    {
      message: "Hello! How can I help you?",
      sender: "/robot.png",
      id: 2,
    },
    {
      message: "Flip a coin",
      sender: "/user.png",
      id: 3,
    },
    {
      message: "Sure! You got heads",
      sender: "/robot.png",
      id: 4,
    },
  ]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput chatMessages={chatMessages} setMessages={setMessages} />
    </div>
  );
}

export default App;
