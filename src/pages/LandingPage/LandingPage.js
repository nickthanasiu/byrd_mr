import React, { Component } from 'react';
import Nav from '../../components/Nav';
import Drone from '../../components/Drone';

import './style.scss';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing_page">
        <Nav />
        <Drone />
      </div>
    );
  }
}
