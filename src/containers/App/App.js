// External
import React from 'react';
import { Route, Switch } from 'react-router-dom'

// Internal
import { Home } from '../Home/Home';
import Signup from '../Signup/Signup'

export class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
      </div>
    );
  }
}
