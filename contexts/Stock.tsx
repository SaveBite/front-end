"use client";
import { Item, statistics } from "@/types";
import { createContext, useContext, useState } from "react";

//StoclProps
interface StockProps {
  products: Item[] | null;
  setProducts: React.Dispatch<React.SetStateAction<Item[] | null>>;
  showFilters: boolean;
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
  originalProducts: Item[] | null;
  setOriginalProducts: React.Dispatch<React.SetStateAction<Item[] | null>>;
  statistics: statistics | null;
  setStatistics: React.Dispatch<React.SetStateAction<statistics | null>>;
  search: string | null;
  setSearch: React.Dispatch<React.SetStateAction<string | null>>;
  status: string | null;
  setStatus: React.Dispatch<React.SetStateAction<string | null>>;
}
//create context for Stock items
const StockContext = createContext<StockProps | null>(null);
//provider for Stock items
function StockProvider({ children }: { children: React.ReactNode }) {
  const [originalProducts, setOriginalProducts] = useState<Item[] | null>([]);
  // here the original data (do not manipulated)
  const [products, setProducts] = useState<Item[] | null>([]);
  //here you can manipulate this data for dashboard Table
  const [showFilters, setShowFilters] = useState<boolean>(false);
  //statistics for dashboard cards
  const [statistics, setStatistics] = useState<statistics | null>({
    belowMinimum: 0,
    belowPar: 0,
    negativeStock: 0,
    positiveStock: 0,
    stockInHand: "",
  });
  //dash board filteration states
  const [search, setSearch] = useState<string | null>("");
  const [status, setStatus] = useState<string | null>("All");
  return (
    <StockContext.Provider
      value={{
        originalProducts,
        setOriginalProducts,
        products,
        setProducts,
        setShowFilters,
        showFilters,
        statistics,
        setStatistics,
        search,
        setSearch,
        status,
        setStatus,
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
