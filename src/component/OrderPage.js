import React from 'react';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Paper, Typography } from '@mui/material';

const OrderPage = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <Box sx={{ flexGrow: 1, bgcolor: '#Faebd7', padding: '2rem', overflow: 'auto' }}>
        <Typography variant="h4" sx={{ color: '#FFA726', mb: 2 }}>
          Order
        </Typography>
        <TableContainer component={Paper} sx={{ maxHeight: '70vh' }}>
          <Table stickyHeader>
            <TableHead  sx={{backgroundColor:'green'}}>
              <TableRow >
                <TableCell sx={{fontSize:'1.1rem'}}>Name</TableCell>
                <TableCell sx={{fontSize:'1.1rem'}}>Time</TableCell>
                <TableCell sx={{fontSize:'1.1rem'}}>TEL</TableCell>
                <TableCell sx={{fontSize:'1.1rem'}}>Quantity</TableCell>
                <TableCell sx={{fontSize:'1.1rem'}}>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Add your table rows here */}
              <TableRow >
                <TableCell>Example</TableCell>
                <TableCell>10:00 AM</TableCell>
                <TableCell>07X-XXX XXXX</TableCell>
                <TableCell>3</TableCell>
                <TableCell>$15.00</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3} align="right" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                  Total
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                  $15.00
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button variant="contained" sx={{ bgcolor: '#FFA726' }}>
            OK
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderPage;
