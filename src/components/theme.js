import { createTheme } from "@mui/material";

export const light_theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: "Vazir",
  },
});

export const dark_theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "Vazir",
  },
});