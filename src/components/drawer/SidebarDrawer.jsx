import { useContext } from "react";
import { Drawer } from "@mui/material";

import MainContext from "./../../context/indexContext";
import DrawerContent from "./DrawerContent";
const SidebarDrawer = ({ Children }) => {
  const { openDrawer, setOpenDrawer } = useContext(MainContext);
  return (
    <>
      <Drawer
        open={openDrawer}
        variant="temporary"
        onClose={() => setOpenDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 260,
          },
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
          },
        }}
      >
        <DrawerContent />
      </Drawer>
    </>
  );
};

export default SidebarDrawer;
