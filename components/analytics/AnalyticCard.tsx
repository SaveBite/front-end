import Image from "next/image";
import React from "react";
interface Props {
  attributeName: string;
  rate: string;
  rateChange: number;
  attributeImage: string;
  color: string;
}
export const AnalyticCard = ({
  attributeName,
  rate,
  rateChange,
  attributeImage,
  color,
}: Props) => {
  return (
    <div className=":h-[120px] bg-white rounded-lg shadow-sm py-[14px] px-[16px] relative ">
      <div className={`relative h-[80%] px-6 flex flex-col gap-1 `}>
        <div
          className="absolute left-0 top-0 w-[8px] h-[85%]"
          style={{ backgroundColor: color }}
        ></div>
        <span className="title1">{attributeName}</span>
        <span className="h5bold">
          {attributeName === "Revenue"
            ? `${rate}$`
            : `${parseFloat(rate) * 100}%`}
        </span>
      </div>
      <span className="h-[20%] flex items-center gap-[4px]">
        {rateChange > 0 ? (
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
            rateChange > 0
              ? "text-green-400"
              : rateChange < 0
              ? "text-error-400"
              : "text-gray-500"
          }
        >
          {rateChange * 100}%
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
    </div>
  );
};
