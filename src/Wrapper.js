import React from "react";

function Wrapper(props) {
  return <div className="wrapper container-fluid m-0 p-0">{props.children}</div>
}

export default Wrapper;