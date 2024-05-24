import React from 'react';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const FullPageTable = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <Box sx={{ flexGrow: 1, bgcolor: '#Faebd7', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
        <TableContainer component={Paper} sx={{ flexGrow: 1 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Add your table rows here */}
              <TableRow>
                <TableCell component="th" scope="row">
                  Example
                </TableCell>
                <TableCell>10:00 AM</TableCell>
                <TableCell>3</TableCell>
                <TableCell>$30.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Total
                </TableCell>
                <TableCell />
                <TableCell />
                <TableCell>$30.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant="contained" sx={{ mt: 2, bgcolor: '#FFA726', alignSelf: 'flex-end' }}>
          OK
        </Button>
      </Box>
    </Box>
  );
};

export default FullPageTable;
