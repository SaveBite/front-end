import LayoutHeader from "@/components/layout/LayoutHeader";
import LayoutNavigationList from "@/components/layout/LayoutNavigationList";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <LayoutHeader />
      <div className="flex min-h-screen">
        <LayoutNavigationList />
        <div className="bg-[#f6f6f6] flex-1">{children}</div>
      </div>
    </div>
  );
};

export default layout;
