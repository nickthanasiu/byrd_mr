import React from 'react';

import './style.scss';

const SidebarLeft = ({ isVisible }) => {
  const hidden = isVisible ? null : 'hidden';

  return (
    <div className={`sidebar-left ${hidden}`}>
      <div className="sidebar-left__text-container">
        <div className="sidebar-left__text-content">
          F-210 PERFORMANCE RACING DRONE
        </div>
      </div>
    </div>
  );
};

export default SidebarLeft;
