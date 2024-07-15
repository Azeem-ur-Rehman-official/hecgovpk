"use client";
import React, { useState } from "react";

// material-ui
import {
  Button,
  Container,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";

export async function postRequest(param, data) {
  try {
    const response = await axios.post(param, data);

    return response;
  } catch (error) {
    console.error("Error creating post:", error);
    return error;
  }
}

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <Formik
      initialValues={{
        name: "",

        cnic: "",
        university: "",
        degree: "",
        stamp: "",
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Required"),
        cnic: Yup.string().required("Required"),
        university: Yup.string().required("Required"),
        degree: Yup.string().required("Required"),
        stamp: Yup.string().required("Required"),
      })}
      onSubmit={async (
        values,
        { setErrors, setStatus, setSubmitting, resetForm }
      ) => {
        try {
          setStatus({ success: true });
          setLoading(true);
          setSubmitting(true);
          resetForm();

          const data = await postRequest("/api/attestation", values);
          setLoading(false);
          setSuccess(true);
          console.log("dara", data);
          if (data.status == 200) {
            setLoading(false);
            setSuccess(true);
            if (data.data.success == true)
              setMessage("Your data has been submitted Successfully");
            else 
            setMessage("Data Already Exist");
          } else setLoading(false);
        } catch (err) {
          console.error(err);
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
          setLoading(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Container
            sx={{
              marginTop: "50px",
              backgroundColor: "#ffffff",
              padding: "30px",
              borderRadius: "30px",
            }}
          >
            <Typography variant="h4" fontWeight={800} py={3}>
              Attestation Submision Form
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="name">Name on Degree*</InputLabel>
                  <OutlinedInput
                    id="name"
                    size="small"
                    type="name"
                    value={values.name}
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="John smith"
                    fullWidth
                    error={Boolean(touched.name && errors.name)}
                  />
                  {touched.name && errors.name && (
                    <FormHelperText error id="helper-text-name">
                      {errors.name}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="cnic">CNIC/Passport Number*</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.cnic && errors.cnic)}
                    id="cnic"
                    type="cnic"
                    value={values.cnic}
                    size="small"
                    name="cnic"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="+00 00000000"
                    inputProps={{}}
                  />
                  {touched.cnic && errors.cnic && (
                    <FormHelperText error id="helper-text-cnic">
                      {errors.cnic}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="university">University*</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.university && errors.university)}
                    id="university"
                    type="university"
                    value={values.university}
                    size="small"
                    name="university"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="university.."
                    inputProps={{}}
                  />
                  {touched.university && errors.university && (
                    <FormHelperText error id="helper-text-university">
                      {errors.university}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="degree">Degree Title*</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.degree && errors.degree)}
                    id="degree"
                    type="degree"
                    value={values.degree}
                    size="small"
                    name="degree"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="degree.."
                    inputProps={{}}
                  />
                  {touched.degree && errors.degree && (
                    <FormHelperText error id="helper-text-degree">
                      {errors.degree}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="stamp">Stamp Number*</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.stamp && errors.stamp)}
                    id="stamp"
                    type="stamp"
                    value={values.stamp}
                    size="small"
                    name="stamp"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="stamp.."
                    inputProps={{}}
                  />
                  {touched.stamp && errors.stamp && (
                    <FormHelperText error id="helper-text-stamp">
                      {errors.stamp}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                {loading == false ? (
                  <Button
                    disableElevation
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                      borderRadius: "30px",
                      maxHeight: "40px",

                      fontWeight: 700,
                      width: "120px",
                      background: "#213b75",
                      "&:hover": {
                        background: "#001e60",
                      },
                    }}
                  >
                    Submit
                  </Button>
                ) : (
                  <Button
                    disableElevation
                    disabled={true}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                      borderRadius: "30px",
                      maxHeight: "40px",

                      fontWeight: 700,
                      width: "120px",
                      background: "#213b75",
                      "&:hover": {
                        background: "#001e60",
                      },
                    }}
                  >
                    Loading
                  </Button>
                )}
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              {success == true && (
                <Grid item xs={12}>
                  <Typography padding={5} sx={{ backgroundColor: "#e9fc7c" }}>
                    <b>{message}</b>
                    <br></br>
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Container>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
