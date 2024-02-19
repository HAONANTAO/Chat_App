import React from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";

const Messages = () => {
  const [messages, loading] = useGetMessages();
  console.log(messages);
  return (
    <div className="flex-1 px-4 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((m, idx) => {
          return <Message key={idx} message={m}></Message>;
        })}
      {loading &&
        [...Array(3)].map((_, idx) => {
          <MessageSkeleton key={idx}></MessageSkeleton>;
        })}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
