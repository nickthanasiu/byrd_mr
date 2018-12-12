import React, { Component } from 'react';
import axios from 'axios';

import Input from '../Input';
import TextArea from '../TextArea';
import FormButton from '../FormButton';
import FormErrors from '../FormErrors';

import './style.scss';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      formErrors: {name: '', email: '', message: ''},
      nameValid: false,
      emailValid: false,
      messageValid: false,
      formValid: false,
      errorsVisible: false,
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.validateField = this.validateField.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.showErrorsOnFailedSubmit = this.showErrorsOnFailedSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    const formData = {
      name: name,
      email: email,
      message: message
    };

    axios.post('https://reqres.in/api/users', { formData })
      .then((res) => {
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
      });
      this.resetForm(e);
  }

  resetForm(e) {
    e.preventDefault();
    this.setState({
      name: '',
      email: '',
      message: ''
    });
  }

  handleName(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      name: value
    }, () => {
      this.validateField(name, value);
    });
  }

  handleEmail(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      email: value
    }, () => {
      this.validateField(name, value);
    });
  }

  handleMessage(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      message: value
    }, () => {
      this.validateField(name, value);
    });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let messageValid = this.state.messageValid;

    switch (fieldName) {
      case 'name':
        nameValid = value.length > 0;
        fieldValidationErrors.name = nameValid ? '' : ' is empty';
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== null;
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'message':
        messageValid = value.length > 0;
        fieldValidationErrors.message = messageValid ? '' : ' is empty. What are your plans?';
        break;
      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      nameValid,
      emailValid,
      messageValid
    }, () => {
      this.validateForm();
    });
  }

  validateForm() {
    this.setState({
      formValid: this.state.nameValid && this.state.emailValid && this.state.messageValid
    });
  }

  showErrorsOnFailedSubmit() {
    this.setState({
      errorsVisible: true
    });
  }

  render() {
    const errorPanelVisible = this.state.errorsVisible ? 'error-panel-visible' : null;

    return (
      <div className="form__wrapper">
        <form
          className="form__form"
          autoComplete="off"
          onSubmit={this.handleFormSubmit}
        >
          <Input
            name="name"
            title="FULL NAME"
            type="text"
            value={this.state.name}
            placeHolder="Enter your full name"
            handleChange={this.handleName}
          />

          <Input
            name="email"
            title="EMAIL"
            type="text"
            value={this.state.email}
            placeHolder="Enter your email"
            handleChange={this.handleEmail}
          />

          <TextArea
            name="message"
            title="MESSAGE"
            value={this.state.message}
            placeHolder="What are your plans?"
            handleChange={this.handleMessage}
          />

          <FormButton
            title="Send Message"
            formValid={this.state.formValid}
            showErrors={this.showErrorsOnFailedSubmit}
          />

        <div className='error-panel-visible'>
            <FormErrors formErrors={this.state.formErrors} />
          </div>
        </form>
      </div>
    );
  }
}
