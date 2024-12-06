"use client";
import { useState } from "react";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";
import CustomOtpButton from "./CustomOtpButton";

const Otp = () => {
  const [otpCode, setOtpCode] = useState("");
  function handleOnChange(v: string) {
    if (v.length < 4) return;
    if (v.length === 4) setOtpCode(v);
  }
  return (
    <div>
      <div className="w-fit mx-auto">
        <InputOTP maxLength={6} onChange={(e) => handleOnChange(e)}>
          <InputOTPGroup>
            <InputOTPSlot
              index={0}
              className="sm:p-4 md:p-8 lg:p-12 border-primary-500 focus:ring-0 mr-[10px]"
            />
            <InputOTPSlot
              index={1}
              className="sm:p-4 md:p-8 lg:p-12 border-primary-500 border-l-2 focus:ring-0 mr-[10px]"
            />
            <InputOTPSlot
              index={2}
              className="sm:p-4 md:p-8 lg:p-12 border-primary-500 border-l-2 focus:ring-0 mr-[10px]"
            />
            <InputOTPSlot
              index={3}
              className="sm:p-4 md:p-8 lg:p-12 border-primary-500 border-l-2 focus:ring-0 mr-[10px]"
            />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <div className="pt-[40px]">
        <CustomOtpButton otpValue={otpCode}>Verify</CustomOtpButton>

        <div className="flex flex-col gap-[8px] text-center mt-[80px]">
          <p>Did&apos;nt get the code ? </p>
          <button
            className="text-error-500"
            onClick={() => console.log("hello world")}
          >
            click to resend
          </button>
        </div>
      </div>
    </div>
  );
};

export default Otp;
