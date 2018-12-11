import React, { Component } from 'react';
import throttle from 'lodash.throttle';
import { Icon } from 'react-icons-kit'
import { facebookSquare, instagram, twitter } from 'react-icons-kit/fa/';
import Logo from '../../assets/logo/Logo.png';
import MenuButton from '../../assets/icons/Menu.png';
import WhiteMenuButton from '../../assets/icons/menu_button_white.png';
import Menu from '../Menu';

import './style.scss';

export default (ChildComponent) => {
  class Nav extends Component {
    constructor(props) {
      super(props);

      this.state = {
        navBottom: null,
        navBackgroundColor: null,
        navSize: 'large',
        menuOpen: false
      };

      this.handleScroll = this.handleScroll.bind(this);
      this.throttledScrollHandler = throttle(this.handleScroll, 250);
      this.shrinkNavBar = this.shrinkNavBar.bind(this);
      this.growNavBar = this.growNavBar.bind(this);
      this.toggleMenu = this.toggleMenu.bind(this);
    }

    componentDidMount() {
      window.addEventListener('scroll', this.throttledScrollHandler, true);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.throttledScrollHandler, true);
    }

    handleScroll() {
      this.setState({
        navBottom: this.nav.offsetHeight
      });
    }

    shrinkNavBar() {
      if (this.state.navSize === 'large') {
        this.setState({
          navSize: 'small'
        });
      }
    }

    growNavBar() {
      if (this.state.navSize === 'small') {
        this.setState({
          navSize: 'large'
        });
      }
    }

    toggleMenu() {
      this.setState({
        menuOpen: !this.state.menuOpen
      });
    }

    render() {
      const { navSize, menuOpen } = this.state;
      const menuState = menuOpen ? 'open' : 'closed';
      return (
        <div className="composedComponent">
          <nav className={`nav ${navSize}`} ref={(elem) => this.nav = elem}>
            <div className="nav__left">
              <div className="nav__left--desktop">
                <ul className="nav__list">
                  <li className="nav__list-item left-item">
                    STORE
                  </li>
                  <li className="nav__list-item">
                    TUTORIALS
                  </li>
                </ul>

                <ul className="nav__social-icons">
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
                  <li className="nav__list-item left-item">
                    BLOG
                  </li>
                  <li className="nav__list-item">
                    CONTACT
                  </li>
                </ul>

                <div
                  className="btn_container--desktop"
                  onClick={this.toggleMenu}
                >
                  <img className="menu_btn--desktop" src={WhiteMenuButton} />
                </div>
              </div>
            </div>

            <Menu menuState={menuState} toggleMenu={this.toggleMenu} />
          </nav>

          <div className="child-component-content">
            <ChildComponent
              {...this.props}
              scrollHelper={this.scrollHelper}
              navBottom={this.state.navBottom}
              shrinkNavBar={this.shrinkNavBar}
              growNavBar={this.growNavBar}
            />
          </div>
        </div>
      );
    }
  }

  return Nav;
};
