import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import App from './App';

const AppContainer = () => {

  
      return(
      <Router onUpdate={this.logPageView}>
        <div>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/:id" component={App} />
          </Switch>
        </div>
      </Router>
    )
}

export default AppContainer;
