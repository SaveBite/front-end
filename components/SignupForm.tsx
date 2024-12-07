"use client";
import LoginInpLabel from "./LoginInplabel";
import PhoneNumberInput from "./PhoneNumberInput";
import UploadInput from "./UploadInput";
// import ImageUpload from "./ImageUpload";

const SignupForm = () => {
  return (
    <form className="mt-[32px] py-[32px] px-[68px] mx-auto w-[785px] shadow-md rounded-lg">
      <div className="username">
        <LoginInpLabel required={true} htmlFor="username">
          User name
        </LoginInpLabel>
        <input
          type="text"
          name="username"
          id="username"
          className="outline-none caret-primary-500 w-[649px] h-[64px] ounded mb-[16px] px-[12px] py-[26px] border-[1px]"
        />
      </div>
      <div className="email">
        <LoginInpLabel required={true} htmlFor="email">
          Email
        </LoginInpLabel>
        <input
          type="text"
          name="email"
          id="email"
          className="outline-none caret-primary-500 w-[649px] h-[64px] rounded mb-[16px] px-[12px] py-[26px] border-[1px]"
        />
      </div>
      <div className="phone">
        <LoginInpLabel required={true} htmlFor="phone">
          Phone number
        </LoginInpLabel>
        <PhoneNumberInput />
      </div>
      <div className="img">
        <LoginInpLabel required={true} htmlFor="image">
          Upload an image ( you will use this image to login in the next time)
        </LoginInpLabel>
        {/* <ImageUpload /> */}
        <UploadInput id="signupImg" name="signupImg" />
      </div>
      <div className="drink">
        <LoginInpLabel required={true} htmlFor="drink">
          Please answer this Question
        </LoginInpLabel>
        <select className="mr-[12px] pl-[18px] rounded-md w-full h-[64px] mb-[16px] focus:outline-none border">
          <option>What is your favorite drink?</option>
          <option value="">5arbosh shay</option>
          <option value="">Mango</option>
          <option value="">Coffee</option>
          <option value="">Sahlb</option>
          <option value="">Farawla</option>
        </select>
      </div>
    </form>
  );
};

export default SignupForm;
