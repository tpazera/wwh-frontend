import React from "react";
import CallDetails from "./Call";
import "./callWrapper.scss";

function CallWrapper(props) {
  if (props.id != undefined) {
    console.log(props.open);
    return (
      <div className={`details-wrapper ${props.id != "" ? "active" : ""}`}>
        <CallDetails id={props.id} />
      </div>
    );
  } else {
    return <></>;
  }
}

export default CallWrapper;
