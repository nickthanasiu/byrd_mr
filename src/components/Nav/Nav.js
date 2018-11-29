import React from 'react';
import Logo from '../../assets/logo/Logo.png';
import MenuButton from '../../assets/icons/Menu.png';

import './style.scss';

const styles = {

  nav__left: {
    height: '100%',
    width: '33%',

  },
  nav__center: {
    height: '100%',
    width: '33%',
  },
  nav__logoContainer: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
  },
  nav__logo: {
    height: '20.22px',
    width: '136px',
  },
  nav__right: {
    height: '100%',
    width: '33%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  nav__buttonContainer: {
    marginTop: '34px',
    marginRight: '27px',

    width: '29px',
    height: '12px',
  },
  nav__menuButton: {
    height: '100%',
    width: '100%',
  },
};

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__left" style={ styles.nav__left }>
        {/*Nothing display when mobile*/}
      </div>
      <div className="nav__center" style={ styles.nav__center }>
        <div className="nav__logoContainer" style={ styles.nav__logoContainer}>
          <img className="nav__logo" src={Logo} style={ styles.nav__logo} />
        </div>
      </div>
      <div className="nav__right" style={ styles.nav__right }>
        <div className="nav__buttonContainer" style={ styles.nav__buttonContainer }>
          <img className="nav__menuButton" src={MenuButton} style={ styles.nav__menuButton } />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
