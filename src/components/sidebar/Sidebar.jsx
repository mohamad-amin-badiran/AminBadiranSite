import { useState } from "react";

import DrawerContent from "../drawer/DrawerContent";
import SidebarDrawer from "../drawer/SidebarDrawer";

const Sidebar = () => {
  return (
    <>
      <DrawerContent />

      <SidebarDrawer />
    </>
  );
};

export default Sidebar;
