// External
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Internal
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { setLoginField } from '../../actions/loginActions';
import { userLoginRequest } from '../../actions/loginActions';

// Actions


class LoginContainer extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <LoginForm
          setLoginField={this.props.setLoginField}
          userLoginRequest={this.props.userLoginRequest}
          email={this.props.email}
          password={this.props.password}
          auth_token={this.props.auth_token}
          error={this.props.error}
        />
      </div>
    );
  }
}

LoginContainer.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  auth_token: PropTypes.string,
  error: PropTypes.string,
  setLoginField: PropTypes.func.isRequired,
  userLoginRequest: PropTypes.func.isRequired
}

const divStyle = {
  textAlign: "center",
}

function mapStateToProps(state) {
  return {
    email: state.userLogin.email,
    password: state.userLogin.password,
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
    userLoginRequest
  }
)(LoginContainer);
