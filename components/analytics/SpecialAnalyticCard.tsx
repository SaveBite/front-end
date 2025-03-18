"use client";
import Image from "next/image";
import React, { useState } from "react";
interface Props {
  attributeName: string;
  rateObject: Record<string, string>;
  rateChangeObject: Record<string, number>;
  attributeImage: string;
  color: string;
}
export const SpecialAnalyticCard = ({
  attributeName,
  rateObject,
  rateChangeObject,
  attributeImage,
  color,
}: Props) => {
  const itemsArray: string[] = [];
  for (const key in rateObject) {
    itemsArray.push(key);
  }
  const [item, setItem] = useState(itemsArray[0] ?? "no items yet");

  function handleOnChange(e: string) {
    setItem(e);
  }

  return (
    <div className="h-[120px] bg-white rounded-lg shadow-sm py-[14px] px-[16px] relative ">
      <div className={`relative h-[80%] px-6 flex flex-col gap-1 `}>
        <div
          className="absolute left-0 top-0 w-[8px] h-[85%]"
          style={{ backgroundColor: color }}
        ></div>
        <span className="title1">{attributeName}</span>
        <span className="h5bold">{parseFloat(rateObject[item])}</span>
      </div>
      <span className="h-[20%] flex items-center gap-[4px]">
        {rateChangeObject[item] > 0 ? (
          <Image
            src="/analytics/redArrow.png"
            alt="arrow"
            width={20}
            height={20}
          />
        ) : (
          <Image
            src="/analytics/greenArrow.png"
            alt="arrow"
            width={20}
            height={20}
          />
        )}
        <span
          className={
            rateChangeObject[item] > 0
              ? "text-green-400"
              : rateChangeObject[item] < 0
              ? "text-error-400"
              : "text-gray-500"
          }
        >
          {rateChangeObject[item] * 100}%
        </span>
        <span className="body text-black-300">since last month</span>
      </span>
      <Image
        src={`/analytics/${attributeImage}`}
        alt="icon"
        className="absolute right-4 bottom-4"
        width={50}
        height={50}
      />
      <div className="absolute top-2 right-2">
        <select
          onChange={(e) => handleOnChange(e.target.value)}
          className="w-[200px] text-[15px] text-gray-500"
        >
          {itemsArray.map((element, index) => (
            <option key={index} value={element}>
              {element}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
