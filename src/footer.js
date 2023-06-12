import React from "react";
import "../public/style.css";

export default function (props) {
  console.log(props);
  const props2 = props["links"].map((x) => <p>{x}</p>);
  return (
    <div className="footer">
      <h3>{props.heading}</h3>
      {props2}
    </div>
  );
}
