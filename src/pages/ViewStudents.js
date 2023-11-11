import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box,Stack} from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function ViewStudents() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
   
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  ];
    
  

    
  
 
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
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </>
  )
}

export default ViewStudents