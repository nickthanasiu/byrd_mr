import React, { Component } from 'react';
import throttle from 'lodash.throttle';

import LandingNav from '../LandingNav';
import Menu from '../Menu';
import Logo from '../../assets/logo/Logo.png';
import LogoBlackBackground from '../../assets/logo/logo_black_background.png';
import MenuButton from '../../assets/icons/Menu.png';
import WhiteMenuButton from '../../assets/icons/menu_button_white.png';
import { Icon } from 'react-icons-kit'
import { facebookSquare, instagram, twitter } from 'react-icons-kit/fa/';

import './style.scss';

export default (ChildComponent) => {
  class DropdownNav extends Component {
    constructor(props) {
      super(props);

      this.state = {
        navBackgroundColor: '#fff',
        navLogo: Logo,
        scrollY: 0,
        navBottom: null,
        dropdownVisible: false,
        landingIsInView: true,
        menuOpen: false,
      };

      this.handleScroll = this.handleScroll.bind(this);
      this.throttledScrollHandler = throttle(this.handleScroll, 250);
      this.showDropdown = this.showDropdown.bind(this);
      this.hideDropdown = this.hideDropdown.bind(this);
      this.toggleMenu = this.toggleMenu.bind(this);
      this.updateBackgroundColor = this.updateBackgroundColor.bind(this);

      this.backgroundColors = {
        page2: '#fff',
        page3: '#040404',
        page4: '#fff',
        form: '#F4F1ED',
      };

      this.logos = {
        page2: Logo,
        page3: LogoBlackBackground,
        page4: Logo,
        form: Logo
      };
    }

    componentDidMount() {
      window.addEventListener('scroll', this.throttledScrollHandler, true);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.throttledScrollHandler, true);
    }

    handleScroll() {
      this.setState({
        scrollY: window.scrollY,
      });

      if (!this.state.landingIsInView) {
        this.setState({
          navBottom: this.nav.offsetHeight
        });
      }
    }


    showDropdown() {
      if (this.state.dropdownVisible === false ) {
        this.setState({
          dropdownVisible: true,
          landingIsInView: false,
        });
      }
    }

    hideDropdown() {
      if (this.state.dropdownVisible === true) {
        this.setState({
          dropdownVisible: false,
          landingIsInView: true,
        });
      }
    }

    toggleMenu() {
      this.setState({
        menuOpen: !this.state.menuOpen
      });
    }

    updateBackgroundColor(page) {
      this.setState({
        navBackgroundColor: this.backgroundColors[page],
        navLogo: this.logos[page],
      });
    }

    render() {
      const { landingIsInView, menuOpen, navBackgroundColor, navLogo } = this.state;
      const menuState = menuOpen ? 'open' : 'closed';
      return (
        <div className="composedComponent">
          {
            landingIsInView ?
              <LandingNav /> :
                (
                  <nav
                    className="dd-nav"
                    ref={(elem) => this.nav = elem}
                    style={{ backgroundColor: `${navBackgroundColor}`}}
                  >
                    <div className="dd-nav__left">
                      <div className="dd-nav__left--desktop">
                        <ul className="dd-nav__list">
                          <li className="dd-nav__list-item left-item">
                            STORE
                          </li>
                          <li className="dd-nav__list-item">
                            TUTORIALS
                          </li>
                        </ul>

                        <ul className="dd-nav__social-icons">
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
                    <div className="dd-nav__center">
                      <div className="dd-logo_container">
                        <img className="dd-logo" src={navLogo} />
                      </div>
                    </div>
                    <div className="dd-nav__right">
                      <div className="dd-btn_container">
                        <img className="dd-menu_btn" src={WhiteMenuButton} />
                      </div>

                      <div className="dd-nav__right--desktop">
                        <ul className="dd-nav__list">
                          <li className="dd-nav__list-item left-item">
                            BLOG
                          </li>
                          <li className="dd-nav__list-item">
                            CONTACT
                          </li>
                        </ul>

                        <div
                          className="dd-btn_container--desktop"
                          onClick={this.toggleMenu}
                        >
                          <img className="dd-menu_btn--desktop" src={WhiteMenuButton} />
                        </div>
                      </div>
                    </div>

                    <Menu menuState={menuState} toggleMenu={this.toggleMenu} />
                  </nav>
                )
          }

          <div className="child-component-content">
            <ChildComponent
              {...this.props}
              scrollHelper={this.scrollHelper}
              showDropdown={this.showDropdown}
              hideDropdown={this.hideDropdown}
              updateBackgroundColor={this.updateBackgroundColor}
              scrollY={this.state.scrollY}
              navBottom={this.state.navBottom}
            />
          </div>
        </div>
      );
    }
  }

  return DropdownNav;
};
