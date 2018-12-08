import React, { Component } from 'react';
import Nav from '../../components/Nav';
import Drone from '../../components/Drone';
import Page2Text from '../../components/Page2Text';

import './style.scss';

// this.props.scrollHelper(this.page)

class Page2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      droneWidth: null,
      droneHeight: null,
    };

    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.setState({
      droneWidth: window.innerWidth > 1026 ? '429px' : window.innerWidth > 757 ? '440px' : '322px',
      droneHeight: window.innerWidth > 1026 ? '333px' : window.innerWidth > 757 ? '340px' : '246px'
    });
  }

  handleResize() {
    this.setState({
      droneWidth: window.innerWidth > 1026 ? '429px' : window.innerWidth > 757 ? '440px' : '322px',
      droneHeight: window.innerWidth > 1026 ? '333px' : window.innerWidth > 757 ? '340px' : '246px',
    });
  }

  render() {
    const { droneWidth, droneHeight } = this.state;
    return (
      <div
        className="page-2"
        style={{ backgroundColor: '#fff' }}
        ref={(elem) => this.page = elem}
      >

      <div className="page-2__images-container">

        <Drone page={'page2'}  />

        <div className="page-2__image-selectors">
          <ul className="selectors">
            <li className="selectors__1 active"></li>
            <li className="selectors__2"></li>
            <li className="selectors__3"></li>
          </ul>
        </div>
      </div>

      <div className="page-2__text-container">
        <div className="page-2__text-header">
          <div className="page-2__text-title">
            Craft and design.
          </div>
          <div className="page-2__title-underline" />
        </div>

        <Page2Text />
      </div>

      </div>
    );
  }
}

export default Page2;
