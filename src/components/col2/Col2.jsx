import React from "react";
import Header from "./header/Header.jsx";
import "./header/Header.scss";
import Main from "./main/Main.jsx";
import "./main/Main.scss";

function Col2() {
  return (
    <div className="col-2">
      <Header />
      <Main />
    </div>
  );
}

export default Col2;
