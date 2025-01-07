"use client";
import { encodeEmail } from "@/lib/utils";
import React from "react";
import Otp from "./Otp";
import VerifiedSuccess from "./VerifiedSuccess";
interface Props {
  email: string;
  OTPVerified: boolean;
  handleOTP: () => void;
  setOTPCode: React.Dispatch<React.SetStateAction<string>>;
  error: boolean;
}
const VerifyFormSelector = ({
  email,
  OTPVerified,
  handleOTP,
  setOTPCode,
  error,
}: Props) => {
  const codedEmail = encodeEmail(email);

  return (
    // so here i just optional rendering the otp or verification msg based on the OTPVerified flag (we got it fron its context)
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
            {/* so fot the otp code we need three picecs of states the setter of the value , the handler , and the error flag 
            and we pass the three of them through the component tree */}
            <Otp setOTPCode={setOTPCode} handleOTP={handleOTP} error={error} />
          </div>
        </div>
      ) : (
        <VerifiedSuccess email={email} />
      )}
    </div>
  );
};

export default VerifyFormSelector;
