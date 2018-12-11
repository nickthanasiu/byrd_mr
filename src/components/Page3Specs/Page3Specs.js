import React from 'react';

import './style.scss';

const Page3Specs = () => {
  return (
    <div className="page-3__specs">
      <ul className="page-3__specs-list">
        <li className="page-3__spec-item">
          <span className="spec">
            700
          </span>
          <span className="spec-descriptor">
            TVL VIDEO
          </span>
        </li>
        <li className="page-3__spec-item">
          <span className="spec">
            120&deg;
          </span>
          <span className="spec-descriptor">
            VISUAL RANGE
          </span>
        </li>
        <li className="page-3__spec-item">
          <span className="spec">
            HD
          </span>
          <span className="spec-descriptor">
            NIGHT VISION
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Page3Specs;
