import React, { useEffect, useState } from "react";
import Axios from "axios";
import Header from "../components/header/Header";
import { Grid } from "@material-ui/core";
import WaitingCalls from "../components/tables/WaitingCalls";

function ClassWaitingPage() {
  const [calls, setCalls] = useState([]);

  const getWaitingCalls = () => {
    Axios.get("https://white-wolf-hacathon.herokuapp.com/alarms/active")
      .then(res => {
        setCalls(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getWaitingCalls();
    setInterval(function() {
      getWaitingCalls();
    }, 60000);
  });

  return (
    <Grid container component="main">
      <Grid item>
        <Header />
        <WaitingCalls calss={calls} />
      </Grid>
    </Grid>
  );
}

export default ClassWaitingPage;
