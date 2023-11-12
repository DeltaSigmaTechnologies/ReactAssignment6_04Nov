import React from 'react';
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import {
    Stack,
    Button,
    Container,
    Typography,
  } from '@mui/material';

function ViewStudents() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'fullName',
          headerName: 'Full Name',
          width: 100,
          editable: true,
        },
        {
          field: 'rollNo',
          headerName: 'Roll Number',
          width: 200,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
          editable: true,
        },
        
      ];
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];
      
  return (
    <>
    <Helmet><title>Student Datagrid</title></Helmet>
    <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Student List
          </Typography>
          <Link to='/dashboard/new'><Button variant="contained" >New Student</Button></Link>
        </Stack>
    </Container>
        <Box sx={{ width: '80%', justifyContent: 'center', alignItems: 'center', marginLeft: '10%' }}>
         <DataGrid
            autoHeight
            rows={rows}
            columns={columns}
            initialState={{ pagination: {paginationModel: { pageSize: 5,},},}}
            pageSizeOptions={[5,10,20]}
            checkboxSelection
            disableRowSelectionOnClick
        />
        </Box>
   
    </>
  );
};

export default ViewStudents;