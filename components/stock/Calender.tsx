import Image from "next/image";
import React from "react";

const Calender = () => {
  const now = new Date();
  const options = { day: "2-digit", month: "short" };

  const firstDay = now.toLocaleDateString("en-GB", options);

  now.setDate(now.getDate() + 30);
  const lastDay = now.toLocaleDateString("en-GB", options);
  return (
    <div className="flex gap-2">
      <div className="flex py-[8px] px-[12px] bg-white border-[1px] border-extra-gray-border rounded-lg gap-2">
        <Image
          src="/stock/calender.svg"
          alt="caleder.svg"
          width={20}
          height={20}
        />
        <span className="title2medium text-black-400">Four Weeks</span>
      </div>
      <div className="flex py-[8px] px-[12px] bg-white border-[1px] border-extra-gray-border rounded-lg gap-2">
        <Image
          src="/stock/calender.svg"
          alt="caleder.svg"
          width={20}
          height={20}
        />
        <span className="title2medium text-black-400">
          {firstDay} - {lastDay}
        </span>
      </div>
    </div>
  );
};

export default Calender;
