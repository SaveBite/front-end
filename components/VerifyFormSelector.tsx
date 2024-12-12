"use client";
import { encodeEmail } from "@/lib/utils";
import React from "react";
import Otp from "./Otp";
import { useVerifyOTP } from "@/contexts/VerifyOTPContext";
import VerifiedSuccess from "./VerifiedSuccess";
interface Props {
  email: string;
}
const VerifyFormSelector = ({ email }: Props) => {
  const codedEmail = encodeEmail(email);
  const { OTPVerified, setOTPVerified } = useVerifyOTP()!;

  return (
    <div>
      {OTPVerified === false ? (
        <div>
          <div>
            <div>
              <p className="text-black-900 text-[40px] font-[600]  text-center pb-[40px]">
                Verification!
              </p>
              <p className="text-black-300 font-[400] title1 text-center pb-[40px] mb-auto">
                Enter the code sent to {codedEmail}
              </p>
            </div>

            <Otp setOTPVerified={setOTPVerified} />
          </div>
        </div>
      ) : (
        <VerifiedSuccess email={email} />
      )}
    </div>
  );
};

export default VerifyFormSelector;
