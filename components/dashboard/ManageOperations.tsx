"use client";
import { Input } from "@/components/ui/input";
import ListSelect from "./ListSelect";
import { Button } from "../ui/button";
import Image from "next/image";

function ManageOperations() {
  return (
    <div className="w-[90%] m-auto py-[30px] flex justify-between">
      <div className="flex gap-2">
        <Input
          className="w-[500px] rounded-lg"
          placeholder="Search Product Name"
          onChange={(e) => console.log(e.target.value)}
        />
        <ListSelect />
      </div>
      <div className="flex gap-2">
        <Button className="flex gap-2 text-black-400 bg-white border-[1px] border-extra-gray-border hover:bg-white">
          <Image
            src="/dashboard/copy.svg"
            alt="copy.svg"
            width={20}
            height={20}
          />
          <span>Copy</span>
        </Button>
        <Button className="flex gap-2 text-black-400 bg-white border-[1px] border-extra-gray-border hover:bg-white">
          <Image
            src="/dashboard/print.svg"
            alt="print.svg"
            width={20}
            height={20}
          />
          <span>Print</span>
        </Button>
        <Button className="flex gap-2 text-primary-500 bg-white border-[1px] border-primary-500 hover:bg-white">
          <Image
            src="/dashboard/add.svg"
            alt="add.svg"
            width={20}
            height={20}
          />
          <span>Add item</span>
        </Button>
      </div>
    </div>
  );
}

export default ManageOperations;
