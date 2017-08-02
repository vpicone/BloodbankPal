import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./AppContainer";
import {unregister} from "./registerServiceWorker";
//import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<AppContainer />, document.getElementById("root"));
unregister();
//registerServiceWorker();
