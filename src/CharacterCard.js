import React from "react";

function CharacterCard(props) {
  return (
    <div className={"card " + (props.Clicked ? "animate" : "")} onClick={() => props.handleClick(props.id)} >
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="img-content">
        <p>
          Doctor {props.name}
        </p>
        {/* <p>
          <strong>Actor: </strong>{props.actor}
        </p> */}
      </div>
    </div >
  )
}

export default CharacterCard;