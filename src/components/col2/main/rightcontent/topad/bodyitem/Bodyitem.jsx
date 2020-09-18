import React from "react";
// import "";

function Bodyitem(props) {
  return (
    <div className="body_item">
      <div className="percent">
        <div
          className={
            props.type === "topAd" ? "percent_box_green" : "percent_box_red"
          }
        >
          <p>{props.percent}</p>
        </div>
        <div className="description">
         {props.desctop}
        </div>
      </div>
      <div className="soc_cout_box">
        <p>{props.soc === "google" ? props.soc : "facebook"}</p>
        <p>{props.count}</p>
      </div>
    </div>
  );
}

export default Bodyitem;
