import React from 'react';

import { storiesOf } from '@storybook/react';

import 'semantic-ui-css/semantic.css';

import LandingPage from '../../components/LandingPage';

storiesOf('Landing Page', module).add('Landing Page', () => <LandingPage />);
