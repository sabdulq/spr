// Navbar.js

import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "responsive" : ""}`} id="myNavbar">
      <a href="#home" className="active">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>

      <a href="#about">About</a>
      <button className="icon" onClick={toggleNav}>
        {isOpen ? "X" : "≡"}
      </button>
    </nav>
  );
}

export default Navbar;
