import React from "react";
import { Button } from "../ui/button";

const StockHeader = () => {
  return (
    <div className="flex justify-between items-center w-[90%] mx-auto py-[10px]">
      <span className="h3medium">Stock</span>
      <Button>Filter</Button>
    </div>
  );
};

export default StockHeader;
