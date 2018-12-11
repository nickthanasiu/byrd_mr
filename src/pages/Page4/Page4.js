import React, { Component } from 'react';

import Remote from '../../components/Remote';
import Page4Text from '../../components/Page4Text';

import './style.scss';

export default class Page4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inView: false
    };

    this.page4IsInView = this.page4IsInView.bind(this);
  }

  componentDidMount() {
    this.page4IsInView();
  }

  componentDidUpdate() {
    this.page4IsInView();
  }

  page4IsInView() {
    const { scrollY, navBottom } = this.props;

    if (!this.state.inView) {
      if ((scrollY + navBottom) >= this.page.offsetTop) {
        this.setState({
          inView: true
        }, () => {
          this.props.updateBackgroundColor('page4');
        });
      }
    }

    if (this.state.inView) {
      if ((scrollY + navBottom) < this.page.offsetTop) {
        this.setState({
          inView: false
        }, () => {
          this.props.updateBackgroundColor('page3');
        });
      }
    }

  }

  render() {
    return (
      <div
        className="page-4"
        ref={(elem) => this.page = elem}
      >
        <Remote />
        <Page4Text />
      </div>
    );
  }
}
