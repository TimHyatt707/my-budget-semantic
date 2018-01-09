import React, { Component } from 'react';

import { Image } from 'semantic-ui-react';

import LandingPageLayout from './LandingPageLayout';

import Header from './LandingPageHeader';

import SignupForm from './LandingPageSignupForm';

import '../css/LandingPage.css';

const backgroundImage = require('../assets/waterfall.jpeg');

export default function LandingPage() {
  return (
    <div id="landing-page">
      <Image id="blurred-background" src={backgroundImage} />
      <LandingPageLayout>
        <Header />
        <SignupForm />
      </LandingPageLayout>
    </div>
  );
}
