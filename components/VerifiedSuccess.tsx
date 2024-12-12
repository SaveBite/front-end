"use client";
import { useVerifyOTP } from "@/contexts/VerifyOTPContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  email: string;
}
const VerifiedSuccess = ({ email }: Props) => {
  const router = useRouter();
  const { setOTPVerified } = useVerifyOTP()!;
  function handleOnCLick() {
    router.push("/login");
    setTimeout(() => setOTPVerified(false), 1000);
  }
  return (
    <div className="absolute -top-72 w-full">
      <div className="w-fit mx-auto">
        <Image
          src="/verified.svg"
          alt="verified"
          width={95}
          height={99}
          className="mx-auto"
        />
        <p className="text-[28px] lg:text-[48px] font-[600] text-center">
          Check your email
        </p>

        <div className="mt-[20px] w-[300px] lg:w-[400px] text-center text-[19px] font-[500]">
          <span className="text-black-400">
            We have sent an email to{" "}
            <span className="text-black-900">{email}</span> with your image, So
            please Check it now.{" "}
          </span>
          <span className="block"></span>
          <button
            className="mt-[10px] text-primary-500 relative after:content-[''] after:w-full after:h-[1px] after:bg-primary-500 after:absolute after:left-0 after:bottom-[3px]"
            onClick={handleOnCLick}
          >
            back to login
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifiedSuccess;
