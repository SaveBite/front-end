"use client";
import { useState } from "react";
import FilterList from "./FilterList";
import TableContent from "./TableContent";
import { Item } from "@/types";

const dummyData = [
  {
    productName: "Milk",
    category: "Dairy",
    price: 4.5,
    quantity: 60,
    reorderLevel: 15,
    reorderQuantity: 25,
    unitsSold: 110,
    salesValue: 495.0,
  },
  {
    productName: "Apples",
    category: "Produce",
    price: 2.8,
    quantity: 40,
    reorderLevel: 10,
    reorderQuantity: 20,
    unitsSold: 95,
    salesValue: 266.0,
  },
  {
    productName: "Rice",
    category: "Grains",
    price: 12.0,
    quantity: 30,
    reorderLevel: 12,
    reorderQuantity: 18,
    unitsSold: 85,
    salesValue: 1020.0,
  },
  {
    productName: "Cheese",
    category: "Dairy",
    price: 14.5,
    quantity: 55,
    reorderLevel: 20,
    reorderQuantity: 30,
    unitsSold: 75,
    salesValue: 1087.5,
  },
  {
    productName: "Chicken",
    category: "Meat",
    price: 8.75,
    quantity: 45,
    reorderLevel: 18,
    reorderQuantity: 22,
    unitsSold: 120,
    salesValue: 1050.0,
  },
  {
    productName: "Orange Juice",
    category: "Beverages",
    price: 3.25,
    quantity: 70,
    reorderLevel: 25,
    reorderQuantity: 35,
    unitsSold: 130,
    salesValue: 422.5,
  },
];

function ItemsTable() {
  const [products, setProducts] = useState<Item[] | null>(dummyData);
  return (
    <div className="flex flex-col gap-1 w-[90%] mx-auto">
      <FilterList products={products!} setProducts={setProducts} />
      <TableContent data={products!} />
    </div>
  );
}

export default ItemsTable;
