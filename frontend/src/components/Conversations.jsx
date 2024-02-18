import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../hooks/useGetConversations.js";
import { getRandomEmoji } from "../utils/emojis.js";
const Conversations = () => {
  const [loading, conversations] = useGetConversations();
  console.log(conversations);
  return (
    <div className="flex flex-col py-2 overflow-auto">
      {/* 遍历messages */}
      {conversations.map((c, idx) => {
        return (
          <Conversation
            key={c._id}
            conversation={c}
            emoji={getRandomEmoji()}
            // last index no divider appear
            lastIdx={idx === conversations.length - 1}></Conversation>
        );
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
