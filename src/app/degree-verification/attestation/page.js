// pages/apply.js
"use client";
// pages/apply.js
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Grid,
  TextField,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Avatar,
  IconButton,
  Paper,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import PrintIcon from "@mui/icons-material/Print";
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

const validationSchema = [
  Yup.object({
    stampNumber: Yup.string().required("Required"),
    attestationType: Yup.string().required("Required"),
    cnicPassport: Yup.string().required("Required"),
  }),
];

const Apply = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);
  const [apiStatus, setApiStatus] = useState(false);
  const [capcha, setCapcha] = useState(false);
  const apiData = [
    {
      stamp: "9878323",
      cnic: "3520103977261",
      name: "Adeel Akram",
      university: "University of the Punjab",
      degree: "Bachlor of Commerce",
    },
    {
      stamp: "9878324",
      cnic: "1730194060657",
      name: "Asif Bashir",
      university: "Comsats University of Science & Technology, Abbotabad",
      degree: "Bachelor of Computer Systems Engineering",
    },
  ];
  const initialValues = {
    stampNumber: "",
    attestationType: "",
    cnicPassport: "",
  };

  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();
      formData.append("stampNumber", values.stampNumber);
      formData.append("attestationType", values.attestationType);
      formData.append("cnicPassport", values.cnicPassport);
      // const data = await postRequest("/api/attestation/getdata", {"stamp":values.stampNumber,"cnic":values.cnicPassport});
      let found =false;
      for (let i = 0; i < apiData.length; i++) {
        if (
          values.stampNumber == apiData[i].stamp &&
          values.cnicPassport == apiData[i].cnic
        ) {
          found=true;
          setData([
            {
              stamp: apiData[i].stamp,
              cnic: apiData[i].cnic,
              name: apiData[i].name,
              university: apiData[i].university,
              degree: apiData[i].degree,
            },
          ]);
          setApiStatus(true);
          setStatus(true);
        }
      }
      if(found==false)
        {
          setApiStatus(true);
          setStatus(false);
        }
    } catch (err) {
      console.log("err", err);
    }
  };
  function recap(value) {
    console.log("Captcha value:", value);
    setCapcha(true);
  }
  return (
    <Box component="main" background="#f9f9fc" mb={12}>
    <div className="d-flex justify-content-center align-items-center sample">
    <h5>Page not found</h5>
    </div>
   
      {/* <Paper
        sx={{
          mt: 3,
          pt: 3,
          pl: 3,
          pr: 3,
          pb: 1,
          boxShadow: " 0 0 5px #d4d4d4",
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          color="#191d28a3"
          fontWeight={700}
          fontSize={16}
          padding="0 0 10px"
          borderBottom="1px solid #dbe0e4"
        >
          DEGREE ATTESTATION VERIFICATION
        </Typography>

        <Box my={5}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema[activeStep]}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {({ setFieldValue, values, errors, touched, resetForm }) => (
              <Form>
                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                      <Field
                        name="attestationType"
                        as={TextField}
                        select
                        label="Attestation Type *"
                        fullWidth
                        variant="outlined"
                        color="success"
                        size="small"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            // - The Input-root, inside the TextField-root
                            "& fieldset": {
                              // - The <fieldset> inside the Input-root
                              borderColor: "#191d28a3", // - Set the Input border
                            },
                            "&:hover fieldset": {
                              borderWidth: "2px",
                              borderColor: "#191d28a3",
                              borderRadius: "5px",
                            },
                          },
                        }}
                      >
                        <MenuItem value="Original">Original</MenuItem>
                        <MenuItem value="Photocopy">Photocopy</MenuItem>
                      </Field>
                      <ErrorMessage
                        name="attestationType"
                        component="div"
                        style={{ color: "red", fontSize: "12px" }}
                      />
                      {!errors.attestationType && (
                        <FormHelperText id="standard-weight-helper-text-email-login">
                          Please select Attestation Type
                        </FormHelperText>
                      )}
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Field
                        name="cnicPassport"
                        as={TextField}
                        label="CNIC/Passport Number *"
                        fullWidth
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            // - The Input-root, inside the TextField-root
                            "& fieldset": {
                              // - The <fieldset> inside the Input-root
                              borderColor: "#191d28a3", // - Set the Input border
                            },
                            "&:hover fieldset": {
                              borderWidth: "2px",
                              borderColor: "#191d28a3",
                              borderRadius: "5px",
                            },
                          },
                        }}
                        size="small"
                        // inputProps={{
                        //   style: {
                        //     height: "20px",
                        //   },
                        // }}
                        color="success"
                        error={Boolean(
                          touched.cnicPassport && errors.cnicPassport
                        )}
                      />
                      <ErrorMessage
                        name="cnicPassport"
                        component="body2"
                        style={{ color: "red", fontSize: "12px" }}
                      />
                      {!errors.cnicPassport && (
                        <FormHelperText id="standard-weight-helper-text-email-login">
                          Please search with cnic/passport number
                        </FormHelperText>
                      )}
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Field
                        name="stampNumber"
                        as={TextField}
                        label="Stamp Number *"
                        fullWidth
                        variant="outlined"
                        color="success"
                        size="small"
                        error={Boolean(
                          touched.stampNumber && errors.stampNumber
                        )}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            // - The Input-root, inside the TextField-root
                            "& fieldset": {
                              // - The <fieldset> inside the Input-root
                              borderColor: "#191d28a3", // - Set the Input border
                            },
                            "&:hover fieldset": {
                              borderWidth: "2px",
                              borderColor: "#191d28a3",
                              borderRadius: "5px",
                            },
                          },
                        }}
                       
                      />
                      <ErrorMessage
                        name="stampNumber"
                        component="div"
                        style={{ color: "red", fontSize: "12px" }}
                      />

                      {!errors.stampNumber && (
                        <FormHelperText id="standard-weight-helper-text-email-login">
                          Please enter stamp number
                        </FormHelperText>
                      )}
                    </Grid>
                    <Grid item xs={4}>
                      <Box className="mainCap">
                        <div className="captcha">
                          <div className="spinner">
                            <label onClick={() => setCapcha(true)}>
                              <input
                                type="checkbox"
                                onclick="$(this).attr('disabled','disabled');"
                              />
                              <span class="checkmark">
                                <span>&nbsp;</span>
                              </span>
                            </label>
                          </div>
                          <div class="text">I'm not a robot</div>
                          <div className="logo">
                            <img
                              src="https://forum.nox.tv/core/index.php?media/9-recaptcha-png/"
                              alt="abc"
                            />
                            <p className="text2">reCAPTCHA</p>
                            <small>Privacy - Terms</small>
                          </div>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                <Grid container spacing={2} mt={5}>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: { xs: "center", md: "flex-start" },
                    }}
                  >
                    {capcha == false ||
                    values.cnicPassport == "" ||
                    values.stampNumber == "" ? (
                      <button type="submit" className="searchBtn">
                        SEARCH
                      </button>
                    ) : (
                      <button type="submit" className="searchBtnActive">
                        SEARCH
                      </button>
                    )}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: { xs: "center", md: "flex-end" },
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <button className="closeBtn">CLOSE</button>
                    <button className="resetBtn" onClick={() => resetForm()}>
                      RESET
                    </button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>

       
        {apiStatus == true && status == true && (
          <>
            <Typography
              component="h1"
              variant="h4"
              color="#191d28a3"
              fontWeight={700}
              fontSize={16}
              padding="0 0 10px"
              borderBottom="1px solid #dbe0e4"
            >
              ATTESTATION DETAILS
            </Typography>

            <Grid container spacing={2} mt={2}>
              <Grid
                item
                xs={12}
                md={12}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <button className="printBtn">
                  <PrintIcon style={{ fontSize: 20, mr: 2 }}></PrintIcon>
                  {"    "}PRINT DETAILS
                </button>
              </Grid>
            </Grid>
            <Grid
              container
              sm={12}
              md={6}
              spacing={2}
              className="box"
              mt={2}
              mb={5}
            >
              <Grid item xs={12} md={12}>
                <Typography
                  component="h1"
                  variant="h4"
                  color="#191d28a3"
                  fontWeight={800}
                  fontSize={14}
                  padding="0 0 10px"
                >
                  Degree Attestation Details
                </Typography>
              </Grid>

              <Grid
                item
                xs={6}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    component="h1"
                    variant="h4"
                    fontWeight={600}
                    color="#94b1bc"
                    fontSize={13}
                    padding="0 0 10px"
                  >
                    NAME ON DEGREE
                  </Typography>
                  <Typography
                    component="h1"
                    variant="h4"
                    color="#191d28a3"
                    fontWeight={600}
                    fontSize={13}
                    padding="0 0 10px"
                  >
                    {data[0].name}
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={6}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    component="h1"
                    variant="h4"
                    fontWeight={600}
                    color="#94b1bc"
                    fontSize={13}
                    padding="0 0 10px"
                  >
                    CNIC
                  </Typography>
                  <Typography
                    component="h1"
                    variant="h4"
                    color="#191d28a3"
                    fontWeight={700}
                    fontSize={13}
                    padding="0 0 10px"
                  >
                    {data[0].cnic}
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    component="h1"
                    variant="h4"
                    fontWeight={600}
                    color="#94b1bc"
                    fontSize={13}
                    padding="0 0 10px"
                  >
                    UNIVERSITY
                  </Typography>
                  <Typography
                    component="h1"
                    variant="h4"
                    color="#191d28a3"
                    fontWeight={600}
                    fontSize={13}
                    padding="0 0 10px"
                  >
                    {data[0].university}
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    component="h1"
                    variant="h4"
                    fontWeight={600}
                    color="#94b1bc"
                    fontSize={13}
                    padding="0 0 10px"
                  >
                    DEGREE TITLE
                  </Typography>
                  <Typography
                    component="h1"
                    variant="h4"
                    color="#191d28a3"
                    fontWeight={600}
                    fontSize={13}
                    padding="0 0 10px"
                  >
                    {data[0].degree}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </>
        )}

        {apiStatus == true && status == false && (
          <>
            <Typography
              component="h1"
              variant="h4"
              color="#191d28a3"
              fontWeight={700}
              fontSize={16}
              padding="0 0 10px"
              borderBottom="1px solid #dbe0e4"
            >
              ATTESTATION DETAILS
            </Typography>
            <Typography
              component="h1"
              variant="h4"
              color="#191d28a3"
              fontWeight={700}
              fontSize={16}
              padding="0 0 10px"
              mt={5}
            >
              Not Found
            </Typography>
          </>
        )}
      </Paper> */}
      {/* <SuccessModal open={open} handleClose={handleClose} /> */}
    </Box>
  );
};

export default Apply;
