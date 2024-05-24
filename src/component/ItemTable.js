// src/components/ItemTable.js
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




function createRow(desc, qty, unit) {
 
  
}


const rows = [
  createRow('Paperclips (Box)', 100, 1.15),
  createRow('Paper (Case)', 10, 45.99),
  createRow('Waste Basket', 2, 17.99),
];



export default function ItemTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="spanning table">
        <TableHead >
         
          <TableRow sx={{ backgroundColor: '#FFA726', fontSize:'32px'}}>
            <TableCell  align='center'>Name</TableCell>
            <TableCell align="center">Quantity</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell align="Center"></TableCell>
              
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
