import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import '../css/LandingPage.css';


export default function LandingPageHeader() {
  return (
    <Container className="wrapper">
      <Header textAlign="center" className="Header" > Need a budget? </Header>
      <p> Create an account below to start better managing your finances. </p>
    </Container>
  );
}
