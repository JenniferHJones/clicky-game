import React from "react";
import "./images.css";

function Images(props) {
  return (
    <div className="img-container">
      <img alt={props.name} src={props.image} />
      <span className="move" onClick={() => props.handleClick()}>
      </span>
    </div>
  );
}

export default Images;