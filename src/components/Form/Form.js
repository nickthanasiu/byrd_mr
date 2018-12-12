import React, { Component } from 'react';
import axios from 'axios';

import Input from '../Input';
import TextArea from '../TextArea';
import FormButton from '../FormButton';

import './style.scss';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: ''
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
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
    this.setState({
      name: e.target.value
    });
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleMessage(e) {
    this.setState({
      message: e.target.value
    });
  }

  render() {
    return (
      <div className="form__wrapper">
        <form
          className="form__form"
          onSubmit={this.handleFormSubmit}
        >
          <Input
            name="full_name"
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

        <FormButton title="Send Message" />

        </form>
      </div>
    );
  }
}
