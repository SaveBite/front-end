import React from "react";
import ChartFilters from "./ChartFilters";

const ChartOperations = () => {
  return (
    <div className="flex justify-between items-center">
      <span className="title1bold">Reorder Quantity</span>
      <ChartFilters />
    </div>
  );
};

export default ChartOperations;
