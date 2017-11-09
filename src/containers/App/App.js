// External
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

// Internal
import NavBar from '../../components/NavBar/NavBar';
import { Home } from '../Home/Home';
import Signup from '../Signup/Signup'

export class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar title="My AppBar" />
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={Signup} />
          </Switch>
        </Router>
      </div>
    );
  }
}
