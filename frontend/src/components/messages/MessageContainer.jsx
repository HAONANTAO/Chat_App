import React from "react";
import Messages from "./Messages";
const MessageContainer = () => {
  return (
    <div className="md:min-w-[450px] flex flex-col">
      <>
        <div className="px-4 py-2 mb-2 bg-slate-500">
          <span className="LABEL-TEXT">to: </span>
          <span className="font-bold text-gray-900 ">John</span>
        </div>
        <Messages></Messages>
        {/* <MessageInput></MessageInput> */}
      </>
    </div>
  );
};

export default MessageContainer;
