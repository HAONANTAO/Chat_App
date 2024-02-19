import React from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
const Messages = () => {
  const [messages, loading] = useGetMessages();
  console.log(messages);
  return (
    <div className="flex-1 px-4 overflow-auto">
      <Message></Message>
      <Message></Message>
      <Message></Message>
    </div>
  );
};

export default Messages;
