// External
import React from 'react';
import { connect } from 'react-redux';

// Material UI
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {orange400} from 'material-ui/styles/colors';

// Internal
import { history } from '../../history';

class PassagesContainer extends React.Component {
  render() {
    return (
      <div>
        <p>[list of all passages]</p>
        <FloatingActionButton
          style={styles.floatingActionButton}
          backgroundColor={orange400}
          onClick={() => history.push('/passages/new')}
        >
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

const styles = {
  floatingActionButton: {
    position: "fixed",
    bottom: 20,
    right: 20
  }
}

export default connect(
  // mapStateToProps, provides some data from Redux store in props object
  null,
  // mapDispatchToProps, specify action creators
  null
)(PassagesContainer);
