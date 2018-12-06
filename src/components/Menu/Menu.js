import React from 'react';
import Drone from '../../components/Drone';
import menuLogo from '../../assets/logo/logo_default.png';
import closeButton from '../../assets/icons/close_button.png';

import './style.scss';

const Menu = ({ menuState, toggleMenu }) => {
  return (
    <div className={`menu ${menuState}`}>
      <div className="menu__header">

        <div className="menu__left" />

        <div className="menu__center">
          <img className="menu__logo" src={menuLogo} />
        </div>

        <div className="menu__right">
          <img
            className="menu__close-btn"
            src={closeButton}
            onClick={toggleMenu}
          />
        </div>
      </div>

      <div className="menu__content">
        <div className="menu__drone-container">
          <Drone page={'menu'} />
        </div>

        <div className="menu__list-container">
          <ul className="menu__list">
            <li className="menu__item">
              STORE
            </li>
            <li className="menu__item">
              TUTORIALS
            </li>
            <li className="menu__item">
              BLOG
            </li>
            <li className="menu__item">
              CONTACT
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
