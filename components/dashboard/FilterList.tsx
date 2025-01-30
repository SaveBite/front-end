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
    <div className="flex gap-1 w-[100%] mx-auto">
      <Filter
        name="Product Name"
        filter={() => setProducts(stringSort(products, "productName")!)}
      />
      <Filter
        name="Category"
        filter={() => setProducts(stringSort(products, "category")!)}
      />
      <Filter
        name="Price"
        filter={() => setProducts(numberSort(products, "price")!)}
      />
      <Filter
        name="Quantity"
        filter={() => setProducts(numberSort(products, "quantity")!)}
      />
      <Filter
        name="Reorder Level"
        filter={() => setProducts(numberSort(products, "reorderLevel")!)}
      />
      <Filter
        name="Reorder Quantity"
        filter={() => setProducts(numberSort(products, "reorderQuantity")!)}
      />
      <Filter
        name="Units Sold"
        filter={() => setProducts(numberSort(products, "unitsSold")!)}
      />
      <Filter
        name="Sales value"
        filter={() => setProducts(numberSort(products, "salesValue")!)}
      />
    </div>
  );
}

export default FilterList;
