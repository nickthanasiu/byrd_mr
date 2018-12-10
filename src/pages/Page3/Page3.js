import React, { Component } from 'react';
import Camera from '../../components/Camera';
import Page3Text from '../../components/Page3Text';
import Page3Specs from '../../components/Page3Specs';

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
      if ((scrollY + navBottom) >= this.page.offsetTop) {
        this.setState({
          inView: true
        }, () => {
          this.props.updateBackgroundColor('page3');
        });
      }
    }

    if (this.state.inView) {
      if ((scrollY + navBottom) < this.page.offsetTop) {
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
        <Camera />
        <div className="page-3__body">
          <Page3Text />
          <Page3Specs />
        </div>
      </div>
    );
  }
}
