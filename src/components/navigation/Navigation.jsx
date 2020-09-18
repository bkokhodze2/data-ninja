import React from "react";
import Navlink from "./navlink/Navlink.jsx";
import "./navlink/Navlink.scss";
import ninja from "../../../public/images/ninja.png";
// import "Navigation.scss";

function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation_picture">
        <img src={ninja} alt="" />
        <a>dataninja</a>
      </div>
      <div className="nav_list">
        <Navlink type="active" name="dashboard"/>
        <Navlink name="website builder"/>
        <Navlink name="sales"/>
        <Navlink name="ad cration"/>
        <Navlink name="audiences"/>
        <Navlink name="conversions"/>
        <Navlink name="reporting"/>
        <Navlink name="crm"/>
        <Navlink name="manual sender"/>
        <Navlink name="flow builder"/>
        <Navlink name="rule builder"/>



      </div>
    </nav>
  );
}

export default Navigation;
