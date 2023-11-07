import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import useMediaQuery from '@mui/material/useMediaQuery'
import { TextField,Box,Button } from '@mui/material'

const NewStudent = () => {

  const handleFormSubmit=() =>{
            console.log("Done")
  
  
  }
  
  
  const isNonMobile = useMediaQuery("(min-width:600px)")
  
    return (
  
      <>
       <h1>New Student</h1>
  
     
      <Box sx={{ width: '50%', marginTop:"2%", marginLeft:'23%', marginBottom:'5%'}}>
  
      <Formik
  onSubmit={handleFormSubmit}
  validationSchema={checkoutSchema}
  >
  {({
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  }) => (
   <form onSubmit={handleSubmit}>
        
        <Box>
          
         <TextField 
          type="text"
          label="Full Name"
          name='full_name'
          onBlur={handleBlur}
          onChange={handleChange}
          error={!!touched.name && !!errors.name}
          helperText={touched.name && errors.name}
          sx={{paddingBottom:'4%', width:'100%'}}
          />
          <br />
          <TextField 
          type="text"
          label="Roll-No"
          name='roll_no'
          onBlur={handleBlur}
          onChange={handleChange}
          error={!!touched.name && !!errors.name}
          helperText={touched.name && errors.name}
          sx={{paddingBottom:'4%', width:'100%'}}
           />
           <br />
           <TextField 
          type="text"
          label="Department"
          name='department'
          onBlur={handleBlur}
          onChange={handleChange}
          error={!!touched.name && !!errors.name}
          helperText={touched.name && errors.name}
          sx={{ width:'100%', paddingBottom: '4%'}}
          />
          <TextField 
          type="text"
          label="College"
          name='college'
          onBlur={handleBlur}
          onChange={handleChange}
          error={!!touched.name && !!errors.name}
          helperText={touched.name && errors.name}
          sx={{paddingBottom:'4%', width:'100%'}}
          />
          <br /><TextField 
          type="text"
          label="Your Pre Requisite skills"
          name='prereq'
          onBlur={handleBlur}
          onChange={handleChange}
          error={!!touched.name && !!errors.name}
          helperText={touched.name && errors.name}
          sx={{paddingBottom:'4%', width:'100%'}}
          />
          <br />
          <TextField 
          type="text"
          label="CGPA"
          name='cgpa'
          onBlur={handleBlur}
          onChange={handleChange}
          error={!!touched.name && !!errors.name}
          helperText={touched.name && errors.name}
          sx={{paddingBottom:'4%', width:'100%'}}
          />
          <br />
          <TextField 
          type="text"
          label="Email ID"
          name='email_id'
          onBlur={handleBlur}
          onChange={handleChange}
          error={!!touched.name && !!errors.name}
          helperText={touched.name && errors.name}
          sx={{paddingBottom:'4%', width:'100%'}}
          />
          <br />
  
  <Box display="flex" justifyContent="center" mt="8%">
  
  <Button type="submit" variant="contained" sx={{backgroundColor:'purple'}}
  
  onClick={handleFormSubmit}> Submit </Button>
  
  </Box>
  
        </Box>
        
  </form>
  )}
  </Formik>
      </Box>
      </>
    )}
  
  
    const checkoutSchema = yup.object().shape({
      full_name: yup.string().required("required*"),
      email_id: yup.string().required("required*"),
      roll_no: yup.string().required("required*"),
      department: yup.string().required("required*"),
      college: yup.string().required("required*"),
      cgpa: yup.string().required("required*"),
      prereq: yup.string().required("required*"),
      });
    
  
  


export default NewStudent