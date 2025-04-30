"use client";
import React, { useState } from "react";
import { MessagesType } from "./ChatBot";
import { Heart } from "lucide-react";
import { toggleFavourite } from "@/actions/chatbotQueries";

const Message = ({ msg }: { msg: MessagesType }) => {
  const { id, message, created_at, favourite, me } = msg;
  const handleOnToggle = async () => {
    const res = await toggleFavourite(id);
  };
  let readable: string = "";
  if (!me) {
    try {
      const parsed = JSON.parse(message);

      readable =
        `🍕 ${parsed.title}\n` +
        `⏱️ Prep Time: ${parsed.prep_time}\n\n` +
        `🧂 Ingredients:\n` +
        parsed.ingredients.map((i: string) => `- 📝 ${i}`).join("\n") +
        "\n\n" +
        `👨‍🍳 Instructions:\n` +
        parsed.instructions
          .map((s: string, i: number) => `${i + 1}. 🔹 ${s}`)
          .join("\n");
    } catch {
      readable = message;
    }
  }
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
        <pre className="max-w-[600px] break-words whitespace-pre-wrap">
          {readable ? readable : message}
        </pre>
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
