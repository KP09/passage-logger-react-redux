// External
import React from 'react';
import { Route, Switch } from 'react-router-dom'
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// Internal
import { Home } from '../Home/Home';
import Signup from '../Signup/Signup';
import requireAuth from '../../utils/requireAuth';
import LoginContainer from '../LoginContainer/LoginContainer';
import FlashMessagesContainer from '../FlashMessagesContainer/FlashMessagesContainer';
import EmailConfirmationContainer from '../EmailConfirmationContainer/EmailConfirmationContainer';
import LoadingContainer from '../LoadingContainer/LoadingContainer';
import NewPassageContainer from '../NewPassageContainer/NewPassageContainer';
import PassagesContainer from '../PassagesContainer/PassagesContainer';
import NavBar from '../../components/NavBar/NavBar';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/confirm/:token" component={EmailConfirmationContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/passages/new" component={requireAuth(NewPassageContainer)} />
          <Route exact path="/passages" component={requireAuth(PassagesContainer)} />
        </Switch>
        <LoadingContainer />
        <FlashMessagesContainer />
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     isAuthenticated: state.userLogin.auth_token ? true : false
//   }
// }
//
// export default connect(
//   mapStateToProps,
//   null
// )(App);
