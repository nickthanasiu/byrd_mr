import React from 'react';

import './style.scss';

const SidebarRight = ({ isVisible }) => {
  const hidden = isVisible ? null : 'hidden';

  return (
    <div className={`sidebar-right ${hidden}`}>
      <div className="page-indicators-container">
        <ul className="page-indicators">
          <li className="indicator active"></li>
          <li className="indicator"></li>
          <li className="indicator"></li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarRight;
