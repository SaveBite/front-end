import NavBar from "@/components/NavBar";
import SignupForm from "@/components/SignupForm";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <NavBar />
      <div className="mx-auto text-center font-medium">
        <p className="pt-[40px] pb-[16px] text-[28px]">
          Create a Savebite account
        </p>
        <p className="text-[19px]">
          Already have an account?
          <Link href={"/login"} className="pl-[8px] text-primary-500">
            Login
          </Link>
        </p>
      </div>
      <SignupForm />;
    </>
  );
}

export default page;
