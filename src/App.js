import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Dashboard from './containers/Dashboard';


class App extends React.Component {  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
