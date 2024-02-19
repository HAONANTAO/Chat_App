import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import useConversation from "../zustand/useConversation";
import useGetConversations from "../hooks/useGetConversations";
import { toast } from "react-hot-toast";
const SearchInput = () => {
  const { setSelectedConversation } = useConversation();
  const [, conversations] = useGetConversations();

  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 2) {
      return toast.error("Search term mush be at least 2 characters long");
    }
    console.log(conversations);
    const conversation = conversations.find(
      (c) =>
        c.fullname && c.fullname.toLowerCase().includes(search.toLowerCase()),
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="rounded-full input input-bordered"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="text-white btn btn-circle bg-sky-500">
        <IoSearchOutline className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
