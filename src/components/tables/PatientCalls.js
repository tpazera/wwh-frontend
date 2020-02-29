import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  ListItemSecondaryAction
} from "@material-ui/core";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import VisibilityIcon from "@material-ui/icons/Visibility";
import "./tables.scss";

function PatientCalls(props) {
  const getCalls = () => {};

  return (
    <List className="list">
      {props.calls.map(e => (
        <ListItem button className="red">
          <ListItemAvatar>
            {/* <Avatar> */}
            <AccessibilityIcon />
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
