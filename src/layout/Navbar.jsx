import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <NavLink to={'/'}>
          <img src="logo.png" alt="Logo Kasa" />
        </NavLink>
      </div>

      <NavLink to={'/'}>
        <div className="link">Accueil</div>
      </NavLink>
      <NavLink to={'/about'}>
        <div className="link">A propos</div>
      </NavLink>
    </nav>
  );
}

export default Navbar;
