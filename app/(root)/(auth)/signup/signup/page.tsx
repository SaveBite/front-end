import NavBar from "@/components/NavBar";
import SignupForm from "@/components/SignupForm";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

function Page() {
  const t = useTranslations("Sign-up");

  return (
    <>
      <NavBar />
      <div className="mx-auto text-center font-medium">
        <p className="pt-[40px] pb-[16px] text-[28px]">
          {t("createAccount")}
        </p>
        <p className="text-[19px]">
          {t("havingAccount")}
          <Link href={"/login"} className="pl-[8px] text-primary-500">
            {t("login")}
          </Link>
        </p>
      </div>
      <SignupForm />;
    </>
  );
}

export default Page;
