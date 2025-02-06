import Image from "next/image";
import React from "react";

const Calender = () => {
  return (
    <div className="flex py-[8px] px-[12px] bg-white border-[1px] border-extra-gray-border rounded-lg gap-2">
      <Image
        src="/stock/calender.svg"
        alt="caleder.svg"
        width={20}
        height={20}
      />
      <span className="title2medium text-black-400">7 Feb - 14 Feb</span>
    </div>
  );
};

export default Calender;
