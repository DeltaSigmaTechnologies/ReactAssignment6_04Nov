import React, { useState } from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import { Routes,Route} from 'react-router-dom';
import { Box ,Card,MenuItem,Stack,TextField,FormControl,InputLabel,Select} from '@mui/material';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';
import { set } from 'lodash';


function NewStudent() {
  
   const [fullName, setFullName]=useState("")
   const [rollNo,setRollNo] =useState("")
   const [emailId,setEmailId]=useState("")
   const [con,setCon]=useState("")
   const [depart,setDepart]=useState("")
   const[sem,setSem]=useState("")
   const[year,setYear]=useState("")
   const[skill,setSkill]=useState("")
   const[cours,setCours]=useState("")
   const[colleg,setColleg]=useState("")
   const[doj,setDoj]=useState(new Date())
   const[cgp,setCgp]=useState("")
   const[city,setCity]=useState("")
   const isNonMobile = useMediaQuery("(min-width:600px)");



   const handleFormSubmit =() =>{
    axios
    .post("https://students.dstinnovate.com/newstudent",{
      full_name:fullName,
      roll_no:rollNo,
      email_id:emailId,
      contact:con,
      department:depart,
      semester:sem,
      year_of_study:year,
      skills:skill,
      course:cours,
      college:colleg,
      date_of_joining: doj,
      cgpa:cgp,
      city_college:city



    })

   }
   
  return (
    <>
    
    <h1 style={{color:"blue",marginLeft:"25%",marginTop:'-3%'}}>Register Now</h1>
   
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
          <Card  style={{marginLeft:"5%",marginRight:"5%"}}>
          <Box
          
          display='grid'
          
          gap="10px"
          gridTemplateColumns="repeat(4,minmax(0,1fr))"
          sx={{
            "& > div":{gridColumn:isNonMobile ? undefined:"span4",marginTop:"5%",marginLeft:"5%"
           },
           }
        }
          >
         <TextField 
        
         type="text"
         label="Full-Name"
         name="fullName"
         onBlur={handleBlur}
         onChange={(e) =>setFullName(e.target.value)}
         value={fullName}
         
         error={!!touched.name&& !!errors.name}
         helperText={touched.name&& errors.name}
         sx={{gridColumn:"span 2"}}
         />
          
          <TextField 
         type="number"
         label="Roll Number"
         name="rollNo"
         onBlur={handleBlur}
         onChange={(e)=>setRollNo(e.target.value)}
         value={rollNo}
         error={!!touched.rollnumber&&!!errors.rollnumber}
         helperText={touched.rollnumber&& errors.rollnumber}
         sx={{padding:"5%"}}
         />
           <TextField 
         type="number"
         label="Contact"
         name="con"
         onBlur={handleBlur}
         onChange={(e)=>setCon(e.target.value)}
        value={con}
         error={!!touched.contact&& !!errors.contact}
         helperText={touched.contact&& errors.contact}
         sx={{padding:"5%"}}
         />
         
          <TextField 
        // type="number"
         label="Email"
         name="emailId"
         onBlur={handleBlur}
         onChange={(e)=>setEmailId(e.target.value)}
         value={emailId}
         error={!!touched.email&& !!errors.email}

         helperText={touched.email&& errors.email}

         sx={{gridColumn:"span 2"}}
         />
         <FormControl>
          <InputLabel id="semester">Semester</InputLabel>
          <Select
          labelId="Semester"
          id="sesmester"
          label="Semester"
          name="sem"
          onChange={(e)=>setSem(e.target.value)}
          value={sem}

          
          >
           < MenuItem value={1}>1</MenuItem>
           < MenuItem value={2}>2</MenuItem>
           < MenuItem value={3}>3</MenuItem>
           < MenuItem value={4}>4</MenuItem>
           < MenuItem value={5}>5</MenuItem>
           < MenuItem value={6}>6</MenuItem>
           < MenuItem value={7}>7</MenuItem>
           < MenuItem value={8}>8</MenuItem>
          </Select>
         </FormControl>
         <FormControl>
          <InputLabel id="year">Year</InputLabel>
         <Select
          labelId="Year"
          id="year"
          label="Year"
          onChange={(e)=>setYear(e.target.value)}
         // sx={{gridColumn:"span 1"}}
          name="year"
          value={year}
          >
             <MenuItem value={0}>1</MenuItem> 
             <MenuItem value={1}>2</MenuItem> 
             <MenuItem value={2}>3</MenuItem>
              <MenuItem value={3}>4</MenuItem>
            
          </Select>
         </FormControl>
          <TextField 
         // type="text"
         label="CGPA"
         name="cgp"
         onBlur={handleBlur}
         onChange={(e)=>setCgp(e.target.value)}
         value={cgp}
         error={!!touched.cgpa&& !!errors.cgpa}
         helperText={touched.cgpa&& errors.cgpa}
         // sx={{padding:"5%"}}
         />
         
         <TextField 
         type="text"
         label="Department"
         name="depart"
         onBlur={handleBlur}
         onChange={(e)=>setDepart(e.target.value)}
         value={depart}
         error={!!touched.department&& !!errors.department}
         helperText={touched.department&& errors.department}
         // sx={{padding:"5%"}}
         />

         <TextField 
         type="text"
         label="College"
         name="colleg"
         onBlur={handleBlur}
         onChange={(e)=>setColleg(e.target.value)}
         value={colleg}
         error={!!touched.college&& !!errors.college}
         helperText={touched.college&& errors.college}
         sx={{gridColumn:"span 2"}}
         // sx={{padding:"5%"}}
         />
         
         <TextField 
         type="text"
         label="City"
         name="city"
         onBlur={handleBlur}
         onChange={(e)=>setCity(e.target.value)}
         value={city}
         error={!!touched.city&& !!errors.city}
         helperText={touched.city&& errors.city}
         // sx={{padding:"5%"}}
         />
         <TextField 
         type="text"
         label="Skills"
          name="skill"
         onBlur={handleBlur}
         onChange={(e)=>setSkill(e.target.value)}
         value={skill}
         error={!!touched.skills&& !!errors.skills}
         helperText={touched.skills&& errors.skills}
         // sx={{padding:"5%"}}
         />
         <FormControl>
          <InputLabel id="coursetoenroll">Course To Enroll</InputLabel>
          <Select
          type='text'
           LabelId="coursetoenroll"
           id="coursetoenroll"
            label="Course To Enroll"
            name="cours"
            onChange={(e)=>setCours(e.target.value)}
            value={cours}
            >
              <MenuItem value={0}>React Js</MenuItem>
            </Select>

         </FormControl>
        
          </Box>
          <Stack sx={{ width:'20%',  marginLeft:'78%',marginBottom:'10%', marginTop:'-4%'}}>
    <Button type="submit" onClick={handleFormSubmit} variant='contained'>Register Now</Button>
    </Stack>
   
          </Card>
        </form>
      )}
    </Formik>
    </>
  )
}
const initialValues={
  name:"",
  email:"",
  contact:"",
  rollnumber:"",
  cgpa:"",
  department:"",
  college:"",
  city:"",
  skills:"",
  year:"",
  semester:"",
  coursetoenroll:"",

}
   const checkoutSchema =yup.object().shape({
    
   
    
   })



export default NewStudent