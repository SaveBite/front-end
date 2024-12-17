"use client";
import UserNotFound from "@/components/UserNotFound";
import VerifyFormSelector from "@/components/VerifyFormSelector";
import { useVerifyOTP2 } from "@/contexts/VerifyOTPContext2";
import React from "react";

const Page = ({ params }: { params: { email: string } }) => {
  const email = decodeURIComponent(params.email);
  const { OTPVerified, setOTPVerified, otpCode, setOTPCode, error, setError } =
    useVerifyOTP2()!;

  function handleOTP() {
    if (otpCode.length === 4) {
      setOTPVerified(true);
      setError(false);
    } else {
      setError(true);
    }
  }
  return (
    <div className="h-full w-full sm:w-1/2 font-[600] relative">
      <div className="w-[280px] md:w-[300px] lg:w-[500px] absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <VerifyFormSelector
          email={email}
          OTPVerified={OTPVerified}
          error={error}
          setOTPCode={setOTPCode}
          handleOTP={handleOTP}
        />
      </div>
      <div className="absolute right-[8px] bottom-[10px]">
        <UserNotFound />
      </div>
    </div>
  );
};

export default Page;
