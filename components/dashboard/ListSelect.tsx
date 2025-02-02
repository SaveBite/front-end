"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";

function ListSelect() {
  const t = useTranslations("Dashboard");
  return (
    <Select defaultValue="all" onValueChange={(e) => console.log(e)}>
      <SelectTrigger className="w-[180px] focus:ring-0 focus:ring-offset-0">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem className="focus:bg-blue-500 focus:text-white" value="all">
          {t("all")}
        </SelectItem>
        <SelectItem
          className="focus:bg-blue-500 focus:text-white"
          value="Positive"
        >
          {t("positiveStock")}
        </SelectItem>
        <SelectItem
          className="focus:bg-blue-500 focus:text-white"
          value="negative"
        >
          {t("negativeStock")}
        </SelectItem>
        <SelectItem className="focus:bg-blue-500 focus:text-white" value="bar">
          {t("belowBar")}
        </SelectItem>
        <SelectItem
          className="focus:bg-blue-500 focus:text-white"
          value="minimum"
        >
          {t("belowMinimum")}
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

export default ListSelect;
