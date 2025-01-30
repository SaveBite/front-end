"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Header = () => {
  function handleOnClick() {
    console.log("hello world");
  }
  return (
    <div className="flex justify-between w-[90%] m-auto py-[20px]">
      <p className="h3medium">Products</p>
      <Button className="rounded-none" onClick={() => handleOnClick()}>
        <Image
          src="/dashboard/download.svg"
          alt="download.svg"
          width={20}
          height={20}
        />
        Import
      </Button>
    </div>
  );
};

export default Header;
