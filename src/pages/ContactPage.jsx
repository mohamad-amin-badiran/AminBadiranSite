import {
  TextField,
  Box,
  Card,
  Button,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import PanToolIcon from "@mui/icons-material/PanTool";
import { Helmet } from "react-helmet-async";
import { contactValidationSchema } from "./validation/ContactValidation";
import DividerPublic from "../components/common/DividerPublic";

const ContactPage = () => {
  const contactInputNames = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
  };
  const formik = useFormik({
    initialValues: contactInputNames,
    onSubmit: (values) => {
      console.log("Form Values: ", values);
    },
    validationSchema: contactValidationSchema,
  });
  return (
    <>
      <Helmet>
        <title>محمد امین بادیران | ارتباط با من</title>
      </Helmet>
      <DividerPublic color="warning" label="صفحه ارتباط با من" />

      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <Grid2 container>
          <Grid2 xs={12} lg={9}>
            <Card sx={{ mx: 3, mt: 3, px: 3, pt: 4, pb: 2, direction: "ltr" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <TextField
                  variant="outlined"
                  multiline
                  label="نام و نام خانوادگی"
                  name="fullname"
                  color="warning"
                  helperText={
                    formik.touched.fullname ? formik.errors.fullname : null
                  }
                  error={Boolean(
                    formik.touched.fullname && formik.errors.fullname
                  )}
                  value={formik.values?.fullname}
                  onChange={formik.handleChange}
                  sx={{ width: 1, mr: 1 }}
                />
                <TextField
                  variant="outlined"
                  multiline
                  label="ایمیل"
                  name="email"
                  color="warning"
                  helperText={formik.touched.email && formik.errors.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  value={formik.values?.email}
                  onChange={formik.handleChange}
                  sx={{ width: 1, my: 2 }}
                />
              </Box>
              <TextField
                variant="outlined"
                multiline
                id="outlined-required"
                label="عنوان"
                name="subject"
                color="warning"
                helperText={
                  formik.touched.subject ? formik.errors.subject : null
                }
                error={Boolean(formik.touched.subject && formik.errors.subject)}
                value={formik.values?.subject}
                onChange={formik.handleChange}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                variant="outlined"
                multiline
                id="outlined-required"
                label="متن پیام"
                color="warning"
                name="message"
                helperText={
                  formik.touched.message ? formik.errors.message : null
                }
                error={Boolean(formik.touched.message && formik.errors.message)}
                value={formik.values?.message}
                onChange={formik.handleChange}
                rows={4}
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                color="warning"
                sx={{ mt: 2 }}
                fullWidth
              >
                ارسال
              </Button>
            </Card>
          </Grid2>
          <Grid2 xs={0} sm={0} md={3} sx={{display:{
            xs:"none",
            lg:"block"
          }}}>
            <Typography>
              در مورد هرچی که از من سوال داری بپرس <br />
              به من
              <a
                href="mailto:mhmadaminb1385@gmail.com"
                alt="email"
                style={{ color: "gold" }}
              >
                {" "}
                ایمیل{" "}
              </a>
              بزن
              <PanToolIcon
                fontSize="4"
                sx={{ direction: "ltr" }}
                color="warning"
              />
            </Typography>
          </Grid2>
        </Grid2>
      </form>
    </>
  );
};

export default ContactPage;
