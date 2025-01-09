import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, tool, cost, offer, access) {
  return { name, tool, cost, offer, access };
}

const rows = [
  createData('Idiation', 159, 6.0, 24, 4.0),
  createData('Design', 237, 9.0, 37, 4.3),
  createData('Coding', 262, 16.0, 24, 6.0),
  createData('Testing', 305, 3.7, 67, 4.3),
  createData('Scrum', 356, 16.0, 49, 3.9),
];

export default function Services() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Green Activity (System)</TableCell>
            <TableCell align="right">Tool</TableCell>
            <TableCell align="right">Cost</TableCell>
            <TableCell align="right">Offer</TableCell>
            <TableCell align="right">Access</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.tool}</TableCell>
              <TableCell align="right">{row.cost}</TableCell>
              <TableCell align="right">{row.offer}</TableCell>
              <TableCell align="right">{row.access}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
