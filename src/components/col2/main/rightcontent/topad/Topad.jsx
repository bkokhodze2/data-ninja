import React from "react";
import Bodyitem from "./bodyitem/Bodyitem.jsx";
import "./bodyitem/Bodyitem.scss";
// import "Navigation.scss";

function Topad({ type }) {
  return (
    <div className="top_ad">
      <div className="top_ad_head">
        <p>
          {type === "topAd" ? "top good advertising" : "top bad advertising"}
        </p>
      </div>
      <div className="top_ad_content">
        <div className="top_ad_content_header">
          <div className="filter">
            <p>filter by stats</p>
          </div>
          <p>view all</p>
        </div>
        <div className="ad_line"></div>
        <div className="top_ad_content_body">
          <Bodyitem
            desctop="name of advartising"
            type={type}
            percent="45%"
            count="2,570 view"
          />
          <Bodyitem
            desctop="add for my  website g"
            type={type}
            percent="11%"
            count="2000 clicks"
            soc="google"
          />
          <Bodyitem
            desctop="facebook notification"
            type={type}
            percent="25%"
            count="50 reachs"
          />
          <Bodyitem
            desctop="facebook notification"
            type={type}
            percent="10%"
            count="1000 clicks"
          />
          <Bodyitem
            desctop="facebook notification"
            type={type}
            percent="65%"
            count="1,570 view"
          />
          <Bodyitem
            desctop="add for my  website g"
            type={type}
            percent="45%"
            count="20 reachs"
          />
        </div>
      </div>
    </div>
  );
}

export default Topad;
