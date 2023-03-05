import {
  Typography,
  Box,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import DividerPublic from "../components/common/DividerPublic";
import Skills from "./components/Skills";
const Skill = () => {
  return (
    <>
      <Helmet>
        <title>محمد امین بادیران | مهارت های من</title>
      </Helmet>
      <DividerPublic color="warning" label="صفحه مهارت های من" />

      <Box>
        {" "}
        <Typography variant="h6" sx={{ textAlign: "end", m: 2 }}>
          من چیا بلدم ؟
        </Typography>{" "}
      </Box>
      <Skills />
    </>
  );
};

export default Skill;
