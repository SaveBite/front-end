"use client";
import UserNotFound from "@/components/UserNotFound";
import VerifyFormSelector from "@/components/VerifyFormSelector";
import { useVerifyOTP } from "@/contexts/VerifyOTPContext";
import React from "react";

const Page = ({ params }: { params: { email: string } }) => {
  const email = decodeURIComponent(params.email);
  // we gat all the needed data from its context
  const { OTPVerified, setOTPVerified, otpCode, setOTPCode, error, setError } =
    useVerifyOTP()!;

  // otp handler
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
          email={email} //i need this to show the email as encoded email a*****@gmail.com
          OTPVerified={OTPVerified} //i need this flag to switch between writing otp code and verification
          error={error} // normal error flag that i make the otp fields red
          setOTPCode={setOTPCode} // change the value of the otp
          handleOTP={handleOTP} // this is the action on click button under the otp code
        />
      </div>
      <div className="absolute right-[8px] bottom-[10px]">
        {/* not sure why i need this but let it right now anyways  */}
        <UserNotFound />
      </div>
    </div>
  );
};

export default Page;
