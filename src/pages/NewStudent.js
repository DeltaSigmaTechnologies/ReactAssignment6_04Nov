import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Formik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import {TextField, FormControl, MenuItem, Select, InputLabel, Typography} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';

const NewStudent = () => {
    const handleFormSubmit=()=>{
        console.log("Done");
    }
    const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <>
      <Helmet><title>New Student Registration</title></Helmet>
      <Typography variant="h4">
            New Student Registration
      </Typography>
        <Box sx={{padding:'10%'}}>
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
        >
        {({
             values,
             errors,
             touched,
             handleBlur,
             handleChange,
             handleSubmit,
        }) => ( <form onSubmit={handleSubmit}>
                    <Box>
                        <TextField
                        type="text"
                        label="Full Name"
                        name="name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={!!touched.name && !!errors.name}
                        helperText={touched.name && errors.name}
                        sx={{gridColumn:"span 2"}}
                        />

                        <TextField
                        type="number"
                        label="Roll Number"
                        name="rollno"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={!!touched.rollno && !!errors.rollno}
                        helperText={touched.rollno && errors.rollno}
                        sx={{gridColumn:"span 2"}}
                        />

                        <TextField
                        type="number"
                        label="Phone no."
                        name="phone"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={!!touched.phone && !!errors.phone}
                        helperText={touched.phone && errors.phone}
                        sx={{gridColumn:"span 2"}}
                        />

                        <TextField
                        type="text"
                        label="Email ID"
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={!!touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                            sx={{gridColumn:"span 2"}}
                        />

                        <FormControl fullWidth>
                          <InputLabel id="semester">Semester:</InputLabel>
                            <Select 
                              labelId="Semester"
                              id="semester"
                              label="Semester"
                              // onChange={handleChanging}
                              sx={{gridcolumn: "span 2"}}
                              name="semester"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              error={!!touched.semester && !!errors.semester}
                              helperText={touched.semester && errors.semester}
                            >
                              <MenuItem value={0}>First</MenuItem>
                              <MenuItem value={1}>Second</MenuItem>
                              <MenuItem value={2}>Third</MenuItem>
                              <MenuItem value={3}>Fourth</MenuItem>
                              <MenuItem value={4}>Fifth</MenuItem>
                              <MenuItem value={5}>Sixth</MenuItem>
                              <MenuItem value={6}>Seventh</MenuItem>
                              <MenuItem value={7}>Eighth</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth>
                          <InputLabel id="year">Year:</InputLabel>
                            <Select 
                              labelId="Year"
                              id="year"
                              label="Year"
                              sx={{gridcolumn: "span 2"}}
                              name="year"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              error={!!touched.year && !!errors.year}
                              helperText={touched.year && errors.year}
                            >
                              <MenuItem value={0}>First</MenuItem>
                              <MenuItem value={1}>Second</MenuItem>
                              <MenuItem value={2}>Third</MenuItem>
                              <MenuItem value={3}>Fourth</MenuItem>
                            </Select>
                        </FormControl>
                        
                        <TextField
                        type="number"
                        label="CGPA"
                        name="cgpa"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={!!touched.cgpa && !!errors.cgpa}
                        helperText={touched.cgpa && errors.cgpa}
                        sx={{gridColumn:"span 2"}}
                        />

                        <TextField
                        type="text"
                        label="Department"
                        name="department"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={!!touched.department && !!errors.department}
                        helperText={touched.department && errors.department}
                        sx={{gridColumn:"span 2"}}
                        />

                        <TextField
                        type="text"
                        label="College"
                        name="college"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={!!touched.college && !!errors.college}
                        helperText={touched.college && errors.college}
                        sx={{gridColumn:"span 2"}}
                        />

                        <TextField
                        type="text"
                        label="City"
                        name="city"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={!!touched.city && !!errors.city}
                        helperText={touched.city && errors.city}
                        sx={{gridColumn:"span 2"}}
                        />

                        <TextField
                        type="text"
                        label="Skills"
                        name="skills"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={!!touched.skills && !!errors.skills}
                        helperText={touched.skills && errors.skills}
                        sx={{gridColumn:"span 2"}}
                        />

                        <FormControl fullWidth>
                          <InputLabel id="course">Course to Enroll:</InputLabel>
                            <Select 
                              labelId="Course"
                              id="course"
                              label="Course"
                              sx={{gridcolumn: "span 2"}}
                              name="course"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              error={!!touched.course && !!errors.course}
                              helperText={touched.course && errors.course}
                            >
                              <MenuItem value={0}>AI</MenuItem>
                              <MenuItem value={1}>Web</MenuItem>
                              <MenuItem value={2}>Security</MenuItem>
                              <MenuItem value={3}>Design</MenuItem>
                            </Select>
                        </FormControl>
                        
                    </Box>
                    <br/><br/>
                    <Button type="submit" color="primary" variant="contained">Register Now</Button>
                </form>
        )}
        </Formik>
        </Box>
    </>
  );
};

const initialValues={
    name:"",
    rollno:"",
    email:"",
    phone:"",
    semester:"",
    year:"",
    cgpa:"",
    department:"",
    college:"",
    city:"",
    skills:"",
    course:"",
};
const checkoutSchema = yup.object().shape({
    name: yup.string().required("required*"),
    rollno: yup.string().required("required*"),
    email: yup.string().required("required*"),
    phone: yup.string().required("required*"),
    semester: yup.string().required("required*"),
    year: yup.string().required("required*"),
    cgpa:yup.string().required("required*"),
    department: yup.string().required("required*"),
    college:yup.string().required("required*"),
    city:yup.string().required("required*"),
    skills:yup.string().required("required*"),
    course: yup.string().required("required*"),
    });

export default NewStudent;