"use client";
import LoginInpLabel from "./LoginInplabel";
import UploadInput from "./UploadInput";
import CustomCheckbox from "./CustomCheckbox";
import CustomButton from "./CustomButton";
import Link from "next/link";
import Image from "next/image";
import Input from "./Input";
import { useFormState } from "react-dom";
import { handleLoginFormWithImage } from "@/actions/actions";

const LoginFormWithImg = () => {
  const [errorMessage, dispatch] = useFormState(
    handleLoginFormWithImage,
    undefined
  );

  return (
    <>
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
          <LoginInpLabel required={true} htmlFor="img">
            Upload your image
          </LoginInpLabel>

          <UploadInput
            id="img"
            name="inputImg"
            error={errorMessage === "file is not found" ? errorMessage : ""}
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
