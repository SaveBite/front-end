"use client";
import SortList from "./SortList";
import StockTableContent from "./StockTableContent";
import { useStock } from "@/contexts/Stock";

function StockItemsTable() {
  const { products, setProducts } = useStock()!;
  return (
    <div className="flex flex-col gap-1 w-[90%] mx-auto">
      <SortList products={products!} setProducts={setProducts} />
      <StockTableContent data={products!} />
    </div>
  );
}

export default StockItemsTable;
