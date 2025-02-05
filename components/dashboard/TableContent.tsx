import { Item } from "@/types";
import ItemCell from "./ItemCell";

interface Props {
  data: Item[];
}

function TableContent({ data }: Props) {
  return (
    <div className="flex flex-col gap-1 w-[100%] mx-auto h-[400px] overflow-auto hide-scrollbar">
      {data?.map((item) => (
        <ItemCell item={item} key={Math.random()} />
      ))}
    </div>
  );
}

export default TableContent;
