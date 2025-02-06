"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useStock } from "@/contexts/Stock";
import { Input } from "../ui/input";
import DrobDownList from "./DrobDownList";

const ProductsFilter = () => {
  const { showFilters, setShowFilters, originalProducts } = useStock()!;
  const [itemsFilter, setItemsFilter] = useState<string | undefined>();
  function handleShowFilters() {
    setShowFilters(true);
  }
  return (
    <>
      <Button
        onClick={handleShowFilters}
        className="bg-white border-solid border-[2px] border-extra-gray rounded-lg px-[10px] hover:bg-white"
      >
        <Image
          src="/stock/filters.svg"
          alt="filters.svg"
          width={30}
          height={30}
        />
      </Button>
      {/* the filter */}
      <div
        className={`shadow-xl rounded-lg  w-[400px] max-h-[90%]  transition-all h-[1000px] overflow-auto bg-[#ffffff] fixed ${
          showFilters === false ? `-right-[500px]` : `right-0`
        } z-[100] top-[60px]`}
      >
        <div className="flex justify-between items-center px-[20px] pt-[24px]">
          <span className="h5medium">Filter</span>
          <Image src="/x.svg" alt="x.svg" width={25} height={25} />
        </div>
        <p className="text-extra-text-gray title2 mb-[40px] px-[20px]">
          Select the filter according to what you want.
        </p>
        <div className="relative w-[90%] mx-auto">
          <Image
            src="/stock/magnifier.svg"
            alt="magnifier.svg"
            width={30}
            height={30}
            className="absolute top-1/2 -translate-y-1/2 left-4"
          />
          <Input
            className="focus:border-primary-500  mx-auto transition-all py-[30px] px-[50px] rounded-lg mb-[30px]"
            value={itemsFilter}
            onChange={(e) => setItemsFilter((s) => e.target.value)}
          />
        </div>
        <DrobDownList
          name="Category"
          list={Array.from(
            new Set(originalProducts?.map((item) => item.category))
          )}
          itemCheckAction={() => console.log("i am checked")}
        />
        <DrobDownList
          name="Products"
          list={Array.from(
            new Set(
              originalProducts
                ?.map((item) => item.productName)
                .filter((e) => {
                  if (itemsFilter) {
                    return e.toUpperCase().includes(itemsFilter?.toUpperCase());
                  } else {
                    return e;
                  }
                })
            )
          )}
          itemCheckAction={() => console.log("i am checked")}
        />
      </div>
    </>
  );
};

export default ProductsFilter;
