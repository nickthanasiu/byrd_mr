import React, { Component } from 'react';
import throttle from 'lodash.throttle';
import debounce from 'lodash/debounce';
import Drone from '../../components/Drone';
import LandingText from '../../components/LandingText';

import './style.scss';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inView: true
    };

    this.landingIsInView = this.landingIsInView.bind(this);
  }

  componentDidMount() {
    this.landingIsInView();
  }

  componentDidUpdate() {
    this.landingIsInView();
  }

  landingIsInView() {
    if(this.state.inView) {
      if(this.props.scrollY > this.page.offsetHeight) {
        console.log('Landing page is OUT of view!!');
        this.setState({
          inView: false
        }, () => {
          this.props.showDropdown();
        });
      }
    }

    if(!this.state.inView) {
      if (this.props.scrollY < this.page.offsetHeight) {
        console.log('Landing page is IN view!!!');
        this.setState({
          inView: true
        }, () => {
          this.props.hideDropdown();
        });
      }
    }
  }






  render() {
    return (
      <div
        className="landing_page"
        style={{ backgroundColor: '#F4F1ED' }}
        ref={(elem) => this.page = elem}
      >
        <Drone page={'landing'} />
        <LandingText />
      </div>
    );
  }
}

export default LandingPage;
