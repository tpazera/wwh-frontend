import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, ButtonGroup } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import Axios from "axios";
import "./callsCarousel.scss";

function CallsCarousel() {
  const [calls, setCalls] = useState([]);

  const getWaitingCalls = () => {
    Axios.get("https://white-wolf-hacathon.herokuapp.com/alarms/active")
      .then(res => {
        // setCalls(res.data);
        console.log(res.data);
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
    console.log(calls);
  }, []);

  if (calls.length > 0) {
    console.log(calls.length);
    return (
      <Carousel autoPlay={false} indicators={false} className="carousel">
        {calls.map(call => {
          return <Slide item={call} />;
        })}
      </Carousel>
    );
  } else {
    return <></>;
  }
}

function Slide(props) {
  const acceptCall = id => {
    return id;
  };

  return (
    <Paper key={props.item.id}>
      <h2>{props.item.hour}</h2>
      <ErrorIcon style={{ fontSize: 80 }} />
      <br />
      <p>{props.item.patient.disease}</p>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button
          className="acceptCall"
          onClick={() => acceptCall(props.item.id)}
        >
          Akceptuj
        </Button>
        <Button className="denyCall">Odrzuć</Button>
      </ButtonGroup>
    </Paper>
  );
}

export default CallsCarousel;
