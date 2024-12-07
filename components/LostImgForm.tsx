"use client";
import Image from "next/image";
import LoginInpLabel from "./LoginInplabel";
import Input from "./Input";
import { handleLostImg } from "@/actions/actions";
import { useFormState } from "react-dom";
import CustomSelect from "./CustomSelect";
import ReuseableButton from "./ReuseableButton";

const LostImgForm = () => {
  const [errorMessage, dispatch] = useFormState(handleLostImg, undefined);

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
        <LoginInpLabel required={true} htmlFor="question">
          Please answer this Question
        </LoginInpLabel>
        <CustomSelect
          arr={["a", "b", "c"]}
          error={
            errorMessage === "you must answer the question" ? errorMessage : ""
          }
        />
      </div>

      <div className="mt-[32px]">
        <ReuseableButton>
          <div className="flex gap-4">
            <p>Send</p>
            <Image
              className="fill-rose-500 text-blue"
              src="/white_arrow.svg"
              alt="rightArrow"
              width={30}
              height={30}
            />
          </div>
        </ReuseableButton>
      </div>
    </form>
  );
};

export default LostImgForm;
