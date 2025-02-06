"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useStock } from "@/contexts/Stock";
import {
  fetchDataWithQueries,
  handleDataNames,
} from "@/helpers/dataUploadAndFetching";
import { useTranslations } from "next-intl";
import { useCallback, useEffect } from "react";

function ListSelect() {
  const t = useTranslations("Dashboard");
  const { originalProducts, setProducts, setStatus, search, status } =
    useStock()!;
  // caching the function and do not change if it returns the same results
  const handleStatusChange = useCallback(async () => {
    if (!originalProducts || originalProducts.length === 0) return;

    const filteredData = await fetchDataWithQueries(search, status);
    const { products: handledProducts } = handleDataNames(filteredData);
    setProducts(handledProducts);
  }, [originalProducts, search, status, setProducts]);

  useEffect(() => {
    if (!originalProducts || originalProducts.length === 0) return;

    handleStatusChange();
  }, [originalProducts, handleStatusChange]);
  return (
    <Select
      value="All"
      onValueChange={(e) => {
        setStatus(e);
        handleStatusChange();
      }}
    >
      <SelectTrigger
        className="w-[180px] focus:ring-0 focus:ring-offset-0"
        defaultValue={"All"}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem className="focus:bg-blue-500 focus:text-white" value="All">
          {t("all")}
        </SelectItem>
        <SelectItem
          className="focus:bg-blue-500 focus:text-white"
          value="PositiveStock"
        >
          {t("positiveStock")}
        </SelectItem>
        <SelectItem
          className="focus:bg-blue-500 focus:text-white"
          value="NegativeStock"
        >
          {t("negativeStock")}
        </SelectItem>
        <SelectItem
          className="focus:bg-blue-500 focus:text-white"
          value="BelowPar"
        >
          {t("belowPar")}
        </SelectItem>
        <SelectItem
          className="focus:bg-blue-500 focus:text-white"
          value="BelowMinimum"
        >
          {t("belowMinimum")}
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

export default ListSelect;
