import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { ChatList } from "../components/massage/ChatList";
import { Chats } from '../components/massage/Chats'
import { Home } from "./pages/homepage";
import { ERR } from "./pages/error";

const initialChats = [
  {
    id: "chat one",
    name: "Chat One",
  },
  {
    id: "chat two",
    name: "Chat Two",
  },
];

const initialMessages = initialChats.reduce((acc, chat) => {
  acc[chat.id] = [];
  return acc;
}, {});

export const Router = () => {
  const [chats, setChats] = useState(initialChats);
  const [messages, setMessages] = useState(initialMessages);

  const handleAddMessage = (newMessage, chatId) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [chatId]: [...prevMessages[chatId], newMessage],
    }));
  };

  return (
    <BrowserRouter>
      <ul>
        <li>
          <NavLink style={(isActive) => ({ color: isActive ? "green" : "blue" })}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={(isActive) => ({ color: isActive ? "green" : "blue" })}
            to="/chats"
          >
            Chats
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Chats" element={<ChatList chats={chats} />}>
          <Route path=":chatId" element={<Chats messages={messages} onAddMessage={handleAddMessage} />} />
        </Route>
        <Route path="*" element={<ERR />} />
      </Routes>
    </BrowserRouter>
  );
};