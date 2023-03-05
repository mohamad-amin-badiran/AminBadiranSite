import { useContext } from "react";
import { Box, Fab } from "@mui/material";
import MainContext from "./../../context/indexContext";
import {useTheme} from "@mui/material/styles";
import {Brightness3Rounded , WbSunnyRounded} from '@mui/icons-material';

const LightDarkBtn = () => {
  const { handleMode } = useContext(MainContext);
  const theme = useTheme();
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "block" }, m: 2, position:'absolute' }}>
        <Fab color="warning" size="medium" onClick={handleMode}>
          {theme.palette.mode === "dark" ? <WbSunnyRounded /> : <Brightness3Rounded />}     
        </Fab>
      </Box>
    </>
  );
};

export default LightDarkBtn;