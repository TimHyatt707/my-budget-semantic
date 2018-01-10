import React, { Component } from 'react';

import { Button, Form } from 'semantic-ui-react';

export default class LandingPageSignupForm extends Component {
  constructor() {
    super();
    this.state = {
      errorMsg: null,
      username: '',
      password: '',
      email: '',
    };
    this._onSubmitForm = this._onSubmitForm.bind(this);
    this._handleLogin = this._handleLogin.bind(this);
    this._onChangeUsername = this._onChangeUsername.bind(this);
    this._onChangePassword = this._onChangePassword.bind(this);
    this._onChangeEmail = this._onChangeEmail.bind(this);
  }

  _onSubmitForm(e) {
    e.preventDefault();
    const email = this.state.email;
    const username = this.state.username;
    const password = this.state.password;

    // password validation

    if (password.length < 6) {
      return this.setState({ errorMsg: 'Password must be at least six characters long' });
    } else if (password.match(/[\W]/g) === null) {
      return this.setState({ errorMsg: 'Password must contain at least one special character' });
    } else {
      this.setState({ errorMsg: undefined });
    }

    // username validation

    if (username.length < 6) {
      return this.setState({ errorMsg: 'Username must be at least six characters long' });
    } else {
      this.setState({ errorMsg: undefined });
    }

    // email validation

    if (email.match(/[\w]+[\@]+([A-Za-z0-9]*)+(\.[A-Za-z0-9-]+)+/g) === null) {
      return this.setState({ errorMsg: 'Invalid email format' });
    } else {
      this.setState({ errorMsg: undefined });
    }

    // this.props.onCreateUser({ email, username, password });

    return undefined;
  }

  _handleLogin() {
    // TODO: redirect to login page
  }

  _onChangeUsername(username) {
    this.setState({ username: username.target.value });
  }

  _onChangePassword(password) {
    this.setState({ password: password.target.value });
  }

  _onChangeEmail(email) {
    this.setState({ email: email.target.value });
  }

  render() {
    return (
      <div className="signupform-wrapper">
        <Form className="signupform">
          <div className="errorMsg">{this.state.errorMsg}</div>
          <Form.Field >
            <label className="form-label">Email</label>
            <input id="email" placeholder="email" onChange={this._onChangeEmail} />
          </Form.Field>
          <Form.Field >
            <label className="form-label">Username</label>
            <input id="username" placeholder="username" onChange={this._onChangeUsername} />
          </Form.Field>
          <Form.Field >
            <label className="form-label">Password</label>
            <input
              id="password"
              placeholder="password"
              type="password"
              onChange={this._onChangePassword}
            />
          </Form.Field>
          <Button.Group className="button-wrapper">
            <Button type="submit" onClick={this._onSubmitForm} className="ui button" color="blue">
              Submit
            </Button>
            <Button.Or />
            <Button color="green" onClick={this._handleLogin}>Login</Button>
          </Button.Group>
        </Form>
      </div>
    );
  }
}
