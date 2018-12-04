import React, { Component } from 'react';
import Nav from '../../components/Nav';
import Drone from '../../components/Drone';
import LandingText from '../../components/LandingText';

import './style.scss';

class LandingPage extends Component {
  render() {
    return (
      <div className="landing_page">
        <Nav />

      </div>
    );
  }
}

export default LandingPage;
