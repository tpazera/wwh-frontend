import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, ButtonGroup } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import Axios from "axios";
import "./callsCarousel.scss";
import CallDetails from "../details/Call";

function CallsCarousel() {
  const [calls, setCalls] = useState([]);

  const addCall = () => {
    Axios.post("https://white-wolf-hacathon.herokuapp.com/alarms", {
      hour: "17:15",
      patientId: "5e5adef76bfa7652d6d4b5c0",
      color: "RED"
    })
      .then(res => {
        setCalls(res.data);
        // console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getWaitingCalls = () => {
    Axios.get(
      "https://white-wolf-hacathon.herokuapp.com/alarms/active/" +
        "5e5af683f0950c704031427d"
    )
      .then(res => {
        setCalls(res.data);
        // console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const acceptCall = id => {
    Axios.post("https://white-wolf-hacathon.herokuapp.com/alarms/accept", {
      alarmId: id,
      nurseId: "5e5af683f0950c704031427d"
    })
      .then(res => {
        getWaitingCalls();
        // console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    return id;
  };

  const denyCall = id => {
    Axios.post(
      "https://white-wolf-hacathon.herokuapp.com/alarms/" +
        id +
        "/decline/" +
        "5e5af683f0950c704031427d"
    )
      .then(res => {
        getWaitingCalls();
        // console.log(res.data)
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
    // console.log(calls);
    // addCall();
    // addCall();
    // addCall();
  }, []);

  if (calls.length > 0) {
    let arrows = "";
    if (calls.length > 1) {
      arrows = "arrows";
    }
    return (
      <Carousel
        autoPlay={false}
        indicators={false}
        className={`carousel container-small ${arrows}`}
      >
        {calls.map(call => {
          // console.log(call);
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
                <span className="additionalInfo">
                  {call.patient.additionalInfo}
                </span>
              </p>
              <p className="room">Sala: {call.patient.room}</p>
              <ButtonGroup
                color="primary"
                aria-label="outlined primary button group"
              >
                <Button
                  className="acceptCall"
                  onClick={() => acceptCall(call.id)}
                >
                  Akceptuj
                </Button>
                <Button className="denyCall" onClick={() => denyCall(call.id)}>
                  Odrzuć
                </Button>
              </ButtonGroup>
            </Paper>
          );
        })}
      </Carousel>
    );
  } else {
    return <></>;
  }
}

export default CallsCarousel;
