import React, { Component } from 'react';
import Nav from '../../components/Nav';
import Drone from '../../components/Drone';
import Page2Text from '../../components/Page2Text';

import './style.scss';

class Page2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayed_img: [
        {
          id: 0,
          title: 'Drone',
          selected: true,
          key: 'displayed_img'
        },
        {
          id: 1,
          title: 'Propeller',
          selected: false,
          key: 'displayed_img'
        },
      ]
    };
  }

  render() {
    const { displayed_img } = this.state;
    return (
      <div
        className="page-2"
        style={{ backgroundColor: '#fff' }}
        ref={(elem) => this.page = elem}
      >
        <div className="page-2__images-container">
          <Drone page={'page2'}  />
        </div>
        <Page2Text />
      </div>
    );
  }
}

export default Page2;
