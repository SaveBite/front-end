"use server";
import { currentUser } from "@/helpers/helpers";
import React from "react";

const Dashboard = async () => {
  const { name, email, type, isVerified } = await currentUser();
  console.log(name);

  return (
    <div>
      <div>dashboard</div>
      <p>{name}</p>
    </div>
  );
};

export default Dashboard;
