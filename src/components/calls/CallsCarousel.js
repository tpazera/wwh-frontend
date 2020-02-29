import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import Axios from "axios";

function CallsCarousel() {
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
  }, []);

  return (
    <Carousel autoPlay={false} indicators={false} className="carousel">
      {calls.map(call => {
        return <Slide item={call} />;
      })}
    </Carousel>
  );
}

function Slide(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default CallsCarousel;
