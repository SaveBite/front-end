"use client";
import { useNoUser } from "@/contexts/NoUserContext";
import Image from "next/image";
import React from "react";

const UserNotFound = () => {
  // normal ui flag/set flag from a context to show the message if the user is not found
  const { visible, setVisible } = useNoUser()!;
  return (
    <>
      {visible && (
        <div className="animate-bounce border-solid border-l-[8px] border-l-error-50 shadow-md px-[8px] py-[10px]">
          <div className="flex justify-between  w-[300px]">
            <div className="flex gap-2 w-fit  ">
              <p className="p-[5px] rounded-full bg-error-50 w-fit h-fit">
                <Image
                  src="/notFound.svg"
                  alt="not found"
                  width={12}
                  height={12}
                />
              </p>
              <span>the user cannot be found</span>
            </div>
            <button
              onClick={() => {
                setVisible(false);
              }}
            >
              <Image src="/x.svg" alt="not found" width={12} height={12} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserNotFound;
