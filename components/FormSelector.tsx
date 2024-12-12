"use client";
import LoginFormWithImg from "./LoginFormWithImg";
import LoginFormWithPass from "./LoginFormWithPass";
import ReuseableButton from "./ReuseableButton";
import LostImgForm from "./LostImgForm";
import Link from "next/link";
import { useLoginForm } from "@/contexts/LoginFormContext";

const FormSelector = () => {
  const { selectedForm, setSelectedForm } = useLoginForm()!;
  function handleOnClick() {
    if (selectedForm === 1) setSelectedForm(2);
    if (selectedForm === 2) setSelectedForm(1);
  }
  return (
    <div>
      {selectedForm !== 3 ? (
        <span className="text-black-900 h4bold md:h3bold lg:h2bold">
          Login to SaveBite
        </span>
      ) : (
        <div className="flex flex-col">
          <span className="text-black-900 h4bold md:h3bold lg:h2bold">
            Lost your Img
          </span>
          <span className="text-black-300 title1">
            A verification code will be sent to the your mail, Please check it.
          </span>
        </div>
      )}
      {selectedForm === 1 && (
        <LoginFormWithImg switchToLost={setSelectedForm} />
      )}
      {selectedForm === 2 && (
        <LoginFormWithPass switchToLost={setSelectedForm} />
      )}
      {selectedForm === 3 && <LostImgForm />}

      {selectedForm !== 3 && (
        <ReuseableButton type="secondary" onclick={handleOnClick}>
          {selectedForm === 2
            ? "Login With email and password"
            : "Login With image and password"}
        </ReuseableButton>
      )}

      {selectedForm !== 3 && (
        <>
          <p className="text-center mt-[32px] ">
            Do not have an account?
            <Link href="/signup" className="text-primary-500 ml-[2px]">
              Sign up
            </Link>
          </p>
        </>
      )}
    </div>
  );
};

export default FormSelector;
