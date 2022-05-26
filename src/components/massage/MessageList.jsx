import { Persons } from "../tools/persons";

export const MessageList = ({ messages }) => (
  <div>
    {messages.map(({ text, author, id }) => (
      <div
        key={id}
        className={author === Persons.Human ? 'msg-human' : 'msg-bot'}
      >
        {author}: {text}
      </div>
    ))}
  </div>
);
