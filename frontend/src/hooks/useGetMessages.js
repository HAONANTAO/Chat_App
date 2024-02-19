import React, { useEffect } from "react";
import { useState } from "react";
import useConversation from "../zustand/useConversation";
import { toast } from "react-hot-toast";
const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages, selectedConversation] = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`);
        const data = res.json();
        if (data.error) {
          throw new Error(data.error);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    //有选择才进行get，一改变就运行
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return [messages, loading];
};

export default useGetMessages;
