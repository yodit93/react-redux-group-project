/* eslint-disable */
/* stylelint-disable */
import React from 'react';
import logo from '../logo/planet.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img className="logo-image" src={logo} alt="Logo" />
        <h1>Space Travelers` Hub</h1>
      </div>
      <NavLink />
    </nav>
  );
}

export default Navbar;
