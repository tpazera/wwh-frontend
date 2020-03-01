import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, ButtonGroup } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import Axios from "axios";

function CallDetails(props) {
  const [currentId, setCurrentId] = useState("");

  const getCurrentCall = id => {
    Axios.get("https://white-wolf-hacathon.herokuapp.com/alarms/" + id)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  if (props.id !== undefined && props.id !== "") {
    return (
      //   <Paper key={props.call.id} className={`paper ${props.call.color}`}>
      //     <h2>{props.call.hour}</h2>
      //     <ErrorIcon style={{ fontSize: 80 }} />
      //     <br />
      //     <p className="patient">
      //       {props.call.patient.name} {props.call.patient.surname}
      //     </p>
      //     <p className="disease">
      //       {props.call.patient.disease}{" "}
      //       <span className="additionalInfo">
      //         {props.call.patient.additionalInfo}
      //       </span>
      //     </p>
      //     <p className="room">Sala: {props.call.patient.room}</p>
      //     <ButtonGroup color="primary" aria-label="outlined primary button group">
      //       <Button
      //         className="acceptCall"
      //         onClick={() => props.acceptCall(props.call.id)}
      //       >
      //         Akceptuj
      //       </Button>
      //       <Button
      //         className="denyCall"
      //         onClick={() => props.denyCall(props.call.id)}
      //       >
      //         Odrzuć
      //       </Button>
      //     </ButtonGroup>
      //   </Paper>
      <></>
    );
  } else {
    return <></>;
  }
}

export default CallDetails;
