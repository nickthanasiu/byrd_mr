import React, { Component } from 'react';
import throttle from 'lodash.throttle';

import LandingNav from '../LandingNav';
import Logo from '../../assets/logo/Logo.png';
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
        navBackgroundColor: null,
        scrollY: 0,
        dropdownVisible: false,
        landingIsInView: true,
      };

      this.handleScroll = this.handleScroll.bind(this);
      this.throttledScrollHandler = throttle(this.handleScroll, 250);
      this.showDropdown = this.showDropdown.bind(this);
      this.hideDropdown = this.hideDropdown.bind(this);
      //this.scrollHelper = this.scrollHelper.bind(this);
      //this.updateBackgroundColor = this.updateBackgroundColor.bind(this);
    }

    componentDidMount() {
      window.addEventListener('scroll', this.throttledScrollHandler, true);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.throttledScrollHandler, true);
    }

    handleScroll() {
      this.setState({
        scrollY: window.scrollY
      });
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
      console.log('hiding dropdown');
      if (this.state.dropdownVisible === true) {
        this.setState({
          dropdownVisible: false,
          landingIsInView: true,
        });
      }
    }



  /*
  scrollHelper(currentPage) {
    console.log('firing scroll helper');
    let offset = currentPage.getBoundingClientRect().top;
    let navBottom = this.state.navBottom;

    console.log('offset: ', offset);
    console.log('navBottom: ', navBottom);

    if (offset < navBottom) {
      this.updateBackgroundColor(currentPage);
    }
  }

  updateBackgroundColor(currentPage) {
    console.log('Background color is: ', currentPage.style.backgroundColor);
    this.setState({
      navBackgroundColor: currentPage.style.backgroundColor
    });
  }
  */


    render() {
      const { landingIsInView, menuOpen } = this.state;
      const menuState = menuOpen ? 'open' : 'closed';

      return (
        <div className="composedComponent">
          {
            landingIsInView ?
              <LandingNav /> :
                (
                  <nav className="dd-nav" ref={(elem) => this.nav = elem}>
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
                        <img className="dd-logo" src={Logo} />
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
                          className="dd-btn_container--desktop">
                          <img className="dd-menu_btn--desktop" src={WhiteMenuButton} />
                        </div>
                      </div>
                    </div>
                  </nav>
                )
          }

          <div className="child-component-content">
            <ChildComponent
              {...this.props}
              scrollHelper={this.scrollHelper}
              showDropdown={this.showDropdown}
              hideDropdown={this.hideDropdown}
              scrollY={this.state.scrollY}
            />
          </div>
        </div>
      );
    }
  }

  return DropdownNav;
};
