import React from "react";
import ChartFilters from "./ChartFilters";

const ChartOperations = ({ predictData }: { predictData: any }) => {
  return (
    <div className="flex justify-between items-center">
      <span className="title1bold">Reorder Quantity</span>
      <ChartFilters predictData={predictData} />
    </div>
  );
};

export default ChartOperations;
