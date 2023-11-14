import { DataGrid } from '@mui/x-data-grid';
import { Box,Stack} from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState } from 'react';

function ViewStudents() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'full_name',
      headerName: 'First Name',
      width: 150,
      
    },
    {
      field: 'roll_no',
      headerName: 'Roll No',
      width: 150,
      
    },
    {
      field: 'email_id',
      headerName: 'Email Id', 
      width: 220,
     
    },
    {
      field: 'contact',
      headerName: 'Contact', 
      width: 120,
     
    },
    {
      field: 'department',
      headerName: 'Department', 
      width: 100,
     
    },
    {
      field: 'college',
      headerName: 'College', 
      width: 100,
     
    },
  ];


    
  const [rows,setRows]=useState([]);

    axios.get("https://students.dstinnovate.com/students")

     .then((res)=>{
      setRows(res.data)

})
  /* axios.get().then((res)=>{}).catch() */
 
  return (
    <>
    <h1>DataGrid Here</h1>
    <Box>
      <Stack direction="row">
        <Link to ='/dashboard/new'>
          <Button variant='contained'>NewStudents</Button>
        </Link>
       
        <Link to ='/dashboard/edit'>
          <Button variant='contained'>EditStudents</Button>
        </Link>
      </Stack>
    </Box>
    <Box sx={{width: '100%' }}>
      <DataGrid
      autoHeight
      
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5,10,20]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </>
  )
}

export default ViewStudents