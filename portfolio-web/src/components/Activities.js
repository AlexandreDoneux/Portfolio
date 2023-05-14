import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function createData(name, real_hours, valid_hours, link, proof) {
  return {
    name,
    real_hours,
    valid_hours,
    link,
    proof
  };
}




function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        
        <TableCell align="left" component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.real_hours}</TableCell>
        <TableCell align="right">{row.valid_hours}</TableCell>
        <TableCell align="right">{row.link}</TableCell>
        <TableCell align="right">
          <IconButton
            aria-label="expand row"
            align="right"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Preuves (captures d'écran, notes, etc.)
              </Typography>
              
              {row.proof.map((proof)=>(
                    <img src={proof} />
                ))}
              
              
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    real_hours: PropTypes.number.isRequired,
    valid_hours: PropTypes.number.isRequired,
    proof: PropTypes.arrayOf(
        PropTypes.string.isRequired,
    ).isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string,
  }).isRequired,
};

const rows = [
  createData('Hackaton 2021 - 2022', 48, 10, "ee", ["/captures/hack2021/Capture d’écran 2021-10-30 à 20.53.09.png"]),
  createData('Hackaton 2022 - 2023', 48, 10, "ee", []),
  createData('Cyber security Challenge', 32, 10, "ee", []),
  createData('Ephec entreprendre : visite brasserie Waterloo', 2, 2, "ee", []),
  createData('Formation React (fr.reactjs.org)', 12, 10, "ee", []),
  createData('Formation "Node.js 12 : The big picture"  (Pluralsight )', 2, 0, "ee", []),
  createData('Formation "Building Web Applications with Node.js and Express" (Pluralsight)', 4, 0, "ee", []),
  createData('Formation "Node.js 12: Getting Started" (Pluralsight)', 11, 10, "ee", []),
  createData('Formation "Understanding your audience" (Pluralsight)', 4, 0, "ee", []),
  createData('Job étudiant (Cassis - Paprika)', 300, 10, "", []),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            
            <TableCell align="left">Nom</TableCell>
            <TableCell align="right">Heures réelles</TableCell>
            <TableCell align="right">Heures valides</TableCell>
            <TableCell align="right">Lien</TableCell>
            <TableCell align="right">Preuves</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}