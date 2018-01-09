import React from 'react';

import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'semantic-ui-css/semantic.css';

import LandingPage from './components/LandingPage';

export default function App() {
  return (
    <div className="App">
      {/* TO DO: Implement redux store provider */}
      <Router>
        <Switch>
          {/* TO DO: Sync up with page container instead of page component */}
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}
