// External
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Internal
import { SignupForm } from '../../components/SignupForm/SignupForm';

// Actions
import { userSignupRequest } from '../../actions/signupActions';

class Signup extends React.Component {
  render() {
    const { userSignupRequest } = this.props;
    return (
      <div style={divStyle}>
        <SignupForm userSignupRequest={userSignupRequest} />
      </div>
    );
  }
}

Signup.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

const divStyle = {
  textAlign: "center",
}

export default connect(
  null, // mapStateToProps, provides some data from Redux store in props object
  { userSignupRequest } // mapDispatchToProps, specify action creators
)(Signup);
