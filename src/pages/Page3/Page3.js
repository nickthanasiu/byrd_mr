import React, { Component } from 'react';
import Camera from '../../assets/images/camera.png';

import './style.scss';

export default class Page3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inView: false
    };

    this.page3IsInView = this.page3IsInView.bind(this);
  }

  componentDidMount() {
    this.page3IsInView();
  }

  componentDidUpdate() {
    this.page3IsInView();
  }

  page3IsInView() {
    const { scrollY, navBottom } = this.props;
    if (!this.state.inView) {
      //console.log('page 3 top: ', this.page.offsetHeight);
      if ((scrollY + navBottom) >= this.page.offsetTop) {
        console.log('Page 3 is IN view!!');
        this.setState({
          inView: true
        }, () => {
          this.props.updateBackgroundColor('page3');
        });
      }
    }

    if (this.state.inView) {
      if ((scrollY + navBottom) < this.page.offsetTop) {
        console.log('Page 3 is OUT of view');
        this.setState({
          inView: false
        }, () => {
          this.props.updateBackgroundColor('page2');
        });
      }
    }
  }

  render() {
    return (
      <div
        className="page-3"
        ref={(elem) => this.page = elem}
      >
        <div className="page-3__img-container">
          <img className="page-3__img" src={Camera} />
        </div>
        <div className="page-3__body">
          <div className="page-3__text-container">

          </div>
          <div className="page-3__specs">

          </div>
        </div>
      </div>
    );
  }
}
