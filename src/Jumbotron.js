import React from "react";

function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">{props.children}
        <p className="lead">Choose the doctors of Star Trek, but do not repeat... Or your score will be ZEROED! Max score possible is 12. </p>
      </div>
    </div>
  )
}

export default Jumbotron;