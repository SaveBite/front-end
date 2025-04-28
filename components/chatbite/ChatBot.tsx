"use client";
import Image from "next/image";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import QuestionCard from "./QuestionCard";
import { storeMessage } from "@/actions/chatbotQueries";
import Message from "./Message";
import FavouriteCard from "./FavouriteCard";
export type QuestionType = { msg: string; image: string };
export type MessagesType = {
  created_at: string;
  favourite: boolean;
  id: number;
  me: boolean;
  message: string;
};
const questions: QuestionType[] = [
  {
    msg: "What can I cook with rice, chicken, and carrots?",
    image: "book.png",
  },
  {
    msg: "Suggest a quick dinner recipe under 20 minutes.",
    image: "clock.png",
  },
  {
    msg: "How can I store leftover pasta to keep it fresh?",
    image: "guard.png",
  },
];
const ChatBot = ({
  messages,
  favourites,
}: {
  messages: MessagesType[];
  favourites: MessagesType[];
}) => {
  const [chatMessage, setChatMessage] = useState<string>("");
  const ulRef = useRef<HTMLUListElement | null>(null);

  const scrollToBottom = () => {
    if (ulRef.current) {
      ulRef.current.scrollTop = ulRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { created_at, favourite, id, me, message } = await storeMessage(
      chatMessage,
      "0"
    );
    setChatMessage("");
    const {
      created_at: secCreatedAt,
      favourite: secFavlurite,
      id: secId,
      me: secMe,
      message: secMessage,
    } = await storeMessage(message, "1");
  };
  return (
    <div className="w-full h-[calc(100vh-160px)] border-4 border-solid border-black-100 rounded-2xl flex flex-row   gap-2  p-[20px]">
      <div
        className={`${
          favourites.length
            ? "w-[80%] border-r-[2px] border-solid border-bleack-100"
            : "w-full"
        }  px-12  flex  flex-col gap-12 jus`}
      >
        <div>
          {messages.length > 0 ? (
            <div className="">
              <ul
                className="max-h-[550px] overflow-y-scroll scrollbar-hide space-y-2"
                ref={ulRef}
              >
                {messages.map((msg, i) => (
                  <Message msg={msg} key={i} />
                ))}
              </ul>
            </div>
          ) : (
            <div className="flex flex-col gap-4 items-center justify-center py-[20px] basis-[800px]">
              <Image
                src="/chatbite/chief.png"
                alt="chief.png"
                width={60}
                height={60}
              />
              <h3 className="h5bold">Hi, there👋</h3>
              <span className="h5 text-black-300">
                Here to help you with ideas, advice and more! What would you
                like to cook today?
              </span>
              <div className="flex flex-col lg:flex-row gap-3">
                {questions.map((item, i) => (
                  <QuestionCard
                    key={i}
                    item={item}
                    changeMessage={setChatMessage}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ////// */}
        <div className="mt-auto mb-[40px] mx-auto w-[90%] h-[80px] flex flex-col items-center gap-4 ">
          <form
            className="w-full h-full bg-white flex justify-between border border-solid border-[#e4e4e4] py-[20px] rounded-lg"
            onSubmit={handleOnSubmit}
          >
            <input
              className="h-full w-[90%] outline-none px-3 py-2 "
              type="text"
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
            />
            <button className="px-3" disabled={!chatMessage}>
              {chatMessage ? (
                <Image
                  src="/chatbite/activeButton.png"
                  alt="/chatbite/activeButton.png"
                  width={30}
                  height={30}
                />
              ) : (
                <Image
                  src="/chatbite/disabledButton.png"
                  alt="/chatbite/disabledButton.png"
                  width={30}
                  height={30}
                />
              )}
            </button>
          </form>
          <span>
            Not sure What to cook ?{" "}
            <span className="font-bold">let chatbite help</span>
          </span>
        </div>
      </div>
      {favourites.length ? (
        <div className="flex-1 overflow-y-scroll scrollbar-hide">
          <h2 className="title2medium py-4 px-3 border-b-2 border-solid border-black-100">
            Favourites
          </h2>

          <div className="mt-4 flex flex-col gap-2">
            {favourites.map((item, i) => (
              <FavouriteCard item={item} key={i} />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ChatBot;
