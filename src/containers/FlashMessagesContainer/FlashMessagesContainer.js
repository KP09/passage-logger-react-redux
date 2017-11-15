import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FlashMessage } from '../../components/FlashMessage/FlashMessage';

class FlashMessagesContainer extends React.Component {
  render() {
    const messages = this.props.messages
    return (
      <FlashMessage message={messages[messages.length - 1]} />
    );
  }
}

FlashMessagesContainer.propTypes = {
  messages: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    messages: state.flashMessages
  }
}

export default connect(mapStateToProps)(FlashMessagesContainer);
