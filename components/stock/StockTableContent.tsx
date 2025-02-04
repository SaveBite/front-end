"use client";
import { Item } from "@/types";
import StockItemCell from "./StockItemCell";

interface Props {
  data: Item[];
}

function StockTableContent({ data }: Props) {
  console.log(" i do not whow ehere i am");
  return (
    <div className="flex flex-col gap-1 w-[100%] mx-auto">
      {data.map((item) => (
        <StockItemCell item={item} key={item.productName} />
      ))}
    </div>
  );
}

export default StockTableContent;
