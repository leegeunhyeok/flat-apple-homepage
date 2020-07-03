import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import './Header.scss';

import Button from './Button';

const MENUS = ['Menu 1', 'Menu 2', 'Menu 3'];

function Header() {
  const [activeMenu, setActiveMenu] = useState(MENUS[0]);

  return (
    <header className="Header">
      <div className="Header-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="Header-menu">
        <ul>
          {MENUS.map((menu, index) => (
            <li
              className={menu === activeMenu ? 'active' : ''}
              onClick={() => setActiveMenu(menu)}
              key={index}
            >
              {menu}
            </li>
          ))}
        </ul>
        <Button>View Source</Button>
      </div>
    </header>
  );
}

export default Header;
