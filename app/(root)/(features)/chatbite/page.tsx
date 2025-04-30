import { getfavourites, storedMessages } from "@/actions/chatbotQueries";
import ChatBot from "@/components/chatbite/ChatBot";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import React from "react";

const Page = async () => {
  const storedMessagesRes = await storedMessages();
  const favouriteMessagesRes = await getfavourites();

  return (
    <div className=" mx-auto py-[20px] w-[90%]">
      <ChatBot
        favourites={favouriteMessagesRes.data ?? []}
        messages={storedMessagesRes.data ?? []}
      />
    </div>
  );
};

export default Page;
