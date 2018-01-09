import React from 'react';
import { Header, Container } from 'semantic-ui-react';

export default function LandingPageHeader() {
  return (
    <Container className="header-wrapper">
      <Header textAlign="center" className="header" > Need a budget? </Header>
      <p> Create an account below to start better managing your finances. </p>
    </Container>
  );
}
