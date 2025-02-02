"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("Dashboard");
  function handleOnClick() {
    console.log("hello world");
  }
  return (
    <div className="flex justify-between w-[90%] m-auto py-[20px]">
      <p className="h3medium">{t("products")}</p>
      <Button className="rounded-none" onClick={() => handleOnClick()}>
        <Image
          src="/dashboard/download.svg"
          alt="download.svg"
          width={20}
          height={20}
        />
        {t("import")}
      </Button>
    </div>
  );
};

export default Header;
