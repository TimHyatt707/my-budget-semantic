import React, { Component } from 'react';

import LandingPageLayout from './LandingPageLayout';

import Header from './LandingPageHeader';

import SignupForm from './LandingPageSignupForm';

import '../css/LandingPage.css';

export default class LandingPage extends Component{
  render() {
    return (
      <div id="landing-page">
        <img id="blurred-background" src='https://static.pexels.com/photos/327394/pexels-photo-327394.jpeg' alt='waterfall' />
        <LandingPageLayout>
          <Header />
          <SignupForm />
        </LandingPageLayout>
      </div>
    );
  }
}
