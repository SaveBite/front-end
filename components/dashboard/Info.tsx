"use client";
import Image from "next/image";
import React, { useState } from "react";

const Info = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <div className="bg-primary-50 w-[80%] h-[177px] flex p-[10px] gap-[10px] items-center m-auto">
          <div className="w-[20px] h-full relative">
            <Image fill src="/dashboard/info.svg" alt="info.svg" />
          </div>
          <div className="flex-1">
            <span>
              Easily import your product data to streamline your workflow. Make
              sure the file includes accurate details for each product, such as
              name, category, unit price, stock levels, reorder points, and
              sales figures. This feature allows you to quickly upload
              comprehensive data for efficient tracking of stock and
              performance. Ensure all fields are properly formatted to maintain
              accuracy and consistency.
            </span>
          </div>
          <div
            className="w-[20px] h-full relative cursor-pointer"
            onClick={() => setShow(false)}
          >
            <Image fill src="/x.svg" alt="x.svg" />
          </div>
        </div>
      )}
    </>
  );
};

export default Info;
