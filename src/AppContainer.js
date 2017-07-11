import ReactGA from 'react-ga';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import App from './App';

class AppContainer extends React.Component {

  constructor() {
    super();
    ReactGA.initialize('UA-77141894-2');
  }

  logPageView() {
    ReactGA.set({ page: window.location.pathname + window.location.search });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

    render() {
      return(
      <Router onUpdate={this.logPageView}>
        <div>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/:id" component={App} />
          </Switch>
        </div>
      </Router>
    )}
}

export default AppContainer;
