import React from "react";
import Totaldata from "./totaldata/Totaldata";
import "./totaldata/Totaldata.scss"
import Yourstats from "./yourstats/Yourstats";
import "./yourstats/Yourstats.scss"
// import "Navigation.scss";

function Leftcontent() {
  return (
    <div className="left_content">
      <Totaldata/>
      <Yourstats/>

      
    </div>
  );
}

export default Leftcontent;
