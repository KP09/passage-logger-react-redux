import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
// import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Divider from 'material-ui/Divider';

import { userLogoutRequest } from '../../actions/loginActions';
import { history } from '../../history'

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

const Logged = ({
  userLogoutRequest,
  first_name,
  last_name,
  ...rest
}) => (
  <IconMenu
    {...rest}
    iconButtonElement={<IconButton><MenuIcon /></IconButton>}
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem
      primaryText="Dashboard"
      disabled={true}
    />
    <MenuItem
      primaryText="All passages"
      onClick={() => history.push('/passages')}
    />
    <MenuItem
      primaryText="Target tracker"
      disabled={true}
    />
    <Divider />
    <MenuItem
      primaryText="Account settings"
      disabled={true}
    />
    <Divider />
    <MenuItem
      primaryText="Sign out"
      onClick={userLogoutRequest}
    />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class NavBar extends Component {
  openDrawer() {

  }

  render() {
    return (
      <div>
        <AppBar
          title="Passage Logger"
          showMenuIconButton={false}
          onLeftIconButtonTouchTap={this.openDrawer}
          iconElementRight={this.props.isAuthenticated ? <Logged userLogoutRequest={this.props.userLogoutRequest}/> : <Login />}
        />
      </div>
    );
  }
}

const styles = {

}

NavBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  userLogoutRequest: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    first_name: state.userLogin.first_name,
    last_name: state.userLogin.last_name,
    isAuthenticated: state.userLogin.auth_token ? true : false
  }
}

export default connect(
  mapStateToProps,
  { userLogoutRequest }
)(NavBar);
