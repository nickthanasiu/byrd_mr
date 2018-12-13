import React, { Component } from 'react';
import throttle from 'lodash.throttle';

import './style.scss';

const SidebarRight = ({ isVisible, activePageId}) => {
  const hidden = isVisible ? null : 'hidden';
  const active0 = activePageId === 0 ? 'active' : null;
  const active1 = activePageId === 1 ? 'active' : null;
  const active2 = activePageId === 2 ? 'active' : null;

  return (
    <div className={`sidebar-right ${hidden}`}>
      <div className="page-indicators-container">
        <ul className="page-indicators">
          <li className={`indicator ${active0}`}></li>
          <li className={`indicator ${active1}`}></li>
          <li className={`indicator ${active2}`}></li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarRight;
