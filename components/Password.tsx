"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  id: string;
  error?: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Password = ({ id, error = false, value, setValue }: Props) => {
  const [visibility, setVisibility] = useState("text");
  return (
    <div className="relative">
      <input
        value={value}
        type={visibility}
        className={`px-[12px] py-[26px] border-[1px] ${
          error ? "border-error-500" : "border-black-200"
        } rounded-sm  w-[300px] lg:w-[500px] outline-none caret-primary-500`}
        name={id}
        id={id}
        onChange={(e) => setValue(e.target.value)}
      />
      {error && (
        <span className="text-error-400 font-[400] title2">
          Please Complete this required field.
        </span>
      )}
      <button
        className="absolute right-[10px] top-1/2 -translate-y-1/2"
        onClick={(e) => {
          e.preventDefault();
          if (visibility === "text") setVisibility("password");
          if (visibility === "password") setVisibility("text");
        }}
      >
        <Image
          src="/togglePassword.svg"
          alt="togglePassword"
          width={35}
          height={35}
        />
      </button>
    </div>
  );
};

export default Password;
