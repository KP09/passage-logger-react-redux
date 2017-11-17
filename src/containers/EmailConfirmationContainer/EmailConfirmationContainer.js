import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { confirmEmail } from '../../actions/emailConfirmationActions';
import { addFlashMessage } from '../../actions/flashMessageActions';

import EmailConfirmation from '../../components/EmailConfirmation/EmailConfirmation'

class EmailConfirmationContainer extends React.Component {
  render() {
    return (
      <EmailConfirmation
        confirmEmail={this.props.confirmEmail}
        addFlashMessage={this.props.addFlashMessage}
        token={this.props.match.params.token}
        error={this.props.error}
        loading={this.props.loading}
      />
    );
  }
}

EmailConfirmationContainer.propTypes = {
  confirmEmail: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    error: state.emailConfirmation.error,
    loading: state.loading
  }
}

export default connect(
  // mapStateToProps, provides some data from Redux store in props object
  mapStateToProps,
  // mapDispatchToProps, specify action creators
  { confirmEmail, addFlashMessage }
)(EmailConfirmationContainer);
