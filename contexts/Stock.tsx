"use client";
import { Item } from "@/types";
import { createContext, useContext, useState } from "react";
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

//StoclProps
interface StockProps {
  products: Item[] | null;
  setProducts: React.Dispatch<React.SetStateAction<Item[] | null>>;
  showFilters: boolean;
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
  originalProducts: Item[] | null;
  setOriginalProducts: React.Dispatch<React.SetStateAction<Item[] | null>>;
}
//create context for Stock items
const StockContext = createContext<StockProps | null>(null);
//provider for Stock items
function StockProvider({ children }: { children: React.ReactNode }) {
  const [originalProducts, setOriginalProducts] = useState<Item[] | null>(
    dummyData
  );
  const [products, setProducts] = useState<Item[] | null>(dummyData);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  return (
    <StockContext.Provider
      value={{
        originalProducts,
        setOriginalProducts,
        products,
        setProducts,
        setShowFilters,
        showFilters,
      }}
    >
      {children}
    </StockContext.Provider>
  );
}

function useStock() {
  const context = useContext(StockContext);
  if (context === undefined) {
    throw new Error("Stock context is used outside the context");
  }
  return context;
}

export { StockProvider, useStock };
