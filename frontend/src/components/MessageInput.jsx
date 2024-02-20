import React, { useState, useEffect } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../hooks/useSendMessage";
const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [loading, sendMessage] = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) {
      return;
    }
    await sendMessage(message);

    //clear
    setMessage("");
  };

  return (
    <form className="px-4 my-3 " onSubmit={handleSubmit}>
      <div className="relative w-full">
        <input
          type="text"
          className="block w-full text-sm border rounded-lg p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 flex items-center end-0 pe-3">
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend></BsSend>
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
