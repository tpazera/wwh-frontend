import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Header from "../components/header/Header";
import WaitingMedicine from "../components/tables/WaitingMedicine";
import Axios from "axios";

function MedicineWaitingPage(props) {
  const [calls, setCalls] = useState([]);

  const getWaitingMedicine = () => {
    Axios.get("https://white-wolf-hacathon.herokuapp.com/medicines")
      .then(res => {
        setCalls(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getWaitingMedicine();
    setInterval(function() {
      getWaitingMedicine();
    }, 60000);
  }, []);

  return (
    <>
      <Grid container component="main" className="container-small">
        <Grid item>
          <Header val={1} />
          <WaitingMedicine
            calls={calls}
            handleClickOpen={props.handleClickOpen}
            handleCLose={props.handleClose}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default MedicineWaitingPage;
