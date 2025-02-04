import React from "react";
import { TimeFilter } from "./TimeFilter";
import ProductsFilter from "./ProductsFilter";

const ChartFilters = () => {
  return (
    <div className="flex items-center gap-2">
      <ProductsFilter />
      <TimeFilter />
    </div>
  );
};

export default ChartFilters;
