import React from 'react';
import DroneImg from '../../assets/images/Drone.png';
import Shadow from '../../assets/images/Shadow.png';

import './style.scss';

const Drone = () => {
  return (
    <div className="drone">
      <div className="images-wrapper">
        <img className="drone-img" src={DroneImg} />
        <img className="shadow_img" src={Shadow} />
      </div>
    </div>
  );
};

export default Drone;
