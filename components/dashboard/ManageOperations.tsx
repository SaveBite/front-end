"use client";
import { Input } from "@/components/ui/input";
import ListSelect from "./ListSelect";
import { Button } from "../ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import AddItemModal from "./AddItemModal";

function ManageOperations() {
  const t = useTranslations("Dashboard");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const newSearchParams = new URLSearchParams(searchParams.toString());

  function handleDashboardSearchQuery(e: any) {
    newSearchParams.set("dashboardSearchQuery", e.target.value);
    router.push(`${pathname}?${newSearchParams}`);
  }

  return (
    <div className="w-[90%] m-auto py-[30px] flex justify-between">
      <div className="flex gap-2">
        <Input
          className="lg:w-[400px] md:w-[300px] sm:w-[200px] rounded-lg"
          placeholder={t("searchProductName")}
          onChange={(e) => handleDashboardSearchQuery(e)}
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
        <AddItemModal />
      </div>
    </div>
  );
}

export default ManageOperations;
