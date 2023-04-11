import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo/planet.png'; // import logo image
import './Navbar.css'; // import CSS styles

function Navbar() {
  return (
    <nav className="navbar">
      {' '}
      {/* navbar container */}
      <div className="logo">
        {' '}
        {/* logo container */}
        <img className="logo-image" src={logo} alt="Logo" />
        {' '}
        {/* logo image */}
        <h1>Space Travelers` Hub</h1>
        {' '}
        {/* logo title */}
      </div>

      <ul className="nav-links">
        {' '}
        {/* navigation links container */}
        <li>
          <NavLink to="/" exact activeClassName="active">
            {' '}
            {/* link to the Rockets page */}
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink to="/missions" activeClassName="active">
            {' '}
            {/* link to the Missions page */}
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink to="/dragons" activeClassName="active">
            {' '}
            {/* link to the Dragons page */}
            Dragons
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="active">
            {' '}
            {/* link to the Profile page */}
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
