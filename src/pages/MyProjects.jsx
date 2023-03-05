import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Slide,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import DividerPublic from "../components/common/DividerPublic";

import { Projects } from "../constants/SkillDiv";
const MyProjects = () => {
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
        <title>محمد امین بادیران | نمونه کار های من</title>
      </Helmet>
      <DividerPublic color="warning" label="صفحه نمونه کارام" />
        <Grid2
          container
          sx={{ mr: 2, mt: 4, display: "flex" }}
        >
          {Projects.map((project, index) => (
            <Slide direction="right" in={loading}>
              <Grid2 xs={12} md={6} lg={4}>
                <Card key={index} style={{ maxWidth: 400, margin: "5px 10px" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="170"
                      src={project.img.Imgporject1}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ direction: "ltr" }}
                      >
                        {project.text}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      بازدید
                    </Button>
                  </CardActions>
                </Card>
              </Grid2>
            </Slide>
          ))}
        </Grid2>
    </>
  );
};

export default MyProjects;
