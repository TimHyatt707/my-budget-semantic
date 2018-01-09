import React from 'react';

import { storiesOf } from '@storybook/react';

import App from '../App';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Application', module).add('Simulate application launch at App.jsx', () => <App />);
