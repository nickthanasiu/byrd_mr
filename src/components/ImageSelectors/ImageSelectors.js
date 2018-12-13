import React, { Component } from 'react';

import './style.scss';

export default class ImageSelectors extends Component {


  render() {
    const active0 = this.props.activeIndex === 0 ? 'active' : null;
    const active1 = this.props.activeIndex === 1 ? 'active' : null;
    return (
      <div className="image-selectors">
        <ul className="selectors">
          <li className={active0}></li>
          <li className={active1}></li>
          <li></li>
        </ul>
      </div>
    );
  }
}
