import React from "react";
// import "../../../public/background.svg";
import "./jumbotron.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1>Clicky Game!</h1>
      <h4>
        Click on an image to earn points, but don't click on the same image more than once or you lose. 
      </h4>
    </div>
  );
}

export default Jumbotron;
