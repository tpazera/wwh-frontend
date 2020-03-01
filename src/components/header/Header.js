import React from "react";
import { Link, Grid, AppBar, Tabs, Tab } from "@material-ui/core";
import NotificationImportantOutlinedIcon from "@material-ui/icons/NotificationImportantOutlined";
import AlarmAddOutlinedIcon from "@material-ui/icons/AlarmAddOutlined";
import FaceOutlinedIcon from "@material-ui/icons/FaceOutlined";
import HistoryIcon from "@material-ui/icons/History";
import "./header.scss";

function Header(props) {
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  return (
    <div className="root">
      <AppBar position="static">
        <Tabs
          value={props.val}
          // onChange={handleChange}
          className="tabs"
          // initialSelectedIndex={props.val}
          // value={props.history.location.pathname}
          // onChange={handleCallToRouter}
        >
          <Tab
            value={0}
            className="tab"
            href="/"
            component={Link}
            to="/"
            icon={<NotificationImportantOutlinedIcon />}
            // label="Calls"
          />
          <Tab
            value={1}
            className="tab"
            href="/medicinewaiting"
            component={Link}
            to="/medicinewaiting"
            icon={<AlarmAddOutlinedIcon />}
            // label="Medicine"
          />
          <Tab
            value={2}
            className="tab"
            href="/patients"
            component={Link}
            to="/patients"
            icon={<FaceOutlinedIcon />}
            // label="Patients"
          />
          {/* <Tab
            value={3}
            className="tab"
            href="/callshistory"
            component={Link}
            to="/callshistory"
            icon={<HistoryIcon />}
            label="Calls history"
          /> */}
        </Tabs>
      </AppBar>
    </div>
  );
}

export default Header;
