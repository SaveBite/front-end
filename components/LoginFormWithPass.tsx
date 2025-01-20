"use client";
import Image from "next/image";
import CustomCheckbox from "./CustomCheckbox";
import LoginInpLabel from "./LoginInplabel";
import Input from "./Input";
import Password from "./Password";
import { handleLoginFormWithPass } from "@/actions/actions";
import { useFormState } from "react-dom";
import ReuseableButton from "./ReuseableButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import UserNotFound from "./UserNotFound";

const LoginFormWithPass = () => {
  const [errorMessage, dispatch] = useFormState(
    handleLoginFormWithPass,
    undefined
  );
  const router = useRouter();

  function recoverYourImage(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    router.push("/login/recovery-img");
  }
  function switchToLoginWithImage(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    router.push("/login/with-img");
  }

  return (
    <>
      <div className="w-fit lg:w-[500px] absolute top-[50%] -translate-y-1/2 left-1/2 -translate-x-1/2">
        <span className="text-black-900 h4bold md:h3bold lg:h2bold">
          Login to SaveBite
        </span>
        <form action={dispatch}>
          <div className="pt-[20px]">
            <LoginInpLabel required={true} htmlFor="email">
              Email
            </LoginInpLabel>
            <Input
              id="email"
              error={
                errorMessage === "email cannot be empty or wrong"
                  ? "email cannot be empty or wrong"
                  : ""
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
            <button
              onClick={recoverYourImage}
              className="font-[400] title2 relative after:content-[''] after:w-full after:h-[1px] after:bg-black-500 after:absolute after:left-0 after:bottom-[3px] "
            >
              lost your image?
            </button>
          </div>
          <div className="mt-[32px]">
            <ReuseableButton>
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
            </ReuseableButton>
            <ReuseableButton type="secondary" onclick={switchToLoginWithImage}>
              Login With email and image
            </ReuseableButton>
          </div>
        </form>
        <p className="text-center mt-[32px] ">
          Do not have an account?
          <Link href="/signup" className="text-primary-500 ml-[2px]">
            Sign up
          </Link>
        </p>
      </div>
      <div className="absolute bottom-[10px] right-[10px]">
        <UserNotFound flag={errorMessage} />
      </div>
    </>
  );
};

export default LoginFormWithPass;
