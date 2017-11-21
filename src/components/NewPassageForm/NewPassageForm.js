// External
import React from 'react';

// Material UI
import Paper from 'material-ui/Paper';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

// Internal

export class NewPassageForm extends React.Component {

  state = {
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 3) {
      this.setState({stepIndex: stepIndex + 1});
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    return (
      <div style={{margin: '12px 0'}}>
        {step > 0 && (
          <FlatButton
            label="Back"
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
        <RaisedButton
          label="Next"
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          style={{marginRight: 12}}
        />
      </div>
    );
  }

  render() {
    const {stepIndex} = this.state;

    return (
      <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
        {/* <Paper style={styles.paperStyle}> */}
          <Stepper
            activeStep={stepIndex}
            linear={false}
            orientation="vertical"
            style={styles.stepper}
          >
            <Step>
              <StepButton onClick={() => this.setState({stepIndex: 0})}>
                Departure
              </StepButton>
              <StepContent transitionDuration={styles.transitionDuration}>
                <TextField
                  floatingLabelText="Port of departure"
                  style={styles.textField}
                />
                <DatePicker
                  floatingLabelText="Date of departure"
                />
                <TimePicker
                  floatingLabelText="Time of departure"
                />
                {this.renderStepActions(0)}
              </StepContent>
            </Step>
            <Step>
              <StepButton onClick={() => this.setState({stepIndex: 1})}>
                Arrival
              </StepButton>
              <StepContent transitionDuration={styles.transitionDuration}>
                <TextField
                  floatingLabelText="Port of arrival"
                  style={styles.textField}
                />
                <DatePicker
                  floatingLabelText="Date of arrival"
                />
                <TimePicker
                  floatingLabelText="Time of arrival"
                />
                {this.renderStepActions(1)}
              </StepContent>
            </Step>
            <Step>
              <StepButton onClick={() => this.setState({stepIndex: 2})}>
                Passage details
              </StepButton>
              <StepContent transitionDuration={styles.transitionDuration}>
                <TextField
                  floatingLabelText="Mileage"
                  style={styles.textField}
                />
                <TextField
                  floatingLabelText="Hours"
                  style={styles.textField}
                />
                <TextField
                  floatingLabelText="Night hours"
                  style={styles.textField}
                />
                <Checkbox
                  label="Tidal waters"
                  style={styles.checkBox}
                />
                <Checkbox
                  label="Overnight passage"
                  style={styles.checkBox}
                />
                <Checkbox
                  label="Ocean passage"
                  style={styles.checkBox}
                />
                {this.renderStepActions(2)}
              </StepContent>
            </Step>
            <Step>
              <StepButton onClick={() => this.setState({stepIndex: 3})}>
                Additional information
              </StepButton>
              <StepContent transitionDuration={styles.transitionDuration}>
                <TextField
                  floatingLabelText="Role on board"
                  hintText="Crew, First mate, Skipper"
                  style={styles.textField}
                />
                <TextField
                  floatingLabelText="Description"
                  hintText="Wind, weather, sea state, etc"
                  multiLine={true}
                  rows={1}
                  rowsMax={4}
                  style={styles.textField}
                />
                {this.renderStepActions(3)}
              </StepContent>
            </Step>
          </Stepper>
        {/* </Paper> */}
      </div>
    );
  }
}

const styles = {
  stepper: {
    margin: "10px"
  },
  textField: {
    textAlign: "left",
    // width: "100%"
  },
  checkBox: {
    textAlign: "left",
    paddingLeft: 16,
    marginTop: 16
  },
  transitionDuration: 150,
};
