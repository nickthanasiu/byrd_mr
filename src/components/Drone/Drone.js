import React, { Component } from 'react';
import DroneImg from '../../assets/images/Drone.png';
import Shadow from '../../assets/images/Shadow.png';

import './style.scss';

//<img className="shadow-img" src={Shadow} />

// page prop designates which page the Drone component is being used in and applies that
// page name as a css class
const Drone = ({ page }) => {
  return (
    <div className={`drone ${page}`}>
      <div className="images-wrapper">
        <img className="drone-img" src={DroneImg} />

      </div>
    </div>
  );
};

export default Drone;
