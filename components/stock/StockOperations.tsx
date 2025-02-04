import React from "react";
import { Input } from "../ui/input";
import Calender from "./Calender";
import { Button } from "../ui/button";
import Image from "next/image";

const StockOperations = () => {
  return (
    <div className="w-[90%] flex justify-between items-center mx-auto my-[30px] ">
      <div className="flex justify-between items-center gap-2">
        <Input
          className="w-[350px]"
          placeholder="Search Product Name or Category"
        />
        <Calender />
      </div>
      <div className="flex justify-between items-center gap-2">
        <Button className="flex gap-2 text-black-400 bg-white border-[1px] border-extra-gray-border hover:bg-white">
          <Image
            src="/dashboard/copy.svg"
            alt="copy.svg"
            width={20}
            height={20}
          />
          <span>Print</span>
        </Button>
        <Button className="flex gap-2 text-black-400 bg-white border-[1px] border-extra-gray-border hover:bg-white">
          <Image
            src="/dashboard/print.svg"
            alt="print.svg"
            width={20}
            height={20}
          />
          <span>Copy</span>
        </Button>
        <Button className="flex gap-2 text-white bg-primary-500 border-[1px]  hover:bg-white hover:text-primary-500">
          <Image src="/stock/export.svg" alt="add.svg" width={20} height={20} />
          <span>Export</span>
        </Button>
      </div>
    </div>
  );
};

export default StockOperations;
