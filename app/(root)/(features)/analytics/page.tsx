import { getAnalyticsData, getAnalyticsPeridection } from "@/actions/actions";
import { AnalyticCard } from "@/components/analytics/AnalyticCard";
import AnalyticsChart from "@/components/analytics/AnalyticsChart";
import { SpecialAnalyticCard } from "@/components/analytics/SpecialAnalyticCard";
import Calender from "@/components/stock/Calender";
import React from "react";

const Page = async () => {
  const [analyticsData, analyticsPredict] = await Promise.all([
    getAnalyticsData(),
    getAnalyticsPeridection(),
  ]);

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
      <span className="h3medium">Analytics</span>
      <div className="py-[20px] grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 ">
        {analyticsData && (
          <>
            <AnalyticCard
              attributeName="Stock Turnover Rate"
              rate={stock_turnover_rate}
              rateChange={stock_turnover_rate_change}
              attributeImage="stock_turnover_rate.png"
              color="#A1D6FF"
            />
            <AnalyticCard
              attributeName="Reorder Accuracy Rate"
              rate={reorder_accuracy_rate}
              rateChange={reorder_accuracy_rate_change}
              attributeImage="reorder_accuracy_rate.png"
              color="#FFBEA0"
            />
            <SpecialAnalyticCard
              attributeName="Category overstocking"
              rateObject={category_overstocking}
              rateChangeObject={category_overstocking_change}
              attributeImage="category_overstocking.png"
              color="#FFBEA0"
            />
            <AnalyticCard
              attributeName="Revenue"
              rate={revenue}
              rateChange={revenue_change}
              attributeImage="revenue.png"
              color="#FFB0B0"
            />
            <AnalyticCard
              attributeName="Revenue"
              rate={revenue}
              rateChange={revenue_change}
              attributeImage="revenue.png"
              color="#FFB0B0"
            />
            <AnalyticCard
              attributeName="Revenue"
              rate={revenue}
              rateChange={revenue_change}
              attributeImage="revenue.png"
              color="#FFB0B0"
            />
          </>
        )}
      </div>
      <div className=" bg-white p-[20px] my-2 ] ">
        <div className="h-[40px] flex justify-between ">
          <span className="h5bold text-primary-500">Analytics</span>
          <Calender
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
