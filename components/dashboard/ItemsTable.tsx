"use client";
import FilterList from "./FilterList";
import TableContent from "./TableContent";
import { useStock } from "@/contexts/Stock";

function ItemsTable() {
  const { products, setProducts } = useStock()!;
  // console.log(products);
  return (
    <div className="flex flex-col gap-1 w-[90%] mx-auto">
      <FilterList products={products!} setProducts={setProducts} />
      <TableContent data={products!} />
    </div>
  );
}

export default ItemsTable;
