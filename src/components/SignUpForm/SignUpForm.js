// External
import React from 'react';
import PropTypes from 'prop-types';
import { _ } from 'underscore';

// Internal
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: {
        first_name: null,
        last_name: null,
        email: null,
        password: null,
        password_confirmation: null
      },
      hiddenErrors: {},
      buttonDisabled: true
    };
    // Delegators
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    // Private
    this.onInput = this.onInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setErrorMessage = this.setErrorMessage.bind(this);
    this.clearErrorMessage = this.clearErrorMessage.bind(this);
    this.setHiddenErrorMessage = this.setHiddenErrorMessage.bind(this);
    // this.setButtonState = this.setButtonState.bind(this);
  }

  isEmpty(obj) {
    for(var key in obj) {
      if(obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  onChange(e) {
    this.onInput(e);
    this.setErrorMessage(e);
    this.setHiddenErrorMessage(e);
    // this.setButtonState();
  }

  onFocus(e) {
    this.clearErrorMessage(e);
  }

  onBlur(e) {
    this.setErrorMessage(e);
    this.setHiddenErrorMessage(e);
    // this.setButtonState(e);
  }

  onInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: {} });
    this.props.userSignupRequest(this.state).then( value => {
      console.log(value); // Success!
    }, error => {
      this.setState({ errors: error.response.data.errors });
    } );
  }

  setErrorMessage(e) {
    let fieldName = e.target.name.replace('_', ' ');
    fieldName = fieldName[0].toUpperCase() + fieldName.substring(1);
    if (e.target.value === '') {
      this.setState({ errors: { ...this.state.errors, [e.target.name]: `${fieldName} is required` } });
    } else {
      this.clearErrorMessage(e);
    }
  }

  setHiddenErrorMessage(e) {
    if (e.target.value === '') {
      this.setState({ hiddenErrors: { ...this.state.hiddenErrors, [e.target.name]: 'Required' } });
    } else {
      this.setState({ hiddenErrors: _.omit(this.state.hiddenErrors, e.target.name) });
    }
  }

  clearErrorMessage(e) {
    this.setState({ errors: _.omit(this.state.errors, e.target.name) });
  }

  // setButtonState() {
  //
  // }

  componentWillUpdate(nextProps, nextState) {
    if (this.isEmpty(nextState.errors) && this.isEmpty(nextState.hiddenErrors)) {
      nextState.buttonDisabled = false;
    } else {
      nextState.buttonDisabled = true;
    }
  }

  render() {
    return (
      <div>
        <Paper style={paperStyle} zDepth={2}>
          <h1>Get started!</h1>
          <TextField
            name="first_name"
            hintText="John"
            floatingLabelText="First name"
            value={this.state.first_name}
            errorText={this.state.errors.first_name}
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            errorStyle={errorStyle}
          />
          <br/>
          <TextField
            name="last_name"
            hintText="Johnson"
            floatingLabelText="Last name"
            value={this.state.last_name}
            errorText={this.state.errors.last_name}
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            errorStyle={errorStyle}
          />
          <br/>
          <TextField
            name="email"
            hintText="john@johnson.com"
            floatingLabelText="Your email"
            value={this.state.email}
            errorText={this.state.errors.email}
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            errorStyle={errorStyle}
          />
          <br/>
          <TextField
            name="password"
            hintText="Minimum 6 characters"
            floatingLabelText="Choose a password"
            type="password"
            value={this.state.password}
            errorText={this.state.errors.password}
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            errorStyle={errorStyle}
          />
          <br/>
          <TextField
            name="password_confirmation"
            hintText="Must match the password above"
            floatingLabelText="Confirm your password"
            type="password"
            value={this.state.password_confirmation}
            errorText={this.state.errors.password_confirmation}
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            errorStyle={errorStyle}
          />
          <br/>
          <RaisedButton
            label="Sign me up!"
            primary={true}
            style={buttonStyle}
            onClick={this.onSubmit}
            disabled={this.state.buttonDisabled}
            errorStyle={errorStyle}
          />
        </Paper>
      </div>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

const paperStyle = {
  height: "content",
  width: "content",
  margin: "20px",
  textAlign: 'center',
  display: 'inline-block',
  padding: "20px 5%"
};

const buttonStyle = {
  marginTop: 20
}

const errorStyle = {
  textAlign: "left"
}
