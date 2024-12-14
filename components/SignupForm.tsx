"use client";
import LoginInpLabel from "./LoginInplabel";
import PhoneNumberInput from "./PhoneNumberInput";
import UploadInput from "./UploadInput";
import Input from "./Input";
import Password from "./Password";
import { Checkbox } from "./ui/checkbox";
import CustomSelect from "./CustomSelect";
import ReuseableButton from "./ReuseableButton";
import { useFormState } from "react-dom";
import { handleSignupForm } from "@/actions/actions";
import { useEffect, useState } from "react";
import { getLoginAnswers } from "@/helpers/loginAnswers";

const SignupForm = () => {
  const [answersArr, setAnswersArr] = useState<
    { id: number; content: string }[] | never
  >([]);
  const [errorMessage, dispatch] = useFormState(handleSignupForm, undefined);
  console.log(errorMessage);

  useEffect(() => {
    async function fetchLoginAnswers() {
      console.log(await getLoginAnswers());
      const data: Array<{ id: number; content: string }> =
        await getLoginAnswers();
      console.log(data);

      if (data && data.length > 0) {
        setAnswersArr(data);
      }
    }

    fetchLoginAnswers();
  }, []);

  return (
    <form
      action={dispatch}
      className="mt-[32px] py-[32px] px-[68px] mx-auto w-[80%] shadow-md rounded-lg mb-[100px]"
    >
      <div className="mb-[16px]">
        <LoginInpLabel required={true} htmlFor="username">
          User name
        </LoginInpLabel>
        <Input
          id="username"
          error={errorMessage === "Username is required" ? errorMessage : ""}
        />
      </div>
      <div className="mb-[16px]">
        <LoginInpLabel required={true} htmlFor="email">
          Email
        </LoginInpLabel>
        <Input
          id="email"
          error={errorMessage === "Invalid email format" ? errorMessage : ""}
        />
      </div>
      <div className="mb-[16px]">
        <LoginInpLabel required={true} htmlFor="Phone-Number">
          Phone number
        </LoginInpLabel>
        <PhoneNumberInput
          error={
            errorMessage === "Phone number is required" ? errorMessage : ""
          }
        />
      </div>
      <div className="mb-[16px]">
        <LoginInpLabel required={true} htmlFor="image">
          Upload an image ( you will use this image to login in the next time)
        </LoginInpLabel>
        <UploadInput
          id="image"
          name="image"
          error={errorMessage === "File is not found" ? errorMessage : ""}
        />
      </div>
      <div className="mb-[16px]">
        <LoginInpLabel required={true} htmlFor="favorite-drink">
          Please answer this Question
        </LoginInpLabel>
        <CustomSelect
          name="favorite-drink"
          placeholder="What's your favorite drink ?"
          arr={answersArr}
          error={errorMessage === "Question is required" ? errorMessage : ""}
        />
      </div>
      <div className="mb-[16px]">
        <LoginInpLabel required={true} htmlFor="password">
          Password
        </LoginInpLabel>
        <Password
          id="password"
          error={errorMessage === "Password is required" ? errorMessage : ""}
        />
      </div>
      <div className="mb-[16px]">
        <LoginInpLabel required={true} htmlFor="confirm-password">
          Confirm Password
        </LoginInpLabel>
        <Password
          id="confirm-password"
          error={
            errorMessage === "Please confirm your password" ? errorMessage : ""
          }
        />
      </div>
      <div className="mb-[16px]">
        <LoginInpLabel required={true} htmlFor="type">
          Account Type
        </LoginInpLabel>
        <CustomSelect
          name="account-type"
          placeholder="Please Select:"
          arr={[
            { id: "user", content: "user" },
            { id: "restaurant", content: "restaurant" },
            { id: "super_market", content: "super_market" },
          ]}
          error={
            errorMessage === "Account type is required" ? errorMessage : ""
          }
        />
      </div>
      <div className="mb-[40px] flex items-center gap-2">
        <Checkbox className="w-[20px] h-[20px] outline-none border-black-300" />
        <div>
          <LoginInpLabel
            htmlFor="terms"
            required={false}
            inline={true}
            color="black"
          >
            Agree with
          </LoginInpLabel>
          <span className="text-green-500"> Terms and Conditions</span>
        </div>
      </div>
      <ReuseableButton>Create Account</ReuseableButton>
    </form>
  );
};

export default SignupForm;
