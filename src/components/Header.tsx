import React from 'react';
import logo from '../assets/logo.svg';
import './Header.scss';

function Header() {
  return (
    <header className="Header">
      <div className="Header-logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className="Header-menu">
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
        </ul>
      </div>
    </header>
  )
}

export default Header;
