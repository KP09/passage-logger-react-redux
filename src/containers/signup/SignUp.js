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
          auth_token={this.props.auth_token}
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
  checkEmailUsed: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    auth_token: state.userLogin.auth_token
  }
}

const divStyle = {
  textAlign: "center",
}

export default connect(
  // mapStateToProps, provides some data from Redux store in props object
  mapStateToProps,
  // mapDispatchToProps, specify action creators
  { userSignupRequest, addFlashMessage, checkEmailUsed }
)(Signup);
