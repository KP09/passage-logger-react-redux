import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class EmailConfirmation extends React.Component {
  componentWillMount() {
    this.props.confirmEmail(this.props.token);
  }

  render() {
    if (this.props.error) {
      return (
        <div>
          <h1>Something went wrong</h1>
          <p>Either the confirmation link has already been used, or it has expired</p>
          <p>Click here to request a new confirmation link</p>
        </div>
      );
    } else {
      return <Redirect to='/login' />
    }
  }
}

EmailConfirmation.propTypes = {
  confirmEmail: PropTypes.func.isRequired,
  error: PropTypes.bool
}
