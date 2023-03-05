import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {useTheme} from "@mui/material/styles"
import { grey } from "@mui/material/colors";
const ContentContaner = ({children}) => {
  const theme = useTheme();
  return (
    <>
      <Grid2
        xs={12}
        md={9}
        xl={10}
        sx={{ backgroundColor: theme.palette.mode === "dark" ? grey[600] : "#9e9e9e" , textAlign: "center" }}
      >
        {children}
      </Grid2>
    </>
  );
};

export default ContentContaner;
