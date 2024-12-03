"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";

const UploadInput = ({ id }: { id: string }) => {
  const fileInputRef = useRef<HTMLInputElement>(null)!;
  const [fileInfo, setFileInfo] = useState("");

  function handleOnChange() {
    const file = fileInputRef?.current?.files?.[0]?.name;
    if (file) setFileInfo(file);
  }
  return (
    <label htmlFor={id} className="relative cursor-pointer">
      <div className="p-4 border-[1px] text-black-200 rounded-sm  w-[300px] lg:w-[500px] flex justify-between">
        <div>
          <button className="p-2 bg-black-100 px-[13px] py-[12px] pointer-events-none outline-none border-black-600 border-[1px] text-black-600  ">
            Choose file
          </button>
          <span className="pl-2">
            {fileInfo ? (
              <span className="text-black-200">no file choosen</span>
            ) : (
              <span className="bg-black-800">{fileInfo}</span>
            )}
          </span>
        </div>
        <Image src="/upload.svg" alt="upload" width={32} height={32} />
      </div>
      <input
        ref={fileInputRef}
        type="file"
        name="inputImg"
        id={id}
        className="outline-none hidden w-full"
        onChange={handleOnChange}
      />
    </label>
  );
};

export default UploadInput;
