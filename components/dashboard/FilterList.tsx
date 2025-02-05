"use client";
import { Item } from "@/types";
import Filter from "./Filter";
import { Dispatch, SetStateAction } from "react";
import { numberSort, stringSort } from "@/helpers/dashboardItemsFilters";

interface Props {
  products: Item[];
  setProducts: Dispatch<SetStateAction<Item[] | null>>;
}

function FilterList({ products, setProducts }: Props) {
  return (
    <div className="flex flex-wrap gap-1 w-[100%] mx-auto">
      <Filter
        name="productName"
        filter={() => setProducts(stringSort(products, "productName")!)}
      />
      <Filter
        name="category"
        filter={() => setProducts(stringSort(products, "category")!)}
      />
      <Filter
        name="price"
        filter={() => setProducts(numberSort(products, "price")!)}
      />
      <Filter
        name="quantity"
        filter={() => setProducts(numberSort(products, "quantity")!)}
      />
      <Filter
        name="reorderLevel"
        filter={() => setProducts(numberSort(products, "reorderLevel")!)}
      />
      <Filter
        name="reorderQuantity"
        filter={() => setProducts(numberSort(products, "reorderQuantity")!)}
      />
      <Filter
        name="unitsSold"
        filter={() => setProducts(numberSort(products, "unitsSold")!)}
      />
      <Filter
        name="salesValue"
        filter={() => setProducts(numberSort(products, "salesValue")!)}
      />
    </div>
  );
}

export default FilterList;
