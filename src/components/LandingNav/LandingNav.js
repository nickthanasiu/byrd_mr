import React from 'react';
import { Icon } from 'react-icons-kit'
import { facebookSquare, instagram, twitter } from 'react-icons-kit/fa/';
import Logo from '../../assets/logo/Logo.png';
import MenuButton from '../../assets/icons/Menu.png';

import './style.scss';

const LandingNav = () => {
  return (
    <div className="landing-nav">
      <div className="landing-nav__left">
        <div className="landing-nav__left--desktop">
          <ul className="landing-nav__list">
            <li className="landing-nav__list-item left-item">
              STORE
            </li>
            <li className="landing-nav__list-item">
              TUTORIALS
            </li>
          </ul>

          <ul className="landing-nav__social-icons">
            <li>
              <Icon icon={facebookSquare} size={26} />
            </li>
            <li>
              <Icon icon={instagram} size={26} />
            </li>
            <li>
              <Icon icon={twitter} size={26} />
            </li>
          </ul>
        </div>
      </div>

      <div className="landing-nav__center">
        <div className="landing-logo_container">
          <img className="landing-logo" src={Logo} />
        </div>
      </div>

      <div className="landing-nav__right">
        <div className="landing-btn_container">
          <img className="landing-menu_btn" src={MenuButton} />
        </div>

        <div className="landing-nav__right--desktop">
          <ul className="landing-nav__list">
            <li className="landing-nav__list-item left-item">
              BLOG
            </li>
            <li className="landing-nav__list-item">
              CONTACT
            </li>
          </ul>

          {/*<div className="btn_container--desktop">
            <img className="menu_btn--desktop" src={WhiteMenuButton} />
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default LandingNav;
