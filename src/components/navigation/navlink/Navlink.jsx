import React from "react";

// import "Navigation.scss";

function Navlink(props) {
  return (
    <div className={props.type === "active" ? "active" : ""}>
      <i className="fas fa-arrow-circle-right"></i>
      <a href="">{props.name}</a>
    </div>
  );
}

export default Navlink;
