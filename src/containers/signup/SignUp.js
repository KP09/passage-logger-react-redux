// External
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Internal
import { SignupForm } from '../../components/SignupForm/SignupForm';

// Actions
import { userSignupRequest } from '../../actions/signupActions';
import { checkEmailUsed } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessageActions';

class Signup extends React.Component {
  render() {
    const {
      userSignupRequest,
      addFlashMessage,
      checkEmailUsed
    } = this.props;
    return (
      <div style={divStyle}>
        <SignupForm
          userSignupRequest={userSignupRequest}
          addFlashMessage={addFlashMessage}
          checkEmailUsed={checkEmailUsed}
        />
      </div>
    );
  }
}

Signup.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  checkEmailUsed: PropTypes.func.isRequired
}

const divStyle = {
  textAlign: "center",
}

export default connect(
  // mapStateToProps, provides some data from Redux store in props object
  null,
  // mapDispatchToProps, specify action creators
  { userSignupRequest, addFlashMessage, checkEmailUsed}
)(Signup);
