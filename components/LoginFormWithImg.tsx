"use client";
import React, { useRef, useState } from "react";
import LoginInpLabel from "./LoginInplabel";
import UploadInput from "./UploadInput";
import CustomCheckbox from "./CustomCheckbox";
import CustomButton from "./CustomButton";
import Link from "next/link";
import Image from "next/image";
import { handleLoginFormWithImage } from "@/actions/actions";
import Input from "./Input";

const LoginFormWithImg = () => {
  const [fileError, setFileError] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null)!;

  function handleOnSubmit(formdata: FormData) {
    const file = fileInputRef?.current?.files?.[0]?.name;

    if (!file) {
      setFileError(true);
    } else {
      setFileError(false);
    }
    if (emailValue === "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (emailError === true || fileError === true) return;

    handleLoginFormWithImage(formdata);
  }
  return (
    <>
      <form action={handleOnSubmit}>
        <div className="pt-[20px]">
          <LoginInpLabel required={true} htmlFor="email">
            Email
          </LoginInpLabel>
          <Input
            id="email"
            error={emailError}
            value={emailValue}
            setValue={setEmailValue}
          />
          <LoginInpLabel required={true} htmlFor="img">
            Upload your image
          </LoginInpLabel>

          <UploadInput
            id="img"
            name="inputImg"
            fileRef={fileInputRef}
            error={fileError}
          />
        </div>
        <div className="flex justify-between items-center mt-[20px] max-w-[500px]">
          <CustomCheckbox id="remember" />
          <Link
            href="/"
            className="font-[400] title2 relative after:content-[''] after:w-full after:h-[1px] after:bg-black-500 after:absolute after:left-0 after:bottom-[3px] "
          >
            lost your image?
          </Link>
        </div>
        <div className="mt-20">
          <CustomButton>
            <div className="flex gap-4">
              <p>Login</p>
              <Image
                className="fill-rose-500 text-blue"
                src="/white_arrow.svg"
                alt="rightArrow"
                width={30}
                height={30}
              />
            </div>
          </CustomButton>
        </div>
      </form>
    </>
  );
};

export default LoginFormWithImg;
