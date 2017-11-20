// External
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Internal
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { setLoginField } from '../../actions/loginActions';
import { userLoginRequest } from '../../actions/loginActions';
import { addFlashMessage } from '../../actions/flashMessageActions';

// Actions


class LoginContainer extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <LoginForm
          setLoginField={this.props.setLoginField}
          userLoginRequest={this.props.userLoginRequest}
          addFlashMessage={this.props.addFlashMessage}
          email={this.props.email}
          password={this.props.password}
          rememberMe={this.props.rememberMe}
          auth_token={this.props.auth_token}
          error={this.props.error}
        />
      </div>
    );
  }
}

// Prop Types
LoginContainer.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  rememberMe: PropTypes.bool.isRequired,
  auth_token: PropTypes.string,
  error: PropTypes.string,
  setLoginField: PropTypes.func.isRequired,
  userLoginRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

// Styling
const divStyle = {
  textAlign: "center",
}

// Redux
function mapStateToProps(state) {
  return {
    email: state.userLogin.email,
    password: state.userLogin.password,
    rememberMe: state.userLogin.rememberMe,
    error: state.userLogin.error,
    auth_token: state.userLogin.auth_token
  }
}

export default connect(
  // mapStateToProps, provides some data from Redux store in props object
  mapStateToProps,
  // mapDispatchToProps, specify action creators
  {
    setLoginField,
    userLoginRequest,
    addFlashMessage
  }
)(LoginContainer);
