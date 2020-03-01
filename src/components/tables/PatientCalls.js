import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  ListItemSecondaryAction
} from "@material-ui/core";
// import AccessibilityIcon from "@material-ui/icons/Accessibility";

import PersonIcon from "@material-ui/icons/Person";
import VisibilityIcon from "@material-ui/icons/Visibility";
import "./tables.scss";

function PatientCalls(props) {
  return (
    <List className="list list-medicine">
      {props.calls.map(e => (
        <ListItem key={e.id} button className="">
          <ListItemAvatar>
            {/* <Avatar> */}
            <PersonIcon />
            {/* </Avatar> */}
          </ListItemAvatar>
          <ListItemText
            primary={e.name + " " + e.surname + " Sala: " + e.room}
            secondary={e.disease}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <VisibilityIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

export default PatientCalls;
