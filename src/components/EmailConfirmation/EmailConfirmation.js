import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoadingContainer from '../../containers/LoadingContainer/LoadingContainer';

export default class EmailConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.preRender = this.preRender.bind(this);
  }

  componentWillMount() {
    this.props.confirmEmail(this.props.token);
  }

  preRender() {
    if (this.props.loading) {
      return <LoadingContainer />;
    } else if (this.props.error) {
      return (
        <div>
          <h1>Something went wrong</h1>
          <p>Either the confirmation link has already been used, or it has expired</p>
          <p>Click here to request a new confirmation link</p>
        </div>
      );
    } else {
      this.props.addFlashMessage({
        style: 'success',
        text: "Thanks! You can now log in!"
      });
      return <Redirect to='/login' />
      // return <h1>Success</h1>
    }
  }

  render() {
    return this.preRender();
  }
}

EmailConfirmation.propTypes = {
  confirmEmail: PropTypes.func.isRequired,
  error: PropTypes.bool
}
