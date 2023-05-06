import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Cv from './Cv';
import Portfolio from './Portfolio';

function MenuBar() {
    return (
    <div>
        <nav className="menu-bar">
            <div className="menu-bar__title">Title</div>
            <div className="menu-bar__buttons">
                <button className="menu-bar__button">Button 1</button>
                <button className="menu-bar__button">Button 2</button>
                <button className="menu-bar__button">Button 3</button>
            </div>
        </nav>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}> </Route>
                <Route path="/cv" element={<Cv/>}> </Route>
                <Route path="/portfolio" element={<Portfolio/>}> </Route>
            </Routes>
        </Router>
    </div>
      
      
    );
  }
  
  export default MenuBar;