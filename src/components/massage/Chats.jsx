import React, { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { Form } from "../massage/Form";
import { MessageList } from "../massage/MessageList";
import { Persons } from "../tools/persons";

export const Chats = ({ messages, onAddMessage }) => {
  const { chatId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (text) => {
    const newMessage = { text, author: Persons.Human, id: `msg-${Date.now()}` };
    onAddMessage(newMessage, chatId);
  };

  useEffect(() => {
    let timeout;
    if (
      messages[chatId]?.[messages[chatId].length - 1]?.author === Persons.Human
    ) {
      timeout = setTimeout(() => {
        onAddMessage(
          {
            text: `I'm Bot`,
            author: Persons.Bot,
            id: `msg-${Date.now()}`,
          },
          chatId
        );
      }, 1500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [messages]);

  if (!messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <>
      <h3>HEADER</h3>
      <div className="chat-wrap">
        <div className="App">
          <Form onSubmit={handleSubmit} />
          <MessageList messages={messages[chatId]} />
        </div>
      </div>
    </>
  );
}
