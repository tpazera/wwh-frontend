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

function WaitingCalls(props) {
  const showDetails = id => {
    // props.setId(id);
    console.log(props);
  };
  return (
    <List className="list">
      {props.calls !== undefined
        ? props.calls.map((call, index) => {
            return (
              <ListItem
                key={call.id}
                button
                className={`listItem ${call.color}`}
                onClick={() => showDetails(call.id)}
              >
                <ListItemAvatar>
                  {/* <Avatar> */}
                  <ReportProblemRoundedIcon />
                  {/* </Avatar> */}
                </ListItemAvatar>
                <ListItemText
                  primary={call.patient.name + " " + call.patient.surname}
                  secondary={call.patient.disease}
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

export default WaitingCalls;
