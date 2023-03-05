import { Divider } from "@mui/material";
import {
  SidebarHeader,
  SidebarTabs,
  SidebarFooter,
} from "../sidebar/ImportComponent";

const DrawerContent = () => {
  return (
    <>
      <SidebarHeader />

      <Divider variant="middle" />

      <SidebarTabs />

      <Divider variant="middle" sx={{ mb: 1 }} />

      <SidebarFooter />
    </>
  );
};

export default DrawerContent;
