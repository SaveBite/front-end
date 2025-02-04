"use client";
import { Item } from "@/types";
import Filter from "./StockSortFilter";
import { Dispatch, SetStateAction } from "react";
import { numberSort, stringSort } from "@/helpers/dashboardItemsFilters";

interface Props {
  products: Item[];
  setProducts: Dispatch<SetStateAction<Item[] | null>>;
}

function SortList({ products, setProducts }: Props) {
  return (
    <div className="flex gap-1 w-[100%] mx-auto">
      <Filter
        name="productName"
        filter={() => setProducts(stringSort(products, "productName")!)}
      />
      <Filter
        name="category"
        filter={() => setProducts(stringSort(products, "category")!)}
      />

      <Filter
        name="reorderQuantity"
        filter={() => setProducts(numberSort(products, "reorderQuantity")!)}
      />
    </div>
  );
}

export default SortList;
