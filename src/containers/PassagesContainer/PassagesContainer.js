// External
import React from 'react';
import { connect } from 'react-redux';

// Internal
import NavBar from '../../components/NavBar/NavBar';

class PassagesContainer extends React.Component {
  render() {
    return (
      <div>
        <NavBar title="My AppBar" />
        <h1>AUTHENTICATED</h1>
      </div>
    );
  }
}

export default connect(
  // mapStateToProps, provides some data from Redux store in props object
  null,
  // mapDispatchToProps, specify action creators
  null
)(PassagesContainer);
