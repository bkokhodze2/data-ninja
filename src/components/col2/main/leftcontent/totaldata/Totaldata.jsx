import React from "react";

// import "Navigation.scss";

function Totaldata() {
  return (
    <div className="total_data">
      <div className="total_data_head">
        <p>total data</p>
        <a href="#">view your website</a>
      </div>
      <div className="total_data_content">
        <div className="total_data_content_header">
          <p>12,000</p>
          <p>total</p>
        </div>

        <div className="total_data_content_line"></div>

        <div className="total_data_content_body">
          <div className="content_body_item">
            <div className="body_item_dot dot_coral"></div>
            <div className="body_item_total">
              <p>total</p>
              <p>200,000</p>
            </div>
          </div>

          <div className="content_body_item">
            <div className="body_item_dot dot_blue"></div>
            <div className="body_item_total">
              <p>unique views</p>
              <p>200,000</p>
            </div>
          </div>
          
          <div className="content_body_item">
            <div className="body_item_dot dot_green"></div>
            <div className="body_item_total">
              <p>views</p>
              <p>200,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Totaldata;
