import React from 'react';
import PropellerImg from '../../assets/images/Propeller.png';

import './style.scss';

const Propeller = () => {
  return (
    <div className="propeller-container">
      <img className="propeller-img" src={PropellerImg} alt="Propeller photo" />
    </div>
  );
};

export default Propeller;
