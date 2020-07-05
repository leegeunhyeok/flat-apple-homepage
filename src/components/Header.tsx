import React, { useState } from 'react';
import classNames from 'classnames';
import logo from '../assets/logo.svg';
import './Header.scss';

import Button from './Button';

const MENUS = ['Menu 1', 'Menu 2', 'Menu 3'];

function Header() {
  const [isMenuOpened, menuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(MENUS[0]);

  const headerClass = classNames('Header', {
    'open-menu': isMenuOpened,
  });

  return (
    <header className={headerClass}>
      <div className="Header-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="Header-icon" onClick={() => menuOpen(!isMenuOpened)}>
        <span />
        <span />
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
          <li>
            <Button>View Source</Button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
