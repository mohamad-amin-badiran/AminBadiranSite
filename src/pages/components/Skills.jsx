import { Box, Card, LinearProgress, Typography } from "@mui/material";
import { SkillDiv } from "../../constants/SkillDiv";
import React, { useEffect, useState } from "react";

const Skills = () => {
  let { Html, Css, Js, ReactJS, Bootstrap, Git } = SkillDiv;
  const [HtmlAnimaiton, setHtml] = useState(0);
  const [CssAnimaiton, setCss] = useState(0);
  const [JSAnimaiton, setJs] = useState(0);
  const [ReactJsAnimaiton, setReactJs] = useState(0);
  const [BootstrapAnimaiton, setBootstrap] = useState(0);
  const [GitAnimaiton, setGit] = useState(0);

  useEffect(() => {
    let AnimatoinProgress = setInterval(() => {
      setHtml((oldProgres) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgres + diff, 80);
      });
      setCss((oldProgres) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgres + diff, 75);
      });
      setJs((oldProgres) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgres + diff, 80);
      });
      setReactJs((oldProgres) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgres + diff, 65);
      });
      setBootstrap((oldProgres) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgres + diff, 75);
      });
      setGit((oldProgres) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgres + diff, 55);
      });
    }, 50);
    return () => {
      clearInterval(AnimatoinProgress);
    };
  }, []);
  return (
    <>
      <Card sx={{ m: 5, py: 3, backgroundColor: "gray" }}>
        <Typography>من توی اینا مهارت دارم (البته ریا نباشه :))</Typography>
        <Box
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "block",
              lg: "flex",
              xl: "flex",
            },
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "80%", mx: 4, my: 2, background: "" }}>
            <Box component="img" src={Html.icon} width={40} />
            <Typography>{Html.name}</Typography>
            <LinearProgress
              sx={{ height: "13px", borderRadius: "5px", mt: 1 }}
              variant="determinate"
              value={HtmlAnimaiton}
              color={Html.color}
            />
          </Box>
          <Box sx={{ width: "80%", mx: 4, my: 2, background: "" }}>
            <Box component="img" src={Css.icon} width={40} />
            <Typography>{Css.name}</Typography>
            <LinearProgress
              sx={{ height: "13px", borderRadius: "5px", mt: 1 }}
              variant="determinate"
              value={CssAnimaiton}
              color={Css.color}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "block",
              lg: "flex",
              xl: "flex",
            },
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "80%", mx: 4, my: 2, background: "" }}>
            <Box component="img" src={ReactJS.icon} width={40} />
            <Typography>{ReactJS.name}</Typography>
            <LinearProgress
              sx={{ height: "13px", borderRadius: "5px", mt: 1 }}
              variant="determinate"
              value={ReactJsAnimaiton}
              color={ReactJS.color}
            />
          </Box>
          <Box sx={{ width: "80%", mx: 4, my: 2, background: "" }}>
            <Box component="img" src={Js.icon} width={40} />
            <Typography>{Js.name}</Typography>
            <LinearProgress
              sx={{ height: "13px", borderRadius: "5px", mt: 1 }}
              variant="determinate"
              value={JSAnimaiton}
              color={Js.color}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "block",
              lg: "flex",
              xl: "flex",
            },
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "80%", mx: 4, my: 2, background: "" }}>
            <Box component="img" src={Git.icon} width={40} />
            <Typography>{Git.name}</Typography>
            <LinearProgress
              sx={{ height: "13px", borderRadius: "5px", mt: 1 }}
              variant="determinate"
              value={GitAnimaiton}
              color={Git.color}
            />
          </Box>
          <Box sx={{ width: "80%", mx: 4, my: 2, background: "" }}>
            <Box component="img" src={Bootstrap.icon} width={40} />
            <Typography>{Bootstrap.name}</Typography>
            <LinearProgress
              sx={{ height: "13px", borderRadius: "5px", mt: 1 }}
              variant="determinate"
              value={BootstrapAnimaiton}
              color={Bootstrap.color}
            />
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default Skills;
