import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { arrowLeft } from 'react-icons-kit/fa/arrowLeft';
import { arrowRight } from 'react-icons-kit/fa/arrowRight';

import ImageSelectors from '../../components/ImageSelectors';
import Drone from '../Drone';
import Propeller from '../Propeller';


import './style.scss';

export default class ImageSlider extends Component {
  constructor(props) {
    super(props);

    this.slides = ['Drone', 'Propeller'];

    this.state = {
      counter: 0,
      visibleSlide: this.slides[0]
    };

    this.goToLastImage = this.goToLastImage.bind(this);
    this.goToNextImage = this.goToNextImage.bind(this);

  }

  goToLastImage() {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
        visibleSlide: this.slides[this.state.counter - 1]
      });
    } else {
      this.setState({
        counter: this.slides.length - 1,
        visibleSlide: this.slides[this.slides.length - 1]
      });
    }
  }

  goToNextImage() {

    if (this.state.counter < (this.slides.length - 1)) {
      this.setState({
        counter: this.state.counter + 1,
        visibleSlide: this.slides[this.state.counter + 1]
      });
    } else {
      this.setState({
        counter: 0,
        visibleSlide: this.slides[0]
      });
    }
  }

  renderDrone() {
    return <Drone page='page2' />
  }

  renderPropeller() {
    return <Propeller />
  }

  render() {
    return (
      <div className="image-slider">
        <div className="backArrow" onClick={this.goToLastImage}>
          <Icon icon={arrowLeft} size={24} />
        </div>

        <div className="nextArrow" onClick={this.goToNextImage}>
          <Icon icon={arrowRight} size={24} />
        </div>

        {
          this.state.visibleSlide === 'Drone' ?
            this.renderDrone() :
              this.renderPropeller()
        }

        <ImageSelectors activeIndex={this.state.counter} />
      </div>
    );
  }
}
