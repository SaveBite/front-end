"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  name: string;
  list: string[];
  itemCheckAction: () => void;
}
const DrobDownList = ({ name, list, itemCheckAction }: Props) => {
  const [drop, setDrop] = useState(false);
  function handleDropDown() {
    setDrop(!drop);
  }
  return (
    <div className="mb-[30px]">
      <div
        className="px-[12px] py-[10px] flex justify-between items-center h-[50px] cursor-pointer bg-extra-box-gray"
        onClick={handleDropDown}
      >
        <p className="title1medium">{name}</p>
        <Image
          src={drop ? `/stock/arrow-down.svg` : `/stock/arrow-up.svg`}
          alt="arrow"
          width={30}
          height={30}
        />
      </div>
      <div
        className={`bg-extra-box-gray px-[12px] py-[10px] transition-all overflow-hidden duration-500 ease-in-out ${
          drop ? "max-h-[100%] opacity-100" : "max-h-0 opacity-0"
        } `}
      >
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </div>
    </div>
  );
};

export default DrobDownList;
