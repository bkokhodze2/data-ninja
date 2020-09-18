import React from "react";
import coca from "../../../../public/images/cocacola.jpg";
import calendar from "../../../../public/images/calendar.png";
import fb from "../../../../public/images/fb.png";
import google from "../../../../public/images/google.png";
import filter from "../../../../public/images/filter.png";
import trash from "../../../../public/images/trash.png";
import user from "../../../../public/images/user.png";

function Header() {
  return (
    <header>
      <div className="header_top">
        <div className="acc">
          <div className="acc_logo">
            <img src={coca} alt="" />
          </div>
          <div className="acc_select">
            <p>select account</p>
            <select name="acc" id="acc">
              <option value="cocacola">cocacola</option>
              <option value="cocacola1">cocacola1</option>
              <option value="cocacola2">cocacola2</option>
              <option value="cocacola3">cocacola3</option>
            </select>
          </div>
        </div>
        <div className="top_right_container">
          <div className="right_container_website">
            <a href="#">create website</a>
          </div>
          <div className="right_container_ad">
            <p>create ad</p>
          </div>
          <div className="right_container_search">
            <i className="fas fa-search"></i>
          </div>
          <div className="right_container_acc">
            <img src={user} alt=""/>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="header_bottom">
        <div className="header_bottom_left">
          <div className="left_date">
            <div><img src={calendar} alt="" /></div>
            <p>11 dec - 15dec</p>
          </div>

          <div className="left_fb">
            <div><img src={fb} alt="" /></div>
            <a href="https://www.facebook.com">faceboock</a>
          </div>
          <div className="left_google">
            <div><img src={google} alt="" /></div>
            <a href="https://www.google.com">google</a>
          </div>
        </div>
        <div className="header_bottom_right">
          <div className="right_filter">
            <img src={filter} alt=""/>
            <p>filter</p>
          </div>
          <div className="right_delete">
            <img src={trash} alt=""/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
