import React from "react";
import speed from "../../../../public/images/speed.png";
// import "Navigation.scss";

function Navlink(props) {
  return (
    <div className={props.type === "active" ? "active" : ""}>
      <img src={speed} alt=""/>
      <a className="nav_href" href="">{props.name}</a>
    </div>
  );
}

export default Navlink;
