import React from 'react';
import './Navbar.css';
import {FaCode, FaFileAlt, FaHome, FaUser} from "react-icons/fa";

function Navbar() {
  return (
    <header className="Navbar">
      <div className="Navbar-logo">
        <h1>ND</h1>
      </div>
        <nav >
            <ul className="Navbar-nav">
            <li><a href="/"><FaHome />Home</a></li>
            <li><a href="/about"><FaUser />About</a></li>
            <li><a href="/projects"><FaCode /> Projects</a></li>
            <li><a href="/resume"><FaFileAlt />Resume</a></li>
            </ul>
        </nav>
    </header>
  );
}

export default Navbar;