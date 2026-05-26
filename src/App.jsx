import React, { useState } from "react";
import "./App.css";

export default function App() {


  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);


  const sendMessage = () => {
    if (message.trim() === "") return;

    setMessages([...messages, message]); 
    setMessage(""); 
  };

  return (
    <div className="app">

      <h1> Mini Chat App</h1>

      <div className="chat-container">

       
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div className="message" key={index}>
              {msg}
            </div>
          ))}
        </div>

        <div className="input-area">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button onClick={sendMessage}>
            Send Message
          </button>
        </div>

      </div>

    </div>
  );
}