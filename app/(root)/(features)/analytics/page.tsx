import { getAnalyticsData, getAnalyticsPeridection } from "@/actions/actions";
import { AnalyticCard } from "@/components/analytics/AnalyticCard";
import AnalyticsCalender from "@/components/analytics/AnalyticsCalender";
import AnalyticsChart from "@/components/analytics/AnalyticsChart";
import { SpecialAnalyticCard } from "@/components/analytics/SpecialAnalyticCard";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import React from "react";
export const metadata: Metadata = {
  title: "SaveBite | Analytics",
  description:
    "this is analytics page where you can find all important statistics about your stock",
};
const Page = async () => {
  const [analyticsData, analyticsPredict] = await Promise.all([
    getAnalyticsData(),
    getAnalyticsPeridection(),
  ]);
  const t = await getTranslations("Analytics");

  const {
    stock_turnover_rate = "0",
    stock_turnover_rate_change = 0,
    reorder_accuracy_rate = "0",
    reorder_accuracy_rate_change = 0,
    category_overstocking = {},
    category_overstocking_change = {},
    revenue = "0",
    revenue_change = 0,
  } = analyticsData || {};

  console.log(analyticsPredict);

  return (
    <div className="w-[90%] mx-auto py-[20px]">
      <span className="h3medium">{t("analytics")}</span>
      <div className="py-[20px] grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 ">
        {analyticsData && (
          <>
            <AnalyticCard
              attributeName="stockTurnoverRate"
              rate={stock_turnover_rate}
              rateChange={stock_turnover_rate_change}
              attributeImage="stock_turnover_rate.png"
              color="#A1D6FF"
              msg="Measures how quickly inventory is sold and replenished"
            />
            <AnalyticCard
              attributeName="reorderAccuracyRate"
              rate={reorder_accuracy_rate}
              rateChange={reorder_accuracy_rate_change}
              attributeImage="reorder_accuracy_rate.png"
              color="#FFBEA0"
              msg="Evaluates how well restocking aligns with demand"
            />
            <SpecialAnalyticCard
              attributeName="categoryOverstocking"
              rateObject={category_overstocking}
              rateChangeObject={category_overstocking_change}
              attributeImage="category_overstocking.png"
              color="#FFE9A2"
              msg="Identifies waste-heavy product categories"
            />
            <AnalyticCard
              attributeName="spoilageRate"
              rate="0.26"
              rateChange={0}
              attributeImage="spoilage_rate.png"
              color="#72FFAF"
              msg="Estimates waste due to overstocking"
            />
            <AnalyticCard
              attributeName="wasteToSalesRatio"
              rate="0.000235"
              rateChange={0}
              attributeImage="waste_to_sale_ratio.png"
              color="#9DCED4"
              msg="Measures how much waste is generated per dollar of sales"
            />
            <AnalyticCard
              attributeName="revenue"
              rate={revenue}
              rateChange={revenue_change}
              attributeImage="revenue.png"
              color="#FFB0B0"
              msg="revenue"
            />
          </>
        )}
      </div>
      <div className=" bg-white p-[20px] my-2 ] ">
        <div className="h-[40px] flex justify-between ">
          <span className="h5bold text-primary-500">{t("analytics")}</span>
          <AnalyticsCalender
            startDate={analyticsPredict.start_date}
            endDate={analyticsPredict.end_date}
          />
        </div>
        <AnalyticsChart analyticsDataObject={analyticsPredict} />
      </div>
    </div>
  );
};

export default Page;
