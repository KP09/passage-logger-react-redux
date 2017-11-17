// External
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Internal
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { setLoginField } from '../../actions/loginActions';

// Actions


class LoginContainer extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <LoginForm
          setLoginField={this.props.setLoginField}
        />
      </div>
    );
  }
}

LoginContainer.propTypes = {
  setLoginField: PropTypes.func.isRequired
}

const divStyle = {
  textAlign: "center",
}

function mapStateToProps(state) {
  return {
    email: state.userLogin.email,
    password: state.userLogin.password
  }
}

export default connect(
  // mapStateToProps, provides some data from Redux store in props object
  mapStateToProps,
  // mapDispatchToProps, specify action creators
  { setLoginField }
)(LoginContainer);
