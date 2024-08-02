import React from "react";

import Sidebar from "@/components/sidebar";

const RoutesLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="overflow-auto ">
      <Sidebar />

      {children}
    </div>
  );
};

export default RoutesLayout;
