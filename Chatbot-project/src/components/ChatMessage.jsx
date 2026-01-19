 export function ChatMessage({ message, sender }) {
  return (
    <div
      className={
        sender === "/user.png"
          ? "chat-message-user"
          : "chat-message-robot"
      }
    >
      {sender === "/robot.png" && <img src={sender} width="40" />}
      <div className="chat-message-text">{message}</div>
      {sender === "/user.png" && <img src={sender} width="40" />}
    </div>
  );
}