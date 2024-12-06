import Otp from "@/components/Otp";
import { encodeEmail } from "@/lib/utils";
import React from "react";

const page = ({ params }: { params: { email: string } }) => {
  const email = decodeURIComponent(params.email);
  const codedEmail = encodeEmail(email);

  return (
    <div>
      <div>
        <p className="text-black-900 text-[40px] font-[600]  text-center pb-[40px]">
          Verification!
        </p>
        <p className="text-black-300 font-[400] title1 text-center pb-[40px] mb-auto">
          Enter the code sent to {codedEmail}
        </p>
      </div>

      <Otp />
    </div>
  );
};

export default page;
