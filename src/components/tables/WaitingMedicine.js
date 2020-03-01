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
import VisibilityIcon from "@material-ui/icons/Visibility";
import "./tables.scss";

function WaitingMedicine(props) {
  console.log(props.calls);
  return (
    <List className="list">
      {props.calls !== undefined
        ? props.calls.map((medicine, index) => {
            return (
              <ListItem key={medicine.id} button className={medicine.color}>
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
  );
}

export default WaitingMedicine;
