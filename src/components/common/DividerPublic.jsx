import { Chip, Divider } from "@mui/material";

const DividerPublic = ({ color, label }) => {
  return (
    <>
      <Divider sx={{ mt: 2, fontSize: "50px" }}>
        <Chip
          color={color}
          label={label}
          sx={{ fontSize: "15px" }}
        />
      </Divider>{" "}
    </>
  );
};

export default DividerPublic;
