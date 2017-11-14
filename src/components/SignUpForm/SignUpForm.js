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
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onInput = this.onInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setErrorMessage = this.setErrorMessage.bind(this);
    this.clearErrorMessage = this.clearErrorMessage.bind(this);
    this.setHiddenErrorMessage = this.setHiddenErrorMessage.bind(this);
    this.clearHiddenErrorMessage = this.clearHiddenErrorMessage.bind(this);
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
    this.setHiddenErrorMessage(e);
  }

  onFocus(e) {
    this.clearErrorMessage(e);
  }

  onBlur(e) {
    this.setErrorMessage(e);
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

    // Check for empty field
    if (e.target.value === '') {
      this.setState({ errors: { ...this.state.errors, [e.target.name]: `${fieldName} is required` } });
    // Extra checks for email field
    } else if (e.target.name === 'email') {
      if (!(e.target.value.match(/.*@.*\..*/))) {
        this.setState({ errors: { ...this.state.errors, [e.target.name]: 'Email is invalid' } });
      } else {
        this.clearErrorMessage(e);
      }
    // Extra checks for password fields
    } else if (e.target.name === 'password') {
      if (e.target.value.length < 6) {
        this.setState({ errors: { ...this.state.errors, [e.target.name]: 'Password is too short' } });
      } else {
        this.clearErrorMessage(e);
      }
    } else if (e.target.name === 'password_confirmation') {
      if (e.target.value !== this.state.password ) {
        this.setState({ errors: { ...this.state.errors, [e.target.name]: "Passwords don't match" } });
      } else {
        this.clearErrorMessage(e);
      }
    } else {
      this.clearErrorMessage(e);
    }
  }

  setHiddenErrorMessage(e) {
    if (e.target.value === '') {
      this.setState({ hiddenErrors: { ...this.state.hiddenErrors, [e.target.name]: 'Required' } });
    } else if (e.target.name === 'email') {
      if (!(e.target.value.match(/.*@.*\..*/))) {
        this.setState({ hiddenErrors: { ...this.state.hiddenErrors, [e.target.name]: 'Invalid' } });
      } else {
        this.clearHiddenErrorMessage(e);
      }
    } else if (e.target.name === 'password') {
      if (e.target.value.length < 6) {
        this.setState({ hiddenErrors: { ...this.state.hiddenErrors, [e.target.name]: 'Too short' } });
      } else {
        this.clearHiddenErrorMessage(e);
      }
    } else if (e.target.name === 'password_confirmation') {
      if (e.target.value !== this.state.password ) {
        this.setState({ hiddenErrors: { ...this.state.hiddenErrors, [e.target.name]: "Doesn't match" } });
      } else {
        this.clearHiddenErrorMessage(e);
      }
    } else {
      this.clearHiddenErrorMessage(e);
    }
  }

  clearErrorMessage(e) {
    this.setState({ errors: _.omit(this.state.errors, e.target.name) });
  }

  clearHiddenErrorMessage(e) {
    this.setState({ hiddenErrors: _.omit(this.state.hiddenErrors, e.target.name) });
  }

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
