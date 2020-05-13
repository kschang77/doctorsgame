import React from "react";

function Navbar(props) {
  return (
    <header className="container-fluid fixed-top" >
      <div className="row">
        <h1 className="col-sm-8">Star Trek Doctors Memory Game</h1>
        <nav className="col-sm-4">
          <p>Score: <span>{props.currentScore}</span></p> &nbsp;&nbsp;&nbsp;
          <p>Top Score: <span>{props.highScore}</span> </p>
          {props.children}
        </nav>
      </div>
    </header>
  )
}

export default Navbar;