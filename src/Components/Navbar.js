import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div id="Navbar">
      <div id="left">
        <h1>OMADBEK.</h1>
      </div>
      <div id="right">
        <p>Home</p>
        <p>Services</p>
        <p>Resume</p>
        <p>Work</p>
        <p>Contact</p>
       <button>HIRE ME</button>
      </div>
    </div>
  );
}
