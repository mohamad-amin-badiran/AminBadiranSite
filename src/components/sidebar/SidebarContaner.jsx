import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import grey from "@mui/material/colors/grey";
import { useTheme } from "@mui/material";
const SidebarContaner = ({ children }) => {
  const theme = useTheme();
  return (
    <>
      <Grid2
        xs={0}
        sm={0}
        md={3}
        lg={3}
        xl={2}
        sx={{
          backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[800],
          color: "white",
          textAlign: "center",
          height:"100vh",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {children}
      </Grid2>
    </>
  );
};

export default SidebarContaner;
