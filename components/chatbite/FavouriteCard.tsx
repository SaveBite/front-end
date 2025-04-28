import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { MessagesType } from "./ChatBot";

const FavouriteCard = ({ item }: { item: MessagesType }) => {
  const { created_at, favourite, id, me, message } = item ?? {};
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="max-w-full h-[70px] bg-white border-[2px] border-solid border-black-100 rounded-xl  p-2">
          <h2 className="truncate ">{message}</h2>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="p-3 max-w-full break-words">
        {message}
      </HoverCardContent>
    </HoverCard>
  );
};

export default FavouriteCard;
