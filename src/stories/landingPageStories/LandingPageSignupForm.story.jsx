import React from 'react';

import { storiesOf } from '@storybook/react';

import LandingPageSignupForm from '../../components/LandingPageSignupForm';

import '../../css/LandingPage.css';

storiesOf('Signup Form', module).add('Signup Form', () => <LandingPageSignupForm />);
