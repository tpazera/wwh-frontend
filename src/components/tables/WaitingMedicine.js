import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  ListItemSecondaryAction
} from "@material-ui/core";
import ReportProblemRoundedIcon from "@material-ui/icons/ReportProblemRounded";
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

function WaitingMedicine(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleClickOpen = () => {
    setOpen(true);
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

  // console.log(props.calls);
  return (
    <div>
      <List className="list">
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
                    <ReportProblemRoundedIcon />
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
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
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
                step: 300 // 5 min
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default WaitingMedicine;
