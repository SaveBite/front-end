"use client";
import Image from "next/image";
import LoginInpLabel from "./LoginInplabel";
import Input from "./Input";
import { handleLostImg } from "@/actions/actions";
import { useFormState } from "react-dom";
import CustomSelect from "./CustomSelect";
import ReuseableButton from "./ReuseableButton";
import { useEffect, useState } from "react";
import { getLoginAnswers } from "@/helpers/loginAnswers";

const LostImgForm = () => {
  const [errorMessage, dispatch] = useFormState(handleLostImg, undefined);
  const [answersArr, setAnswersArr] = useState<
    { id: number; content: string }[] | never
  >([]);

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
          name="question"
          placeholder="what is your favourite drink ?"
          arr={answersArr}
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
