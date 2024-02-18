import { create } from "zustand";
const useConversation = create((set) => ({
  selectedConversation: null,
  //like the use hook set function
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));
export default useConversation;
