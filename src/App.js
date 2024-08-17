import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Resume from './Pages/Resume/Resume';
import Services from './Pages/Services/Services';
import Work from './Pages/Work/Work';
import NoFound from './Pages/NoFound';
import Navbar from './Components/Navbar'


export default function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={< Services/>} />
          <Route path="blogs" element={<Resume />} />
          <Route path="contact" element={<Work />} />
          <Route path="*" element={<NoFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}
