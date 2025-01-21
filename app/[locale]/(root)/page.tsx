import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("Index");
  return (
    <div>
      <div>{t("title")}</div>
      <Button className="bg-primary-500 hover:bg-primary-200">test</Button>
    </div>
  );
};

export default Page;
