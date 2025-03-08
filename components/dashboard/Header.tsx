import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { uploadProducts } from "@/actions/actions";

const Header = () => {
  const t = useTranslations("Dashboard");

  return (
    <div className="flex justify-between w-[90%] m-auto py-[20px]">
      <p className="h3medium">{t("products")}</p>
      <form action={uploadProducts}>
        <input type="file" id="csv_file" name="csv_file" className="hidden" />
        <div className="flex gap-2">
          <label htmlFor="csv_file">
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
          <button
            type="submit"
            className="rounded-none bg-primary-500 text-white flex gap-2 items-center justify-center cursor-pointer p-[12px]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Header;
