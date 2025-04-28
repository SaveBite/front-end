import { getfavourites, storedMessages } from "@/actions/chatbotQueries";
import ChatBot from "@/components/chatbite/ChatBot";
import React from "react";

const Page = async () => {
  const storedMessagesRes = await storedMessages();
  const favouriteMessagesRes = await getfavourites();

  return (
    <div className=" mx-auto py-[20px] w-[90%]">
      <div className="mx-auto">
        <span className="h3medium">Chatbite</span>
      </div>
      <ChatBot
        favourites={favouriteMessagesRes.data ?? []}
        messages={storedMessagesRes.data ?? []}
      />
    </div>
  );
};

export default Page;
