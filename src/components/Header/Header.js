import React from "react";
import "./header.css";

function Header () {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#">
        Clicky Game
      </a>
  
      <div className="guess text-center">
        You guessed...
      </div>

      <div className="guess">
        Score: | Top Score: 
      </div>
    </nav>
  );
}

export default Header;
