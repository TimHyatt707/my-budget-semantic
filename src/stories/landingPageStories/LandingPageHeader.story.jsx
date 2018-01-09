import React from 'react';

import { storiesOf } from '@storybook/react';

import LandingPageHeader from '../../components/LandingPageHeader';

import '../../css/LandingPage.css';

storiesOf('Header', module).add('Header', () => <LandingPageHeader />);
