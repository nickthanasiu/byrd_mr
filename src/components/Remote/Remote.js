import React from 'react';
import RemoteImg from '../../assets/images/Remote.png';

import './style.scss';

const Remote = () => {
  return (
    <div className="remote__container">
      <img className="remote__img" src={RemoteImg} alt="Remote control photo" />
    </div>
  );
};

export default Remote;
