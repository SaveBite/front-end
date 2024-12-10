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

const SignupForm = () =>{
  const [errorMessage, dispatch] = useFormState(
    handleSignupForm,
    undefined
  );

  const err = "Please Complete this required field"
  return (
    <form action={dispatch} className="mt-[32px] py-[32px] px-[68px] mx-auto w-[80%] shadow-md rounded-lg mb-[100px]">
      <div className="mb-[16px]">
        <LoginInpLabel required={true} htmlFor="username">
          User name
        </LoginInpLabel>
        <Input id="username" error={
            errorMessage === err ? errorMessage : ""
          } />
      </div>
      <div className="mb-[16px]">
        <LoginInpLabel required={true} htmlFor="email">
          Email
        </LoginInpLabel>
        <Input id="email" error={
            errorMessage === err ? errorMessage : ""
          } />
      </div>
      <div className="mb-[16px]">
        <LoginInpLabel required={true} htmlFor="phone">
          Phone number
        </LoginInpLabel>
        <PhoneNumberInput />
      </div>
      <div className="mb-[16px]">
        <LoginInpLabel required={true} htmlFor="image">
          Upload an image ( you will use this image to login in the next time)
        </LoginInpLabel>
        <UploadInput id="signupImg" name="signupImg" error={
            errorMessage === err ? errorMessage : ""
          } />
      </div>
      <div className="mb-[16px]">
        <LoginInpLabel required={true} htmlFor="drink">
          Please answer this Question
        </LoginInpLabel>
        <CustomSelect
        name="favorite-drink"
        placeholder="What's your favorite drink ?"
          arr={["5arbosh shay", "Mango", "Coffee", "Sahlb", "Farawla"]}
          error={
            errorMessage === err ? errorMessage : ""
          }
        />
      </div>
      <div className="mb-[16px]">
        <LoginInpLabel required={true} htmlFor="password">
          Password
        </LoginInpLabel>
        <Password id="password" error={
            errorMessage === err ? errorMessage : ""
          }/>
      </div>
      <div className="mb-[16px]">
        <LoginInpLabel required={true} htmlFor="confirm-password">
          Confirm Password
        </LoginInpLabel>
        <Password id="confirm-password" error={
            errorMessage === err ? errorMessage : ""
          }/>
      </div>
      <div className="mb-[16px]">
        <LoginInpLabel required={true} htmlFor="type">
          Account Type
        </LoginInpLabel>
        <CustomSelect
        name="Account-type"
        placeholder="Please Select:"
          arr={["Restaurant", "Supermarket", "Householder"]}
          error={
            errorMessage === err ? errorMessage : ""
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
