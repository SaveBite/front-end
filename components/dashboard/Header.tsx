"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  handleDataNames,
  uploadAndFetchData,
} from "@/helpers/dataUploadAndFetching";
import { useStock } from "@/contexts/Stock";

const Header = () => {
  const t = useTranslations("Dashboard");
  const { setOriginalProducts, setProducts, setStatistics } = useStock()!;

  async function handleOnChange(e: any) {
    const data = await uploadAndFetchData(e);
    if (data) {
      const { products, statistics } = handleDataNames(data);
      setOriginalProducts(products);
      setProducts(products);
      setStatistics(statistics);
    }
  }
  return (
    <div className="flex justify-between w-[90%] m-auto py-[20px]">
      <p className="h3medium">{t("products")}</p>
      <input
        type="file"
        id="csvupload"
        className="hidden"
        onChange={handleOnChange}
      />
      <label htmlFor="csvupload">
        <div className="rounded-none bg-primary-500 text-white flex gap-2 items-center justify-center cursor-pointer p-[12px]">
          <Image
            src="/dashboard/download.svg"
            alt="download.svg"
            width={20}
            height={20}
          />
          {t("import")}
        </div>
      </label>
    </div>
  );
};

export default Header;
