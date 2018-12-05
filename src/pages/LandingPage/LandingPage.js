import React, { Component } from 'react';
import Nav from '../../components/Nav';
import Drone from '../../components/Drone';
import LandingText from '../../components/LandingText';

import './style.scss';

const LandingPage = () => {
  return (
    <div className="landing_page">
      <Nav />
      <Drone />
      <LandingText />
    </div>
  );
};

export default LandingPage;
