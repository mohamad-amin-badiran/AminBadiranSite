import { Box, Typography, IconButton, Slide } from "@mui/material";
import { RandomReveal } from "react-random-reveal";
import { AlphaPersian } from "../../constants/AlphaPersian";
import { GitHub, Telegram, Instagram } from "@mui/icons-material";
import { useEffect, useState } from "react";
import LightDarkBtn from "./LightDarkBtn";

const SidebarHeader = () => {
  const [loading,setloading] = useState(false);
  useEffect(() => {
    setloading(true)
    return () => {
      setloading(false)
    }
  },[])
  return (
    <>
    <LightDarkBtn /> 
      <Box sx={{ mt: 2.5 }}>
        <Slide direction="left" in={loading}>
        <img
          src={require("../../assets/IMG_20190207_104157_889.jpg")}
          alt="mohammad amin"
          width={60}
          height={60}
          style={{
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            borderRadius: "35%",
          }}
        />
        </Slide>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ mt: 1 }}>
            <RandomReveal
              isPlaying
              duration={2}
              characterSet={AlphaPersian}
              characters="محمد امین بادیران"
            />
          </Typography>
          <Typography variant="caption" sx={{ mt: 2 }}>
            یک توسعه دهنده وب
          </Typography>
        </Box>
        <Box sx={{display:"flex" , justifyContent:"center"}}>
          <IconButton aria-label="Githab">
            <a href="https://github.com/mohamad-amin-badiran" target="_blank" rel="noopenre noreferrer">
              <GitHub color="error"/>
            </a>
          </IconButton>
          <IconButton  aria-label="Instagram">
            <a href="#" target="_blank" rel="noopenre noreferrer">
              <Instagram color="secondary"/>
            </a>
          </IconButton>
          <IconButton  aria-label="Telegram">
            <a href="#" target="_blank" rel="noopenre noreferrer">
              <Telegram color="primary" />
            </a>
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default SidebarHeader;
