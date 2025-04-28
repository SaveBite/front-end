"use client";
import React, { useState } from "react";
import { MessagesType } from "./ChatBot";
import { Heart } from "lucide-react";
import { toggleFavourite } from "@/actions/chatbotQueries";

const Message = ({ msg }: { msg: MessagesType }) => {
  const { id, message, created_at, favourite, me } = msg;
  const handleOnToggle = async () => {
    const res = await toggleFavourite(id);
    console.log(res);
  };
  return (
    <li
      className={`flex items-start ${
        me ? "flex-row-reverse" : "justify-start"
      } gap-3`}
    >
      <img
        src={me ? "/layout/amrdiab.png" : "/chatbite/chief.png"}
        alt="chatImage"
        className="rounded-full w-[50px] h-[50px]"
      />
      <div
        className={`p-4 ${
          me ? "bg-white" : "bg-primary-50"
        } flex items-start gap-3 shadow-md `}
      >
        {message}
        {!me && (
          <Heart
            width={20}
            height={20}
            className={`${
              favourite && "text-red-500 fill-red-500"
            } cursor-pointer`}
            onClick={handleOnToggle}
          />
        )}
      </div>
    </li>
  );
};

export default Message;
