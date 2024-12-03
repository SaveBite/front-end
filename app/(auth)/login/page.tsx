import LoginInpLabel from "@/components/LoginInplabel";
import UploadInput from "@/components/UploadInput";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="flex min-h-screen h-screen relative ">
      <div className="h-full w-1/2 bg-extra-gray  relative overflow-hidden hidden sm:flex ">
        <div className="z-10">
          <div className=" bg-[url('/bg-image.svg')] h-[100%] bg-[length:110%] w-[10%] absolute left-[0%] top-[-10%] bg-repet"></div>
          <div className=" bg-[url('/bg-image.svg')] h-[100%] bg-[length:110%] w-[10%] absolute left-[10%] top-[3%] bg-repet "></div>
          <div className=" bg-[url('/bg-image.svg')] h-[100%] bg-[length:110%] w-[10%] absolute left-[20%] top-[-10%] bg-repet"></div>
          <div className=" bg-[url('/bg-image.svg')] h-[100%] bg-[length:110%] w-[10%] absolute left-[30%] top-[3%] bg-repet "></div>
          <div className=" bg-[url('/bg-image.svg')] h-[100%] bg-[length:110%] w-[10%] absolute left-[40%] top-[-10%] bg-repet"></div>
          <div className=" bg-[url('/bg-image.svg')] h-[100%] bg-[length:110%] w-[10%] absolute left-[50%] top-[3%]  bg-repet"></div>
          <div className=" bg-[url('/bg-image.svg')] h-[100%] bg-[length:110%] w-[10%] absolute left-[60%] top-[-10%] bg-repet"></div>
          <div className=" bg-[url('/bg-image.svg')] h-[100%] bg-[length:110%] w-[10%] absolute left-[70%] top-[3%]  bg-repet"></div>
          <div className=" bg-[url('/bg-image.svg')] h-[100%] bg-[length:110%] w-[10%] absolute left-[80%] top-[-10%] bg-repet"></div>
          <div className=" bg-[url('/bg-image.svg')] h-[100%] bg-[length:110%] w-[10%] absolute left-[90%] top-[3%]  bg-repet"></div>
        </div>
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-[50%] w-[329px] z-20 ">
          <div>
            <Image src="/SaveBite.svg" alt="alt" width={329} height={126} />
          </div>
          <p className="text-primary-500 font-[600] text-center">
            Cause every bite counts.
          </p>
        </div>
      </div>
      <div className="h-full w-full sm:w-1/2 font-[600] relative">
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="block sm:hidden">
            <Image
              src="/SaveBite.svg"
              alt="SaveBite"
              width={329}
              height={126}
              className="object-fill"
            />
          </div>
          <span className="text-black-900 font-[600] h4 md:h2">
            Login to SaveBite
          </span>
          <form action="">
            <LoginInpLabel required={true} htmlFor="img">
              Upload your image
            </LoginInpLabel>
            <UploadInput id="img" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
