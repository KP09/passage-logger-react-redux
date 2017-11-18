import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import NavigationClose from 'material-ui/svg-icons/navigation/close';

import { userLogoutRequest } from '../../actions/loginActions';

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <div>
        <Link to='/login'>
          <FlatButton {...this.props} label="Login" />
        </Link>
        <Link to='/signup'>
          <FlatButton {...this.props} label="Sign up" />
        </Link>
      </div>
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem
      primaryText="Sign out"
      onClick={props.userLogoutRequest}
    />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class NavBar extends Component {

  render() {
    return (
      <div>
        <AppBar
          title="Passage Logger"
          // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={this.props.userIsLoggedIn ? <Logged userLogoutRequest={this.props.userLogoutRequest}/> : <Login />}
        />
      </div>
    );
  }
}

NavBar.propTypes = {
  userIsLoggedIn: PropTypes.bool.isRequired,
  userLogoutRequest: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    userIsLoggedIn: state.userLogin.auth_token ? true : false
  }
}

export default connect(
  mapStateToProps,
  { userLogoutRequest }
)(NavBar);
