import React, { Component } from 'react';
import Form from '../../components/Form';

import './style.scss';

export default class FormPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inView: false
    };

    this.formIsInView = this.formIsInView.bind(this);
  }

  componentDidMount() {
    this.formIsInView();
  }

  componentDidUpdate() {
    this.formIsInView();
  }

  formIsInView() {
    const { scrollY, navBottom, hideSidebar, showSidebar } = this.props;

    if (!this.state.inView) {
      if ((scrollY + navBottom) >= this.page.offsetTop) {

        hideSidebar();

        this.setState({
          inView: true
        }, () => {
          this.props.updateBackgroundColor('form');
        });
      }
    }

    if (this.state.inView) {
      if ((scrollY + navBottom) < this.page.offsetTop) {

        showSidebar();

        this.setState({
          inView: false
        }, () => {
          this.props.updateBackgroundColor('page4');
        });
      }
    }
  }


  render() {
    return (
      <div
        className="form"
        ref={(elem) => this.page = elem}
      >
        <Form />
      </div>
    );
  }
}
