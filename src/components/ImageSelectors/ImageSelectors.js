import React, { Component } from 'react';

import './style.scss';

export default class ImageSelectors extends Component {
  render() {
    return (
      <div className="image-selectors">
        <ul className="selectors">
          <li className="selectors__1 active"></li>
          <li className="selectors__2"></li>
          <li className="selectors__3"></li>
        </ul>
      </div>
    );
  }
}
