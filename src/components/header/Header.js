import React from "react";
import { Link, Grid, AppBar, Tabs, Tab } from "@material-ui/core";
import NotificationImportantOutlinedIcon from "@material-ui/icons/NotificationImportantOutlined";
import AlarmAddOutlinedIcon from "@material-ui/icons/AlarmAddOutlined";
import FaceOutlinedIcon from "@material-ui/icons/FaceOutlined";
import "./header.scss";

function Header(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="root">
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          className="tabs"
          // value={props.history.location.pathname}
          // onChange={handleCallToRouter}
        >
          <Tab
            className="tab"
            href="/"
            component={Link}
            to="/"
            icon={<NotificationImportantOutlinedIcon />}
            label="Calls"
          />
          <Tab
            className="tab"
            href="/medicinewaiting"
            component={Link}
            to="/medicinewaiting"
            icon={<AlarmAddOutlinedIcon />}
            label="Medicine"
          />
          <Tab
            className="tab"
            href="/patients"
            component={Link}
            to="/patients"
            icon={<FaceOutlinedIcon />}
            label="Patients"
          />
        </Tabs>
      </AppBar>
    </div>
  );
}

export default Header;
