import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import useListenMessages from "../../hooks/useListenMessages";
const Messages = () => {
  const [messages, loading] = useGetMessages();
  const lastMessageRef = useRef();
  useListenMessages();

  //即第一次渲染完成后），将页面滚动到消息列表中的最后一条消息
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behaviour: "smooth" });
    }, 200);
  }, [messages]);
  return (
    <div className="flex-1 px-4 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((m, idx) => {
          return (
            <div key={m._id} ref={lastMessageRef}>
              <Message key={idx} message={m}></Message>
            </div>
          );
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
