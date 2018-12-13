import React, { Component } from 'react';
import Nav from '../../components/Nav';
import Drone from '../../components/Drone';
import Page2Text from '../../components/Page2Text';
import ImageSlider from '../../components/ImageSlider';

import './style.scss';

export default class Page2 extends Component {
  render() {
    return (
      <div
        className="page-2"
        style={{ backgroundColor: '#fff' }}
        ref={(elem) => this.page = elem}
      >
        <div className="page-2__images-container">
          <div className="page-2__drone">
            <Drone page="page2" />
          </div>
          <ImageSlider />
        </div>
        <Page2Text />
      </div>
    );
  }
}
