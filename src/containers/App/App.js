// External
import React from 'react';
import { Route, Switch } from 'react-router-dom'

// Internal
import { Home } from '../Home/Home';
import Signup from '../Signup/Signup';
import LoginContainer from '../LoginContainer/LoginContainer';
import FlashMessagesContainer from '../FlashMessagesContainer/FlashMessagesContainer';
import EmailConfirmationContainer from '../EmailConfirmationContainer/EmailConfirmationContainer';
import LoadingContainer from '../LoadingContainer/LoadingContainer';



export class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/confirm/:token" component={EmailConfirmationContainer} />
          <Route exact path="/login" component={LoginContainer} />
        </Switch>
        <LoadingContainer />
        <FlashMessagesContainer />
      </div>
    );
  }
}
