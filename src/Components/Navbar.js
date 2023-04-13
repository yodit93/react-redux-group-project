import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo/planet.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img className="logo-image" src={logo} alt="Logo" />
        <h1>Space Travelers` Hub</h1>
      </div>
      <div className="nav-links">
        <ul className="menu-list">
          <li className="list-item">
            <NavLink to="/">Rockets</NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/missions">Missions</NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
