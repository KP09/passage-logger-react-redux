// External
import React from 'react';

// Material UI
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
  constructor(props) {
    super(props);
    this.onTextFieldChange = this.onTextFieldChange.bind(this);
    this.onNumFieldChange = this.onNumFieldChange.bind(this);
    this.onDatePickerChange = this.onDatePickerChange.bind(this);
    this.onTimePickerChange = this.onTimePickerChange.bind(this);
    this.onCheckBoxChange = this.onCheckBoxChange.bind(this);
  }

  handleNext = () => {
    if (this.props.stepIndex < 3) {
      this.props.incrementPassageStep();
    }
  };

  handlePrev = () => {
    if (this.props.stepIndex > 0) {
      this.props.decrementPassageStep();
    }
  };

  onTextFieldChange(e) {
    this.props.setPassageField(e.target.name, e.target.value);
  }

  onNumFieldChange(e) {
    const numbers = e.target.value.match(/^\d*$/);
    if (numbers && numbers !== this.props[e.target.name]) {
      this.props.setPassageField(e.target.name, numbers[0]);
    }
  }

  onDatePickerChange(date, fieldName) {
    this.props.setPassageField(fieldName, date);
  }

  onTimePickerChange(date, fieldName) {
    // Sanitize time
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const constructedTime = new Date(null, null, null, hours, minutes, null, null);
    console.log(constructedTime);
    this.props.setPassageField(fieldName, date);
  }

  onCheckBoxChange(e, newBool) {
    this.props.setPassageField(e.target.name, newBool);
  }

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
        {step < 3 && (
          <RaisedButton
            label="Next"
            disableTouchRipple={true}
            disableFocusRipple={true}
            primary={true}
            onClick={this.handleNext}
            style={{marginRight: 12}}
          />
        )}
        {step === 3 && (
          <RaisedButton
            label="Log it!"
            disableTouchRipple={true}
            disableFocusRipple={true}
            primary={true}
            // onClick={this.handleNext}
            style={{marginRight: 12}}
          />
        )}
      </div>
    );
  }

  render() {
    return (
      <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
          <Stepper
            activeStep={this.props.stepIndex}
            linear={false}
            orientation="vertical"
            style={styles.stepper}
          >
            <Step>
              <StepButton onClick={() => this.props.setPassageStep(0)}>
                Departure
              </StepButton>
              <StepContent transitionDuration={styles.transitionDuration}>
                <TextField
                  name="departure_port"
                  floatingLabelText="Port of departure"
                  style={styles.textField}
                  onChange={this.onTextFieldChange}
                  value={this.props.departure_port}
                />
                <DatePicker
                  name="departure_date"
                  floatingLabelText="Date of departure"
                  onChange={(undefined, date) => this.onDatePickerChange(date, "departure_date")}
                  value={this.props.departure_date}
                />
                <TimePicker
                  name="departure_time"
                  floatingLabelText="Time of departure"
                  onChange={(undefined, date) => this.onTimePickerChange(date, "departure_time")}
                  value={this.props.departure_time}
                />
                {this.renderStepActions(0)}
              </StepContent>
            </Step>
            <Step>
              <StepButton onClick={() => this.props.setPassageStep(1)}>
                Arrival
              </StepButton>
              <StepContent transitionDuration={styles.transitionDuration}>
                <TextField
                  name="arrival_port"
                  floatingLabelText="Port of arrival"
                  style={styles.textField}
                  onChange={this.onTextFieldChange}
                  value={this.props.arrival_port}
                />
                <DatePicker
                  name="arrival_date"
                  floatingLabelText="Date of arrival"
                  onChange={(undefined, date) => this.onDatePickerChange(date, "arrival_date")}
                  value={this.props.arrival_date}
                />
                <TimePicker
                  name="arrival_time"
                  floatingLabelText="Time of arrival"
                  onChange={(undefined, date) => this.onTimePickerChange(date, "departure_time")}
                  value={this.props.arrival_time}
                />
                {this.renderStepActions(1)}
              </StepContent>
            </Step>
            <Step>
              <StepButton onClick={() => this.props.setPassageStep(2)}>
                Passage details
              </StepButton>
              <StepContent transitionDuration={styles.transitionDuration}>
                <TextField
                  name="miles"
                  floatingLabelText="Mileage"
                  style={styles.textField}
                  onChange={this.onNumFieldChange}
                  value={this.props.miles}
                />
                <TextField
                  name="hours"
                  floatingLabelText="Hours"
                  style={styles.textField}
                  onChange={this.onNumFieldChange}
                  value={this.props.hours}
                />
                <TextField
                  name="night_hours"
                  floatingLabelText="Night hours"
                  style={styles.textField}
                  onChange={this.onNumFieldChange}
                  value={this.props.night_hours}
                />
                <Checkbox
                  name="tidal"
                  label="Tidal waters"
                  style={styles.checkBox}
                  onCheck={(e, isInputChecked) => this.onCheckBoxChange(e, isInputChecked)}
                  checked={this.props.tidal}
                />
                <Checkbox
                  name="overnight"
                  label="Overnight passage"
                  style={styles.checkBox}
                  onCheck={(e, isInputChecked) => this.onCheckBoxChange(e, isInputChecked)}
                  checked={this.props.overnight}
                />
                <Checkbox
                  name="ocean_passage"
                  label="Ocean passage"
                  style={styles.checkBox}
                  onCheck={(e, isInputChecked) => this.onCheckBoxChange(e, isInputChecked)}
                  checked={this.props.ocean_passage}
                />
                {this.renderStepActions(2)}
              </StepContent>
            </Step>
            <Step>
              <StepButton onClick={() => this.props.setPassageStep(3)}>
                Additional information
              </StepButton>
              <StepContent transitionDuration={styles.transitionDuration}>
                <TextField
                  name="role"
                  floatingLabelText="Role on board"
                  hintText="Crew, First mate, Skipper"
                  style={styles.textField}
                  onChange={this.onTextFieldChange}
                  value={this.props.role}
                />
                <TextField
                  name="description"
                  floatingLabelText="Description"
                  hintText="Wind, weather, sea state, etc"
                  multiLine={true}
                  rows={1}
                  rowsMax={4}
                  style={styles.textField}
                  onChange={this.onTextFieldChange}
                  value={this.props.description}
                />
                {this.renderStepActions(3)}
              </StepContent>
            </Step>
          </Stepper>
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
