import React from "react";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";
import searchpng from "./Search.png";

export default function Navbar() {
  return (
    <>
      <div id="Navbar">
        <div id="left">
          <Link to="/">SQ R3</Link>
        </div>
        <div id="right">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/service">Service</Link>
          <Link to="/furniture">Furniture</Link>
          <button id="nvOrderbtn">Order Now</button>
          <button id="searchbtn">
            <img src={searchpng} alt="searchpng" />
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
}
