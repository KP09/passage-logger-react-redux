// External
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Internal
import { NewPassageForm } from '../../components/NewPassageForm/NewPassageForm';
import {
  incrementPassageStep,
  decrementPassageStep,
  setPassageField,
  setPassageStep
} from '../../actions/passageActions';

class NewPassageContainer extends React.Component {
  render() {
    return (
      <div style={styles.divStyle}>
        <NewPassageForm
          incrementPassageStep={this.props.incrementPassageStep}
          decrementPassageStep={this.props.decrementPassageStep}
          setPassageField={this.props.setPassageField}
          setPassageStep={this.props.setPassageStep}
          stepIndex={this.props.stepIndex}
          departure_port={this.props.departure_port}
          departure_date={this.props.departure_date}
          departure_time={this.props.departure_time}
          arrival_port={this.props.arrival_port}
          arrival_date={this.props.arrival_date}
          arrival_time={this.props.arrival_time}
          miles={this.props.miles}
          hours={this.props.hours}
          night_hours={this.props.night_hours}
          role={this.props.role}
          description={this.props.description}
          tidal={this.props.tidal}
          overnight={this.props.overnight}
          ocean_passage={this.props.ocean_passage}
        />
      </div>
    );
  }
}

NewPassageContainer.propTypes = {
  incrementPassageStep: PropTypes.func.isRequired,
  decrementPassageStep: PropTypes.func.isRequired,
  setPassageField: PropTypes.func.isRequired,
  setPassageStep: PropTypes.func.isRequired,
  stepIndex: PropTypes.number.isRequired,
  departure_port: PropTypes.string.isRequired,
  departure_date: PropTypes.instanceOf(Date),
  departure_time: PropTypes.instanceOf(Date),
  arrival_port: PropTypes.string.isRequired,
  arrival_date: PropTypes.instanceOf(Date),
  arrival_time: PropTypes.instanceOf(Date),
  miles: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  night_hours: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tidal: PropTypes.bool.isRequired,
  overnight: PropTypes.bool.isRequired,
  ocean_passage: PropTypes.bool.isRequired
}

const styles = {
  divStyle: {
    textAlign: "center"
  }
};

function mapStateToProps(state) {
  return {
    stepIndex: state.passage.stepIndex,
    departure_port: state.passage.departure_port,
    departure_date: state.passage.departure_date,
    departure_time: state.passage.departure_time,
    arrival_port: state.passage.arrival_port,
    arrival_date: state.passage.arrival_date,
    arrival_time: state.passage.arrival_time,
    miles: state.passage.miles,
    hours: state.passage.hours,
    night_hours: state.passage.night_hours,
    role: state.passage.role,
    description: state.passage.description,
    tidal: state.passage.tidal,
    overnight: state.passage.overnight,
    ocean_passage: state.passage.ocean_passage
  };
}

export default connect(
  // mapStateToProps, provides some data from Redux store in props object
  mapStateToProps,
  // mapDispatchToProps, specify action creators
  {
    incrementPassageStep,
    decrementPassageStep,
    setPassageField,
    setPassageStep
  }
)(NewPassageContainer);
