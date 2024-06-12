import React from "react";
import MenuOptions from "./menu-options";

const Sidebar = async () => {
  return (
    <>
      <MenuOptions defaultOpen={true} />
      <MenuOptions />
    </>
  );
};

export default Sidebar;
