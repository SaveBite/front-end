import { Item } from "@/types";
import ItemCell from "./ItemCell";
import EmptyItemCell from "./EmptyItemCell";

interface Props {
  data: Item[];
}

function TableContent({ data }: Props) {
  return (
    <div className="flex flex-col gap-1 w-[100%] mx-auto h-[400px] overflow-auto hide-scrollbar">
      {data.length > 0 ? (
        data.map((item) => <ItemCell item={item} key={Math.random()} />)
      ) : (
        <EmptyItemCell />
      )}
    </div>
  );
}

export default TableContent;
