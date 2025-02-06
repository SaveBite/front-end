"use client";
import { Input } from "@/components/ui/input";
import ListSelect from "./ListSelect";
import { Button } from "../ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useStock } from "@/contexts/Stock";
import {
  fetchDataWithQueries,
  handleDataNames,
} from "@/helpers/dataUploadAndFetching";
import { useCallback, useEffect } from "react";

function ManageOperations() {
  const t = useTranslations("Dashboard");
  const { originalProducts, search, status, setSearch, setProducts } =
    useStock()!;
  //
  const handleSearchText = useCallback(async () => {
    if (!originalProducts || originalProducts.length === 0) return;

    const filteredData = await fetchDataWithQueries(search, status);
    const { products: handledProducts } = handleDataNames(filteredData);
    setProducts(handledProducts);
  }, [originalProducts, search, status, setProducts]); // Add necessary dependencies

  useEffect(() => {
    if (!originalProducts || originalProducts.length === 0) return;

    handleSearchText();
  }, [handleSearchText, originalProducts]);

  return (
    <div className="w-[90%] m-auto py-[30px] flex justify-between">
      <div className="flex gap-2">
        <Input
          className="lg:w-[400px] md:w-[300px] sm:w-[200px] rounded-lg"
          placeholder={t("searchProductName")}
          onChange={(e) => {
            //store the value of searching in a state
            setSearch(e.target.value);
            //fetch data , change the format , get the products from this data then store it in a state
            handleSearchText();
          }}
        />
        <ListSelect />
      </div>
      <div className="flex gap-2">
        <Button className="flex gap-2 text-black-400 bg-white border-[1px] border-extra-gray-border hover:bg-white">
          <Image
            src="/dashboard/download-gray.svg"
            alt="download-gray.svg"
            width={20}
            height={20}
          />
          <span>{t("download")}</span>
        </Button>
        <Button
          className="flex gap-2 text-black-400 bg-white border-[1px] border-extra-gray-border hover:bg-white"
          onClick={() => print()}
        >
          <Image
            src="/dashboard/print.svg"
            alt="print.svg"
            width={20}
            height={20}
          />
          <span>{t("print")}</span>
        </Button>
        <Button className="flex gap-2 text-primary-500 bg-white border-[1px] border-primary-500 hover:bg-white">
          <Image
            src="/dashboard/add.svg"
            alt="add.svg"
            width={20}
            height={20}
          />
          <span>{t("addItem")}</span>
        </Button>
      </div>
    </div>
  );
}

export default ManageOperations;
