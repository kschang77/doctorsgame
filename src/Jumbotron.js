import React from "react";

function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container-fluid">{props.children}
        <p>Click on each doctor of Star Trek to learn about each one. For each unique doctor you clicked, you get one point. Board is shuffled after each click. Clicking a doctor twice would reset your score to zero.</p>
      </div>
    </div>
  )
}

export default Jumbotron;