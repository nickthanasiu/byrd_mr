import React, { Component } from 'react';
import DroneImg from '../../assets/images/Drone.png';
import Shadow from '../../assets/images/Shadow.png';

import './style.scss';

// page prop designates which page the Drone component is being used in and applies that
// page name as a css class
const Drone = ({ page }) => {
  return (
    <div className={`drone ${page}`}>
      <div className="images-wrapper">
        <img className="drone-img" src={DroneImg} />
        <img className="shadow-img" src={Shadow} />
      </div>
    </div>
  );
};

export default Drone;
