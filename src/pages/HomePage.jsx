import { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { FavoriteRounded } from "@mui/icons-material";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { MouseAtraction } from "./../constants/Particles";
import { Helmet } from "react-helmet-async";
import BackHomePage from "../assets/BackHomePage.jpeg"
const HomePage = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Helmet>
        <title>محمد امین بادیران | صفحه اصلی</title>
      </Helmet>
      <Box
        sx={{
          backgroundImage:
            `url(${BackHomePage} )`,
          height: "100vh",
          overflowY: "auto",
          overflowX: "hidden",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "contrast(70%)",
        }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={MouseAtraction}
        />
        <Box
          sx={{
            height: "50vh",
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
            mb: "18px",
            color: "white",
          }}
        >
          <Typography variant="h4">
            {" "}
            <FavoriteRounded color="warning" sx={{ fontSize: "30px" }} /> سلام
            دوست من خوبی؟{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <TypeAnimation
            sequence={[
              "به وبسایت من خوش اومدی , عزیزم",
              2000,
              "من فرانت اند دولوپرم",
              1000,
              "من طراح وبم ",
              1000,
              "من عاشق کد زدن و یادگیریم",
              1000,
            ]}
            speed={40}
            style={{ fontSize: "1.5em", fontFamily: "Vazir" }}
            repeat={Infinity}
          />
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
