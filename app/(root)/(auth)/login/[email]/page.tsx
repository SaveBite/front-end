import UserNotFound from "@/components/UserNotFound";
import VerifyFormSelector from "@/components/VerifyFormSelector";
import Image from "next/image";
import React from "react";

const page = ({ params }: { params: { email: string } }) => {
  const email = decodeURIComponent(params.email);

  return (
    <div className="h-full w-full sm:w-1/2 font-[600] relative">
      <div className="w-[280px] md:w-[300px] lg:w-[500px] absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="block mb-[10px] sm:hidden">
          <Image
            src="/SaveBite.svg"
            alt="SaveBite"
            width={329}
            height={126}
            className="object-fill"
          />
        </div>

        <VerifyFormSelector email={email} />
      </div>
      <div className="absolute right-[8px] bottom-[10px]">
        <UserNotFound />
      </div>
    </div>
  );
};

export default page;
