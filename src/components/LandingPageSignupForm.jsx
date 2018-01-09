import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import '../css/LandingPage.css';

export default class LandingPageSignupForm extends Component {
  render(){
    return (
      <Form>
        <Form.Field>
          <label>Email</label>
          <input placeholder='email address' />
        </Form.Field>
        <Form.Field>
          <label>Username</label>
          <input placeholder='username' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder='password' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    );
  }
}
