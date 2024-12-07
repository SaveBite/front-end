"use client";
import Image from "next/image";
// import React, { useState } from "react";
import CustomButton from "./CustomButton";
import Link from "next/link";
import CustomCheckbox from "./CustomCheckbox";
import LoginInpLabel from "./LoginInplabel";
import Input from "./Input";
import Password from "./Password";
import { handleLoginFormWithPass } from "@/actions/actions";
import { useFormState } from "react-dom";
// import { handleLoginFormWithPass } from "@/actions/actions";
// import { redirect } from "next/navigation";

const LoginFormWithPass = () => {
  const [errorMessage, dispatch] = useFormState(
    handleLoginFormWithPass,
    undefined
  );

  return (
    <form action={dispatch}>
      <div className="pt-[20px]">
        <LoginInpLabel required={true} htmlFor="email">
          Email
        </LoginInpLabel>
        <Input
          id="email"
          error={
            errorMessage === "email cannot empty or wrong" ? errorMessage : ""
          }
        />
        <LoginInpLabel required={true} htmlFor="password">
          Password
        </LoginInpLabel>
        <Password
          id="password"
          error={
            errorMessage === "password cannot be empty" ? errorMessage : ""
          }
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
  );
};

export default LoginFormWithPass;
