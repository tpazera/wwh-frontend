import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, ButtonGroup } from "@material-ui/core";
import AlarmAddIcon from "@material-ui/icons/AlarmAdd";
import Axios from "axios";
import "./callWrapper.scss";

function MedicineDetails(props) {
  const [currentId, setCurrentId] = useState("");
  const [call, setCall] = useState({});

  const getCurrentCall = id => {
    console.log(id);
    if (id !== "")
      Axios.get("https://white-wolf-hacathon.herokuapp.com/medicines/" + id)
        .then(res => {
          console.log(res.data);
          if (!(res.data instanceof Array)) setCall(res.data);
        })
        .catch(err => {
          console.log(err);
        });
  };

  const acceptCall = id => {
    Axios.patch(
      "https://white-wolf-hacathon.herokuapp.com/medicines/" + id + "/given"
    )
      .then(res => {
        props.handleClose();
        // console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    return id;
  };

  const denyCall = id => {
    // Axios.post(
    //   "https://white-wolf-hacathon.herokuapp.com/alarms/" +
    //     id +
    //     "/decline/" +
    //     "5e5af683f0950c704031427d"
    // )
    //   .then(res => {
    props.handleClose();
    // console.log(res.data)
    // })
    // .catch(err => {
    //   console.log(err);
    // });
  };

  useEffect(() => {
    getCurrentCall(props.id);
  }, [props.id]);

  if (call !== undefined && call.id !== undefined) {
    return (
      <Paper key={call.id} className="paper">
        <h2>{call.time}</h2>
        <AlarmAddIcon style={{ fontSize: 80 }} />
        <br />
        <p className="patient">
          {call.patient.name} {call.patient.surname}
        </p>
        <p className="disease">
          {call.patient.disease}{" "}
          <span className="additionalInfo">{call.information}</span>
        </p>
        <p className="room">Sala: {call.patient.room}</p>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button className="acceptCall" onClick={() => acceptCall(call.id)}>
            Akceptuj
          </Button>
          <Button className="denyCall" onClick={() => denyCall(call.id)}>
            Odrzuć
          </Button>
        </ButtonGroup>
      </Paper>
      // <></>
    );
  } else {
    return <></>;
  }
}

export default MedicineDetails;
