"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface StockFiltersProps {
  categoriesList: Array<string>;
  setCategoriesList: Dispatch<SetStateAction<string[]>>;
  productsList: Array<string>;
  setProductsList: Dispatch<SetStateAction<string[]>>;
}
const StockFiltersContext = createContext<StockFiltersProps | null>(null);

function StockFiltersProvider({ children }: { children: React.ReactNode }) {
  const [categoriesList, setCategoriesList] = useState<Array<string>>([]);
  const [productsList, setProductsList] = useState<Array<string>>([]);
  return (
    <StockFiltersContext.Provider
      value={{
        categoriesList,
        setCategoriesList,
        productsList,
        setProductsList,
      }}
    >
      {children}
    </StockFiltersContext.Provider>
  );
}
function useStockFilters() {
  const context = useContext(StockFiltersContext);
  if (context === undefined) {
    throw new Error("StockFiltersContext is used outside its area");
  }
  return context;
}
export { StockFiltersProvider, useStockFilters };
