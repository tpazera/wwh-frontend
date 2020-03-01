import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  ListItemSecondaryAction
} from "@material-ui/core";
import ReportProblemRoundedIcon from "@material-ui/icons/ReportProblemRounded";
import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import VisibilityIcon from "@material-ui/icons/Visibility";
import "./tables.scss";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from "@material-ui/pickers";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Axios from "axios";

function WaitingMedicine(props) {
  const [patient, setPatient] = useState([]);
  const [patients, setPatients] = useState([]);
  const [nurse, setNurse] = useState([]);
  const [nurses, setNurses] = useState([]);
  const [info, setInfo] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handlePatientChange = event => {
    setPatient(event.target.value);
  };

  const handleInfoChange = event => {
    setInfo(event.target.value);
  };

  const handleNurseChange = event => {
    setNurse(event.target.value);
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTimerEndChange = event => {
    setSelectedDate(event.target.value);
  };

  const showDetails = id => {
    // props.setId(id);

    props.handleClickOpen(id);
  };

  const handleAdd = () => {
    Axios.post("https://white-wolf-hacathon.herokuapp.com/medicines", {
      time: selectedDate,
      patientId: patient,
      information: info,
      nurse: nurse
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPatients();
    getNurses();
  }, []);

  const getPatients = () => {
    Axios.get("https://white-wolf-hacathon.herokuapp.com/patients")
      .then(res => {
        setPatients(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getNurses = () => {
    Axios.get("https://white-wolf-hacathon.herokuapp.com/nurses")
      .then(res => {
        setNurses(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <List className="list list-medicine">
        {props.calls !== undefined
          ? props.calls.map((medicine, index) => {
              return (
                <ListItem
                  key={medicine.id}
                  button
                  className={medicine.color}
                  onClick={() => showDetails(medicine.id)}
                >
                  <ListItemAvatar>
                    {/* <Avatar> */}
                    <LocalDrinkIcon />
                    {/* </Avatar> */}
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      medicine.patient.name +
                      " " +
                      medicine.patient.surname +
                      " " +
                      medicine.time
                    }
                    secondary={
                      "Room: " +
                      medicine.patient.room +
                      " " +
                      medicine.information
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <VisibilityIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })
          : null}
      </List>

      <div
        style={{ float: "right", position: "absolute", bottom: 0, right: 0 }}
      >
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Add
        </Button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Dodaj lek</DialogTitle>
        <DialogContent>
          <FormControl>
            Pacjent
            <Select
              style={{ float: "right" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={patient}
              onChange={handlePatientChange}
            >
              {patients.map((item, key) => (
                <MenuItem value={item.id}>
                  {item.name + " " + item.surname}
                </MenuItem>
              ))}
            </Select>
            Pielegniarka
            <Select
              labelId="demo-simple-select-label1"
              id="demo-simple-select1"
              value={nurse}
              onChange={handleNurseChange}
            >
              {nurses.map((item, key) => (
                <MenuItem value={item.id}>
                  {item.name + " " + item.surname}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            id="info"
            label="Informacje"
            type="info"
            fullWidth
            onChange={handleInfoChange}
          />
          <TextField
            id="time"
            type="24-hour clock"
            defaultValue="08:30"
            onChange={handleTimerEndChange}
            InputLabelProps={{
              shrink: true
            }}
            inputProps={{
              step: 300
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Anuluj
          </Button>
          <Button onClick={handleAdd} color="primary">
            Dodaj
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default WaitingMedicine;
