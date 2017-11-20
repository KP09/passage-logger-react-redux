import React from 'react';
import PropTypes from 'prop-types';

import Snackbar from 'material-ui/Snackbar';
import {green400} from 'material-ui/styles/colors';
import {red400} from 'material-ui/styles/colors';

export class FlashMessage extends React.Component {
  setBackgroundStyle(style) {
    switch (style) {
      case 'success':
        return { backgroundColor: green400 }
      case 'error':
        return { backgroundColor: red400 }
      default: return null
    }
  }

  render() {
    const message = this.props.message
    const backgroundStyle = this.setBackgroundStyle(message.style);

    return (
      <Snackbar
        open={message.open}
        message={message.text}
        autoHideDuration={2000}
        bodyStyle={backgroundStyle}
      />
    );
  }
}

FlashMessage.propTypes = {
  message: PropTypes.object.isRequired
}
