import React from "react";
import ninja from "../../../../../../public/images/ninja.png"
// import "Navigation.scss";

function Yourstats() {
  return (
    <div className="your_stats">
        <div className="your_stats_head">your stats</div>
        <div className="your_stats_content">
          <div className="content_img">
          <img src={ninja} alt="" />
          </div>
          <div className="content_div">
            <p>white belt</p>
            <p>now you are white belt you can keep going.</p>
            <div className="content_div_create">
              <div className="more_ad">
                <p>create more ad</p>
              </div>
              <div className="progress_bar">
                <div className="active"></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Yourstats;
