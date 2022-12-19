import React from 'react'
import {
  Stack,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import { useEffect } from "react";
import axios from "axios"
import TextareaAutosize from '@mui/base/TextareaAutosize';


const initialValues = {
  Title: "",
  Name: "",
  State: "",
  AT: "",
  Property: "",
  Location: "",
  Taxes: "",
  Land:"",
};
const LocationDetails = () => {
  const [ATType, setATType] = React.useState("Municipality");

  const validationSchema = Yup.object().shape({
    Title: Yup.string().required("Title is required"),
    Name: Yup.string().required("FirstName is required"),
    State: Yup.string().required("Department is required"),
    AT: Yup.string().required("Supervisor time is required"),
  });
  console.log("attype value is ", ATType)


  const onSubmit = async (values, action) => {
    console.log("form submitted");
    console.log("action", action);
    console.log("value", values);
  }
  
  const handleReset = (resetForm) => {
    resetForm();
  };



  return (
    <div>
      <Stack
        style={{
          // border: "2px solid red",
          margin: "3rem 5rem",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <Stack direction="column" spacing={2}>
                <Stack direction="row" spacing={1}>
                  <Field
                    as={TextField}
                    name="Name"
                    placeholder="FirstName"
                    value={props.values.Name}
                    error={props.errors.Name && props.touched.Name}
                    fullWidth
                    label="Name"
                  // onChange={handleChangeName}
                  />
                  <div style={{ color: "red" }}>
                    <ErrorMessage name="Name" />
                  </div>
                  <FormControl fullWidth sx={{ minWidth: 150 }}>
                    <InputLabel id="demo-simple-select-label">
                      State
                    </InputLabel>
                    <Field
                      as={Select}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={props.values.State}
                      error={
                        props.errors.State && props.touched.State
                      }
                      label="State"
                      name="State"
                    >
                      <MenuItem value={"WB"}>
                        West Bengal
                      </MenuItem>
                      <MenuItem value={"AP"}>
                        Andhra Pradesh
                      </MenuItem>
                      <MenuItem value={"KT"}>
                        Karnataka
                      </MenuItem>
                    </Field>
                  </FormControl>
                  <div style={{ color: "red" }}>
                    <ErrorMessage name="State" />
                  </div>
                  <FormControl fullWidth sx={{ minWidth: 150 }}>
                    <InputLabel id="demo-simple-select-label">
                      Administrative Type
                    </InputLabel>
                    <Field
                      as={Select}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={props.values.AT}
                      error={
                        props.errors.AT &&
                        props.touched.AT
                      }
                      label="Maintenance Type"
                      name="AT"
                      onClick={setATType(props.values.AT)}
                    >
                      <MenuItem value={"Municipality"}>Municipality</MenuItem>
                      <MenuItem value={"Panchyat"}>Panchyat</MenuItem>
                    </Field>
                  </FormControl>
                  <div style={{ color: "red" }}>
                    <ErrorMessage name="AT" />
                  </div>
                </Stack>



                { ATType==="Municipality"?
                <>
                  <Stack direction={"row"} spacing={3}>
                    <FormControl fullWidth style={{ width: "50%" }}>
                      <InputLabel id="demo-simple-select-label">
                        Property
                      </InputLabel>
                      <Field
                        as={Select}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.values.Property}
                        error={
                          props.errors.Property &&
                          props.touched.Property
                        }
                        label="Property"
                        name="Property"
                      // onClick={setATType(props.values.Property)}
                      >
                        <MenuItem value={"commercial"}>Commercial</MenuItem>
                        <MenuItem value={"personal"}>Personal</MenuItem>
                      </Field>
                    </FormControl>

                    <Field
                      style={{ width: "50%" }}
                      as={TextareaAutosize}
                      value={props.values.Location}
                      //error={props.errors.Location && props.touched.Location}
                      label="Location"
                      placeholder="Please enter the Location"
                      name="Location"
                      multiline
                      rows={3}
                      fullWidth
                    ></Field>


                    <FormControl fullWidth style={{ width: "50%" }}>
                      <InputLabel id="demo-simple-select-label">
                        Taxes
                      </InputLabel>
                      <Field
                        as={Select}
                        labelId="demo-simple-select"
                        id="demo-simple"
                        value={props.values.Taxes}
                        error={
                          props.errors.Taxes &&
                          props.touched.Taxes
                        }
                        label="Taxes"
                        name="Taxes"
                      // onClick={setATType(props.values.Property)}
                      >
                        <MenuItem value={"Land"}>Land</MenuItem>
                        <MenuItem value={"LandAndProperty"}>Land + Property</MenuItem>
                      </Field>
                    </FormControl>

                  </Stack>
                </>
                :<>
                <Stack direction={"row"} spacing={3}>
                    <FormControl fullWidth style={{ width: "50%" }}>
                      <InputLabel id="demo-simple-select-label">
                        Land
                      </InputLabel>
                      <Field
                        as={Select}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.values.Land}
                        error={
                          props.errors.Land &&
                          props.touched.Land
                        }
                        label="Land"
                        name="Land"
                      // onClick={setATType(props.values.Property)}
                      >
                        <MenuItem value={"Vastu"}>Vastu</MenuItem>
                        <MenuItem value={"Agriculture"}>Agriculture</MenuItem>
                      </Field>
                    </FormControl>

                    <Field
                      style={{ width: "50%" }}
                      as={TextareaAutosize}
                      value={props.values.Location}
                      //error={props.errors.Location && props.touched.Location}
                      label="Location"
                      placeholder="Please enter the Location"
                      name="Location"
                      multiline
                      rows={3}
                      fullWidth
                    ></Field>


                    <FormControl fullWidth style={{ width: "50%" }}>
                      <InputLabel id="demo-simple-select-label">
                        Taxes
                      </InputLabel>
                      <Field
                        as={Select}
                        labelId="demo-simple-select"
                        id="demo-simple"
                        value={props.values.Taxes}
                        error={
                          props.errors.Taxes &&
                          props.touched.Taxes
                        }
                        label="Taxes"
                        name="Taxes"
                      // onClick={setATType(props.values.Property)}
                      >
                        <MenuItem value={"Land"}>Land</MenuItem>
                        <MenuItem value={"LandAndProperty"}>Land + Property</MenuItem>
                      </Field>
                    </FormControl>

                  </Stack>
                </>

                }

              </Stack>

              <Stack
                spacing={3}
                direction="row"
                mt={7}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button type="submit" variant="contained">
                  Submit
                </Button>
                <Button
                  value={"Reset"}
                  style={{ backgroundColor: "grey", color: "white" }}
                  onClick={handleReset.bind(null, props.resetForm)}
                  type="button"
                >
                  Clear All
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Stack>
    </div>
  )
}

export default LocationDetails