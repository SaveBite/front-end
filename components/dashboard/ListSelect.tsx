"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function ListSelect() {
  return (
    <Select defaultValue="all" onValueChange={(e) => console.log(e)}>
      <SelectTrigger className="w-[180px] focus:ring-0 focus:ring-offset-0">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem className="focus:bg-blue-500 focus:text-white" value="all">
          All
        </SelectItem>
        <SelectItem
          className="focus:bg-blue-500 focus:text-white"
          value="Positive"
        >
          Positive stock
        </SelectItem>
        <SelectItem
          className="focus:bg-blue-500 focus:text-white"
          value="negative"
        >
          Negative stock
        </SelectItem>
        <SelectItem className="focus:bg-blue-500 focus:text-white" value="bar">
          Below Bar
        </SelectItem>
        <SelectItem
          className="focus:bg-blue-500 focus:text-white"
          value="minimum"
        >
          Below Minimum
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

export default ListSelect;
