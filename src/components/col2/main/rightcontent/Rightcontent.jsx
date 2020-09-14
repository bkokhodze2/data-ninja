import React from "react";
import Topad from "./topad/Topad.jsx";
import "./topad/Topad.scss";


function Rightcontent() {
  return (
    <div className="right_content">
      <Topad type="topAd"/>
      <Topad type="bottomAd" />
      <Topad type="topAd" />
    </div>
  );
}

export default Rightcontent;
