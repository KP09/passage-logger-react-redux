// External
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { history } from '../history';

// Internal
import { addFlashMessage } from '../actions/flashMessageActions';

export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.addFlashMessage({
          style: 'error',
          text: 'Please log in first!'
        });
        history.replace('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        history.replace('/login');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    addFlashMessage: PropTypes.func.isRequired
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.userLogin.auth_token ? true : false
    }
  }

  return connect(
    mapStateToProps,
    { addFlashMessage }
  )(Authenticate);
}
