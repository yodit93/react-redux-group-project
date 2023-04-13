import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo/planet.png';
import './NavLink.css';

function NavLink() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img className="logo-image" src={logo} alt="Logo" />
        <h1>Space Travelers` Hub</h1>
      </div>
      <div className="nav-links">
        <ul className="menu-list">
          <li className="list-item">
            <Link to="/">Rockets</Link>
          </li>
          <li className="list-item">
            <Link to="/missions">Missions</Link>
          </li>
          <li className="list-item">
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavLink;
