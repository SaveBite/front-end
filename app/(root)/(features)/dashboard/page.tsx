import React from "react";
import Info from "@/components/dashboard/Info";
import Header from "@/components/dashboard/Header";
import ManageOperations from "@/components/dashboard/ManageOperations";
import CardList from "@/components/dashboard/CardList";
import ItemsTable from "@/components/dashboard/ItemsTable";

const page = () => {
  return (
    <div className="bg-extra-gray min-h-screen">
      <Header />
      <Info />
      <CardList />
      <ManageOperations />
      <ItemsTable />
    </div>
  );
};

export default page;
