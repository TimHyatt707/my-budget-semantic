import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

export default class LandingPageSignupForm extends Component {
  constructor() {
    super();
    this.state = {
      errorMsg: null
    }
    this._onSubmitForm = this._onSubmitForm.bind(this);
  }

  _onSubmitForm(e) {
    const email = e.target.email.value;
    const username = e.target.username.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      this.setState({ errorMsg: 'Password is too short' });
    } else {
      this.setState({ errorMsg: undefined });
    }
  }

  render() {
    return (
      <div className="signupform-wrapper">
        <Form onSubmit={this._onSubmitForm}>
          <div className="errorMsg">{this.state.errorMsg}</div>
          <Form.Field >
            <label className="form-label">Email</label>
            <input id="email" placeholder="email address" />
          </Form.Field>
          <Form.Field >
            <label className="form-label">Username</label>
            <input id="username" placeholder="username" />
          </Form.Field>
          <Form.Field >
            <label className="form-label">Password</label>
            <input id="password" placeholder="password" />
          </Form.Field>
          <div className="button-wrapper">
            <Button type="submit" primary>Submit</Button>
            <Button secondary>Login</Button>
          </div>
        </Form>
      </div>
    );
  }
}
