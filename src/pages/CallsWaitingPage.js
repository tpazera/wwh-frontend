import React, { useEffect, useState } from "react";
import Axios from "axios";
import Header from "../components/header/Header";
import { Grid } from "@material-ui/core";
import WaitingCalls from "../components/tables/WaitingCalls";

function ClassWaitingPage(props) {
  const [calls, setCalls] = useState([]);

  const getWaitingCalls = () => {
    Axios.get("https://white-wolf-hacathon.herokuapp.com/alarms/active/")
      .then(res => {
        setCalls(res.data);
        // console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    // console.log(props);
    getWaitingCalls();
    setInterval(function() {
      getWaitingCalls();
    }, 60000);
  }, []);

  return (
    <Grid container component="main" className="container-small">
      <Grid item>
        <Header val={0} />
        <WaitingCalls
          // setId={props.setId}
          calls={calls}
          handleClickOpen={props.handleClickOpen}
          handleCLose={props.handleClose}
        />
      </Grid>
    </Grid>
  );
}

export default ClassWaitingPage;
