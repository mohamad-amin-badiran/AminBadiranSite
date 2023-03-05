import { Avatar, Typography, Card, Slide } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import DividerPublic from "../components/common/DividerPublic";

import meImg from "./../assets/me1.png";
const AboutPage = () => {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    return () => {
      setloading(false);
    };
  }, []);
  return (
    <>
      <Helmet>
        <title>محمد امین بادیران | درباره من</title>
      </Helmet>
      <DividerPublic color="warning" label="صفحه دربار ی من" />

      <Box>
        {" "}
        <Typography variant="h6" sx={{ textAlign: "end", m: 2 }}>
          من کیم ؟
        </Typography>{" "}
      </Box>
      <Grid2 container>
        <Grid2 xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Slide direction="down" in={loading}>
            <Card sx={{ backgroundColor: "grey" }}>
              <Box
                sx={{
                  m: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  variant="rounded"
                  src={meImg}
                  sx={{
                    width: 180,
                    height: 180,
                    mx: 10,
                    display: {
                      xs: "none",
                      sm :"block",
                      md: "block",
                    },
                  }}
                >
                  AN
                </Avatar>
                <Typography variant="body1" color={"black"}>
                  اسمم : محمد امینه <br />
                  سنم : 17 <br />
                  محل زندگیم : مشهد <br />
                  amin@gmail.com : ایمیلم <br />
                  شماره تلفنم : 0910315105 <br />
                </Typography>
              </Box>
            </Card>
          </Slide>
        </Grid2>
      </Grid2>
      <Grid2 container>
        <Grid2
          xs={12}
          sx={{ mt: 3, display: "flex", justifyContent: "center" }}
        >
          <Slide direction="left" in={loading}>
            <Card sx={{ backgroundColor: "grey", mx: 5, direction: "ltr" }}>
              <Box
                sx={{
                  m: 3,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography>
                  خب درباره خودم نگفتم , من امینم و یه فرانت اند کارم و از 15
                  سالگی با برنامه نویسی آشنا شدم و از پایتون شروع کردم و یهو
                  اومدم سمت وب و کلا چیزای زیادی کار کردمو هوزه های مختلف و
                  امتحان کردم مث بازی سازی ه*ک و امنیت (: (به قول دوستمو آقای
                  قاسمی به کسی نگیا) و اومدم وب و هدفم اینه که تو این هوزه فول
                  استک بشم . ممنونم که وقت گذاشتی امید وارم هرجاکه هستی موفق
                  باشی .
                </Typography>
              </Box>
            </Card>
          </Slide>
        </Grid2>
      </Grid2>
    </>
  );
};

export default AboutPage;
