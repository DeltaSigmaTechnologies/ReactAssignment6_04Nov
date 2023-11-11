import React from 'react'
import {Formik} from 'formik';
import * as yup from 'yup';
import { Routes,Route} from 'react-router-dom';
import { Box ,TextField} from '@mui/material';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

function EditStudent() {
  const handleFormSubmit =()=>{
    console.log("Done")
  }
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <>
    <h1>Edit Student</h1>
    <h4>Task: Create a Form here</h4>
    <Box  sx={{width:"50"}}>
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

      })=>(
        <form onSubmit={handleSubmit}>
          <Box
          display='grid'
          
          gap="30px"
          gridTemplateColumns="repeat(4,minmax(0,1fr))"
          sx={{
            "& > div":{gridColumn:isNonMobile ? undefined:"span4"
          },
          }}
          >
         <TextField 
         type="text"
         label="Full-Name"
         name="name"
         onBlur={handleBlur}
         onChange={handleChange}
         error={!!touched.name&& !!errors.name}
         helperText={touched.name&& errors.name}
         sx={{padding:"5%"}}
         />
         
          <TextField 
         type="text"
         label="Email id"
         name="email"
         onBlur={handleBlur}
         onChange={handleChange}
         error={!!touched.email&& !!errors.name}
         helperText={touched.name&& errors.name}
         sx={{padding:"5%"}}
         />
          <TextField 
         type="text"
         label="Email id"
         name="email"
         onBlur={handleBlur}
         onChange={handleChange}
         error={!!touched.email&& !!errors.name}
         helperText={touched.name&& errors.name}
         sx={{padding:"5%"}}
         />
         
         <TextField 
         type="text"
         label="Full-Name"
         name="name"
         onBlur={handleBlur}
         onChange={handleChange}
         error={!!touched.name&& !!errors.name}
         helperText={touched.name&& errors.name}
         sx={{padding:"5%"}}
         />

         <TextField 
         type="text"
         label="Full-Name"
         name="name"
         onBlur={handleBlur}
         onChange={handleChange}
         error={!!touched.name&& !!errors.name}
         helperText={touched.name&& errors.name}
         sx={{padding:"5%"}}
         />
         
         <TextField 
         type="text"
         label="Full-Name"
         name="name"
         onBlur={handleBlur}
         onChange={handleChange}
         error={!!touched.name&& !!errors.name}
         helperText={touched.name&& errors.name}
         sx={{padding:"5%"}}
         />
         <TextField 
         type="text"
         label="Full-Name"
         name="name"
         onBlur={handleBlur}
         onChange={handleChange}
         error={!!touched.name&& !!errors.name}
         helperText={touched.name&& errors.name}
         sx={{padding:"5%"}}
         />
         <TextField 
         type="text"
         label="Full-Name"
         name="name"
         onBlur={handleBlur}
         onChange={handleChange}
         error={!!touched.name&& !!errors.name}
         helperText={touched.name&& errors.name}
         sx={{padding:"5%"}}
         />
          </Box>
          
        </form>
      )}
    </Formik>
    </Box>
   <Routes>
      <Route  exact path='editstudent'/>
    </Routes>
    <Button variant='contained'>Submit</Button>
    </>
  )
}
const initialValues={
  name:"",
  email:"",
  contact:"",

}
const checkoutSchema =yup.object().shape({
  name: yup.string().required("required"),
  email: yup.string().required("required"),
  contact: yup.string().required("required"),
  status: yup.string().required("required"),
  
})

  


export default EditStudent