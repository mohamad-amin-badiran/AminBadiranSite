import { Box, Typography } from "@mui/material";
import { FavoriteRounded, CopyrightRounded } from "@mui/icons-material";

const SidebarFooter = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Typography
          variant="body2"
          sx={{ display: "flex", alignItems: "center" }}
        >
          ساخته شده توسط <FavoriteRounded color="error" />
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Typography
          variant="body2"
          sx={{ display: "flex", alignItems: "center" }}
        >
          قانون کپی رایت  <CopyrightRounded sx={{ fontSize: 18 }} />
        </Typography>
      </Box>
    </>
  );
};

export default SidebarFooter;
