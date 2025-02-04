"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useStock } from "@/contexts/Stock";
import { Input } from "../ui/input";
import DrobDownList from "./DrobDownList";

const ProductsFilter = () => {
  const { showFilters, setShowFilters } = useStock()!;
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
        className={`w-[500px] p-[20px] transition-all h-[1000px] bg-white fixed ${
          showFilters === false ? `-right-[500px]` : `right-0`
        } z-[100] top-[60px]`}
      >
        <div className="flex justify-between items-center">
          <span className="h5medium">Filter</span>
          <Image src="/x.svg" alt="x.svg" width={25} height={25} />
        </div>
        <p className="text-extra-text-gray title2 mb-[40px]">
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
          <Input className="focus:border-primary-500  mx-auto transition-all py-[30px] px-[50px] rounded-lg mb-[30px]" />
        </div>
        <DrobDownList
          name="category"
          list={["a", "b", "c"]}
          itemCheckAction={() => console.log("i am checked")}
        />
        <DrobDownList
          name="category"
          list={["1", "2", "3"]}
          itemCheckAction={() => console.log("i am checked")}
        />
      </div>
    </>
  );
};

export default ProductsFilter;
