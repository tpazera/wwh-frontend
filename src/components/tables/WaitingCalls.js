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

function WaitingCalls() {
  const getCalls = () => {};

  return (
    <List className="list">
      <ListItem button className="red">
        <ListItemAvatar>
          {/* <Avatar> */}
          <ReportProblemRoundedIcon />
          {/* </Avatar> */}
        </ListItemAvatar>
        <ListItemText primary="Sala 253/A" secondary="złamana noga" />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <VisibilityIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      <ListItem button className="green">
        <ListItemAvatar>
          {/* <Avatar> */}
          <ReportProblemRoundedIcon />
          {/* </Avatar> */}
        </ListItemAvatar>
        <ListItemText primary="Sala 253/A" secondary="złamana noga" />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <VisibilityIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      <ListItem button className="orange">
        <ListItemAvatar>
          {/* <Avatar> */}
          <ReportProblemRoundedIcon />
          {/* </Avatar> */}
        </ListItemAvatar>
        <ListItemText primary="Sala 253/A" secondary="złamana noga" />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <VisibilityIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

export default WaitingCalls;
