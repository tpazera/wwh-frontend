import React, { useEffect, useState } from "react";
import Axios from "axios";
import Header from "../components/header/Header";
import { Grid } from "@material-ui/core";
import PatientCalls from "../components/tables/PatientCalls";

function PatientsPage() {
  const [calls, setCalls] = useState([]);

  const getWaitingCalls = () => {
    Axios.get("https://white-wolf-hacathon.herokuapp.com/patients")
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
        <Header val={3} />
        <PatientCalls calls={calls} />
      </Grid>
    </Grid>
  );
}

export default PatientsPage;
