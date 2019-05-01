import React from "react";
import "./header.css";

function Header() {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#">
        <h2 class="ml-5">
          Clicky Game
        </h2>
      </a>

      <div className="guess text-center">
        You guessed...
      </div>

      <div className="guess mr-5">
        Score: | Top Score:
      </div>
    </nav>
  );
}

export default Header;
