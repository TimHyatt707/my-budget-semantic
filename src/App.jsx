import React from 'react';

import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'semantic-ui-css/semantic.css';

import LandingPageContainer from './redux/containers/LandingPageContainer';

import setupStore from './redux/setupStore';

const store = setupStore();

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPageContainer} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}
