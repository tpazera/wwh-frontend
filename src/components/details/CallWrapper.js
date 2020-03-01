import React from "react";
import CallDetails from "./Call";
import "./callWrapper.scss";

function CallWrapper(props) {
  if (props.id != undefined) {
    return (
      <div className={`details-wrapper ${props.open ? "active" : ""}`}>
        <CallDetails id={props.id} />
      </div>
    );
  } else {
    return <></>;
  }
}

export default CallWrapper;
