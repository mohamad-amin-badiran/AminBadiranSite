import { useContext } from "react";
import { Box, Fab } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MainContext from "./../../context/indexContext"
const DrawerActionButton = () => {
  const {setOpenDrawer} = useContext(MainContext)
  return (
    <>
      <Box sx={{ display: { xs: "block", sm: "block", md: "none" }, m: 2, position:'absolute' }}>
        <Fab color="warning" size="medium" onClick={() => setOpenDrawer(true)}>
          <MenuIcon />
        </Fab>
      </Box>
    </>
  );
};

export default DrawerActionButton;
