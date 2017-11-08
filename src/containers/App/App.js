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
import { SignUp } from '../SignUp/SignUp'

export class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar title="My AppBar" />
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={SignUp} />
          </Switch>
        </Router>
      </div>
    );
  }
}
