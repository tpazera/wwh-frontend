import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Axios from "axios";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


function CallsHistoryPage() {
    const classes = useStyles();
    const [history, setHistory] = useState([]);

    useEffect(() => {
      getHistory();
      setInterval(function() {
        getHistory();
      }, 60000);
    }, []);

    const getHistory = () => {
      Axios.get(
        "https://white-wolf-hacathon.herokuapp.com/alarms/history"
      )
        .then(res => {
          setHistory(res.data);
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    };

console.log("hostory");
console.log(history);
  return (
  <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Id zgloszenia</StyledTableCell>
          <StyledTableCell align="right">Godzina</StyledTableCell>
          <StyledTableCell align="right">Data utworzenia</StyledTableCell>
          <StyledTableCell align="right">Pacjent</StyledTableCell>
          <StyledTableCell align="right">Informacje</StyledTableCell>
          <StyledTableCell align="right">Choroba</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {history.map(row => (
          <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope=" row">
              {row.id}
            </StyledTableCell>
            <StyledTableCell align="right">{row.hour}</StyledTableCell>
            <StyledTableCell align="right">{row.createdDate}</StyledTableCell>
            <StyledTableCell align="right">{row.patient.name + " " + row.patient.surname}</StyledTableCell>
            <StyledTableCell align="right">{row.patient.additionalInfo}</StyledTableCell>
            <StyledTableCell align="right">{row.patient.disease}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
}

export default CallsHistoryPage;
