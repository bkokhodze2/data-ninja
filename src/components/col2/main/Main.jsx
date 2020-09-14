import React from "react";
import Rightcontent from "./rightcontent/Rightcontent.jsx";
import "./rightcontent/Rightcontent.scss";
// import "Navigation.scss";
import Leftcontent from "./leftcontent/Leftcontent.jsx";
import "./leftcontent/Leftcontent.scss";

function Main() {
  return (
    <main className="content">
      <Leftcontent />
      <Rightcontent />
    </main>
  );
}

export default Main;
