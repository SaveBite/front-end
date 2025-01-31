import Navbar from "@/components/features/Navbar";
import Sidebar from "@/components/features/Sidebar";
import React from "react";
function Layout() {
  return (
    <div className="w-full min-h-screen grid grid-cols-[50px_1fr] sm:grid-cols-[250px_1fr]">
      <div className="border-r">
        <Sidebar />
      </div>

      <div className="flex flex-col w-full">
        <div className="h-[80px] w-full border-b =">
          <Navbar />
        </div>
        <div className="flex justify-center items-center h-screen">
    </div>
          {/* <Sidebar /> */}
        <div className="flex-1 p-4">content</div>
      </div>
    </div>
  );
}

export default Layout;
