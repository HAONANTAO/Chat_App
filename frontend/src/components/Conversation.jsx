import React from "react";
import useConversation from "../zustand/useConversation";
const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  //查看是不是被选中
  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div
        className={`flex items-center gap-2 p-2 py-1 rounded cursor-pointer hover:bg-sky-500 
        ${isSelected ? "bg-sky-500" : ""}`}>
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-3">
            <p className="font-bold text-gray-200">{conversation.fullname}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="h-1 py-0 my-0 divider"></div>}
    </>
  );
};

export default Conversation;
