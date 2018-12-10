import React from 'react';
import CameraImg from '../../assets/images/camera.png';

import './style.scss';

const Camera = () => {
  return (
    <div className="camera__container">
      <img className="camera__img" src={CameraImg} />
    </div>
  );
};

export default Camera;
