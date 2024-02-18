import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../hooks/useGetConversations.js";
const Conversations = () => {
  const [loading, conversations] = useGetConversations();
  console.log(conversations);
  return (
    <div className="flex flex-col py-2 overflow-auto">
      {/* 遍历messages */}
      {conversations.map((c) => {
        return <Conversation key={c._id} conversations={c} emoji={}></Conversation>;
      })}
      {loading ? (
        <span className="mx-auto loading loading-spinner"></span>
      ) : (
        <span>null</span>
      )}
    </div>
  );
};

export default Conversations;
