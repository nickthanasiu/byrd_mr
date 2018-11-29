import React from 'react';
import Logo from '../../assets/logo/Logo.png';
import MenuButton from '../../assets/icons/Menu.png';

import './style.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__left">
        <div className="nav__left--desktop">
          <ul className="nav__list">
            <li className="left-item">
              STORE
            </li>
            <li>
              TUTORIALS
            </li>
          </ul>
        </div>
      </div>
      <div className="nav__center">
        <div className="logo_container">
          <img className="logo" src={Logo} />
        </div>
      </div>
      <div className="nav__right">
        <div className="btn_container">
          <img className="menu_btn" src={MenuButton} />
        </div>

        <div className="nav__right--desktop">
          <ul className="nav__list">
            <li className="left-item">
              BLOG
            </li>
            <li>
              CONTACT
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
