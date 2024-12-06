"use client";
import React, { useState } from "react";
import LoginFormWithImg from "./LoginFormWithImg";
import LoginFormWithPass from "./LoginFormWithPass";
import SwitchButton from "./SwitchButton";
import LostImgForm from "./LostImgForm";
import Link from "next/link";

const FormSelector = () => {
  const [selectedForm, setSelectedForm] = useState(1);
  function handleOnClick() {
    if (selectedForm === 1) setSelectedForm(2);
    if (selectedForm === 2) setSelectedForm(1);
  }
  return (
    <div>
      {selectedForm !== 3 ? (
        <span className="text-black-900 h2bold">Login to SaveBite</span>
      ) : (
        <div className="flex flex-col">
          <span className="text-black-900 h2bold">Lost your Img</span>
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
        <SwitchButton type="secondary" onclick={handleOnClick}>
          Login With email and password
        </SwitchButton>
      )}

      {selectedForm !== 3 && (
        <>
          <p className="text-center mt-[32px] ">
            Do not have an account?
            <Link href="/" className="text-primary-500">
              Sign up
            </Link>
          </p>
        </>
      )}
    </div>
  );
};

export default FormSelector;
