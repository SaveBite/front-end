import LayoutHeader from "@/components/layout/LayoutHeader";
import LayoutNavigationList from "@/components/layout/LayoutNavigationList";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <LayoutHeader />
      <div className="flex">
        <LayoutNavigationList />
        {children}
      </div>
    </div>
  );
};

export default layout;
