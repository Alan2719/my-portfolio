import React from "react";
import "../styles/container.css";

function Container(props) {
return <div className="row projects-cont">{props.children}</div>
}

export default Container;