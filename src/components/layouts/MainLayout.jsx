import { ThemeProvider } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { dark_theme, light_theme } from "../theme";

const MainLayout = ({ children, mode }) => {
  let cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  const theme = mode === "dark" ? dark_theme : light_theme;
  return (
    <>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <HelmetProvider>
          
            {/* grid layout */}
            <Grid2 container sx={{ height: "100vh" }}>
              {children}
            </Grid2>
          </HelmetProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default MainLayout;
