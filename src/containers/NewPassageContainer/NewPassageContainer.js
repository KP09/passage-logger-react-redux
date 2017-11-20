// External
import React from 'react';
import { connect } from 'react-redux';

// Internal
import { NewPassageForm } from '../../components/NewPassageForm/NewPassageForm';

class NewPassageContainer extends React.Component {
  render() {
    return (
      <div style={styles.divStyle}>
        <NewPassageForm />
      </div>
    );
  }
}

const styles = {
  divStyle: {
    textAlign: "center"
  }
};

export default connect(
  // mapStateToProps, provides some data from Redux store in props object
  null,
  // mapDispatchToProps, specify action creators
  null
)(NewPassageContainer);
