import React from "react";
import "./images.css";

function Images(props) {
  return (
    <div className="img-container"  onClick={() => props.clickHandler()}>
      <img alt={props.name} src={props.image} />
    </div>
  );
}

export default Images;