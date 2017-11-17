import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';

class LoadingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.display = this.display.bind(this);
  }

  display() {
    if (this.props.loading) {
      return (
        <div style={divStyle}>
          <CircularProgress />
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      this.display()
    );
  }
}

LoadingContainer.propTypes = {
  loading: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    loading: state.loading
  }
}

const divStyle = {
  position: "fixed",
  backgroundColor: "white",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  zIndex: "2"
}

export default connect(mapStateToProps)(LoadingContainer);
