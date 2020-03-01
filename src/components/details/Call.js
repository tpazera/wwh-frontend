import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, ButtonGroup } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import Axios from "axios";
import "./callWrapper.scss";

function CallDetails(props) {
  const [currentId, setCurrentId] = useState("");
  const [call, setCall] = useState({});

  const getCurrentCall = id => {
    console.log(id);
    if (id !== "")
      Axios.get("https://white-wolf-hacathon.herokuapp.com/alarms/" + id)
        .then(res => {
          //   console.log(res.data);
          if (!(res.data instanceof Array)) setCall(res.data);
        })
        .catch(err => {
          console.log(err);
        });
  };

  useEffect(() => {
    getCurrentCall(props.id);
  }, [props.id]);

  if (call !== undefined && call.id !== undefined) {
    return (
      <Paper key={call.id} className={`paper ${call.color}`}>
        <h2>{call.hour}</h2>
        <ErrorIcon style={{ fontSize: 80 }} />
        <br />
        <p className="patient">
          {call.patient.name} {call.patient.surname}
        </p>
        <p className="disease">
          {call.patient.disease}{" "}
          <span className="additionalInfo">{call.patient.additionalInfo}</span>
        </p>
        <p className="room">Sala: {call.patient.room}</p>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button
            className="acceptCall"
            onClick={() => props.acceptCall(call.id)}
          >
            Akceptuj
          </Button>
          <Button className="denyCall" onClick={() => props.denyCall(call.id)}>
            Odrzuć
          </Button>
        </ButtonGroup>
      </Paper>
      //   <></>
    );
  } else {
    return <></>;
  }
}

export default CallDetails;
