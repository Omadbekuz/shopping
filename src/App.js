import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import About from "./Pages/About/About";
import Furniture from "./Pages/Furniture/Furniture";
import NoFound from "./Pages/NoFound";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="furniture" element={<Furniture />} />
          <Route path="*" element={<NoFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
