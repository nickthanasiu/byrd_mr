import React, { Component } from 'react';
import Arrow from '../../assets/icons/button_arrow.png';
import { Icon } from 'react-icons-kit';
import { ic_check } from 'react-icons-kit/md/ic_check'


import './style.scss';

export default class FormButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitting: false,
      success: false
    };

    this.submit = this.submit.bind(this);
    this.success = this.success.bind(this);
    this.reset = this.reset.bind(this);
  }

  submit() {
    this.setState({
      submitting: true
    }, () => {
      this.success();
    });
  }

  success() {
    setTimeout(() => {
      this.setState({
        success: true,
        submitting: false
      }, () => {
        this.reset();
      })
    }, 1500)
  }

  reset() {
    setTimeout(() => {
      this.setState({
        success: false
      });
    }, 1000);
  }

  renderButtonContent() {
    return (
      <div className="button-content">
        <span>Send Message</span>
        <img className="arrow" src={Arrow} alt="Forward arrow" />
      </div>
    );
  }

  renderSuccessContent() {
    return (
      <div className="success-content">
        <span>Thanks!</span>
        <Icon icon={ic_check} />
      </div>
    );
  }



  render() {
    const submitting = this.state.submitting ? 'submitting' : 'null';
    const success = this.state.success ? 'success' : null;

    return (
      <div className="form-button-container">
        <button
          className={`form-submit-button ${submitting} ${success}`}
          type="submit"
          onClick={this.submit}
        >
          {
            this.state.success ?
              this.renderSuccessContent() :
              this.renderButtonContent()
          }
        </button>
      </div>
    );
  }
}
