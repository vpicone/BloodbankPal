import React from "react";
// import * as firebase from "firebase";
import injectTapEventPlugin from "react-tap-event-plugin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import App from "./App";
import AntibodyHelper from "./AntibodyHelper"

if (!process.tapEventInjected) {
  injectTapEventPlugin()
  process.tapEventInjected = true
}

// var config = {
//   apiKey: "AIzaSyD3omJ4ESTvOQEnIQdF-52jKEkuVy1JjXI",
//   authDomain: "medspeedy-b060d.firebaseapp.com",
//   databaseURL: "https://medspeedy-b060d.firebaseio.com",
//   projectId: "medspeedy-b060d",
//   storageBucket: "medspeedy-b060d.appspot.com",
// };
// firebase.initializeApp(config);
// var database = firebase.database();

const style = {
  textAlign: "center",
  fontFamily: "Roboto, sans-serif"
}

const AppContainer = () => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <Router onUpdate={this.logPageView}>
        <div style={style}>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/antibodyhelper" component={AntibodyHelper} />
            <Route path="/:id" component={App} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
};

export default AppContainer;
