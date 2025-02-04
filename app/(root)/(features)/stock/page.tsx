"use clint";
import ChartOperations from "@/components/stock/ChartOperations";
import LinearChart from "@/components/stock/LinearChart";
import StockItemsTable from "@/components/stock/StockItemsTable";
import StockHeader from "@/components/stock/StockHeader";
import StockOperations from "@/components/stock/StockOperations";
import React from "react";

const Page = () => {
  return (
    <div className="flex-1">
      <StockHeader />
      <div className="mx-auto  px-[40px] py-[20px] mt-[30px] bg-white w-[90%] rounded-lg">
        <ChartOperations />
        <LinearChart />
      </div>
      <StockOperations />
      <StockItemsTable />
    </div>
  );
};

export default Page;
