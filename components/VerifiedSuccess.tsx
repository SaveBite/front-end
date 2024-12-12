import { useVerifyOTP } from "@/contexts/VerifyOTPContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  email: string;
}
const VerifiedSuccess = ({ email }: Props) => {
  const { setOTPVerified } = useVerifyOTP()!;
  function handleOnCLick() {
    setOTPVerified(false);
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
        <span className="text-[48px] font-[600]">Check your email</span>

        <div className="mt-[20px] w-[400px] text-center text-[19px] font-[500]">
          <span className="text-black-400">
            We have sent an email to{" "}
            <span className="text-black-900">{email}</span> with your image, So
            please Check it now.{" "}
          </span>
          <button className="mt-[10px]" onClick={handleOnCLick}>
            <Link
              href="/login"
              className="text-primary-500 relative after:content-[''] after:w-full after:h-[1px] after:bg-primary-500 after:absolute after:left-0 after:bottom-[3px]"
            >
              back to login
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifiedSuccess;
