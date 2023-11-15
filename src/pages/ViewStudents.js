import {useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material'; 
import  Button  from '@mui/material/Button';
import {Link} from 'react-router-dom' 
import axios from 'axios';

function ViewStudents() {

  const columns = [
    { field: 'id', headerName: 'Sno', width: 50 },
    {
      field: 'roll_no',
      headerName: 'Roll No',
      width: 120,
      editable: false,
    },
    {
      field: 'full_name',
      headerName: 'Name',
      width: 150,
      editable: false,
    },
    {
      field: 'department',
      headerName: 'Branch',
      width: 70,
      editable: false,
    },
    {
      field: 'college',
      headerName: 'College',
      width: 90,
      editable: false,
    },
    {
      field: 'contact',
      headerName: 'PreRequisites',
      width: 190,
      editable: false,
    },
    {
      field: 'cgpa',
      headerName: 'CGPA',
      type: 'number',
      width: 50,
      editable: false,
    },
    {
      field: 'email_id',
      headerName: 'Email',
      width: 150,
      editable: false,
    }
  ];
  
//   const rows = [
//     { id: 1, full_name: 'Abdul Raoof', roll_no: '160422733011', department: 'CSE' ,college:'MJCET', prereq:'HTML,CSS,JS,Python' ,cgpa:'9.82',email_id:'abcd@hotmail.com'},
// ];
   const [rows, setRows] = useState([]);
  axios.get("https://students.dstinnovate.com/students")
  .then((res)=>{
        setRows(res.data)
  })
  

  return (
    <>
    <h1>Student DashBoard</h1>  
    
    <Link to='/dashboard/new'>
     <Button variant='contained'
      sx={{ 
        width: 131,
        height: 42,
        borderRadius: 3,
        marginBottom: '3%'

      }} > New Student </Button>
     </Link>

  
     <Box sx={{ width: '100%' }}>
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
        pageSizeOptions={[5,10,15]}
        disableRowSelectionOnClick
      />
    </Box>

    </>
  )
}

export default ViewStudents