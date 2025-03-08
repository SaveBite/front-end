import React from "react";
import Info from "@/components/dashboard/Info";
import Header from "@/components/dashboard/Header";
import ManageOperations from "@/components/dashboard/ManageOperations";
import CardList from "@/components/dashboard/CardList";
import ItemsTable from "@/components/dashboard/ItemsTable";
import { fetchProducts } from "@/actions/actions";

const Page = async ({ searchParams }: { searchParams: any }) => {
  const {
    dashboardFilter,
    dashboardOrder,
    dashboardSearchQuery,
    dashboardStock,
  } = searchParams;
  const { statistics, products } = (await fetchProducts(
    dashboardStock ?? "All"
  )) || {
    statistics: {},
    products: [],
  };
  console.log(dashboardFilter);
  console.log(products);
  const filteredProducts = [...products]
    .sort((a: any, b: any) => {
      if (dashboardFilter === "productName" || dashboardFilter === "category") {
        if (dashboardOrder === "desc") {
          return a[dashboardFilter]
            .toLowerCase()
            .localeCompare(b[dashboardFilter].toLowerCase());
        } else {
          return b[dashboardFilter]
            .toLowerCase()
            .localeCompare(a[dashboardFilter].toLowerCase());
        }
      } else {
        if (dashboardOrder === "desc") {
          return a[dashboardFilter] - b[dashboardFilter];
        } else {
          return b[dashboardFilter] - a[dashboardFilter];
        }
      }
    })
    .filter((item: any) =>
      dashboardSearchQuery
        ? item.productName
            .toLowerCase()
            .includes(dashboardSearchQuery.toLowerCase())
        : item
    );
  console.log(filteredProducts);

  return (
    <div>
      <Header />
      <Info />
      <CardList statistics={statistics} />
      <ManageOperations />
      <ItemsTable products={filteredProducts} />
    </div>
  );
};

export default Page;
