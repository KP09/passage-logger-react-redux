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
      hiddenErrors: true,
      buttonDisabled: true
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setErrorMessage = this.setErrorMessage.bind(this);
    this.clearErrorMessage = this.clearErrorMessage.bind(this);
  }

  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.value === '') {
      this.setState({ hiddenErrors: true });
    }
    this.setButtonState();
  }

  setButtonState() {
    if (this.isEmpty(this.state.errors) && this.state.hiddenErrors === false) {
      this.setState({buttonDisabled: false});
    } else {
      this.setState({buttonDisabled: true});
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: {} })
    this.props.userSignupRequest(this.state).then( value => {
      console.log(value); // Success!
    }, error => {
      this.setState({ errors: error.response.data.errors })
    } );
  }

  setErrorMessage(e) {
    let fieldName = e.target.name.replace('_', ' ');
    fieldName = fieldName[0].toUpperCase() + fieldName.substring(1);

    if ( e.target.value === '' ) {
      this.setState({
        errors: {
          ...this.state.errors,
          [e.target.name]: `${fieldName} is required`
        },
        buttonDisabled: true
      });
    } else {
      this.setState({
        errors: _.omit(this.state.errors, e.target.name),
        buttonDisabled: false
      })
    }

    // this.setButtonState();
  }

  clearErrorMessage(e) {
    this.setState({ errors: _.omit(this.state.errors, e.target.name) })
    this.setButtonState();
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
            onChange={this.onChange}
            errorText={this.state.errors.first_name}
            onFocus={this.clearErrorMessage}
            onBlur={this.setErrorMessage}
          />
          <br/>
          <TextField
            name="last_name"
            hintText="Johnson"
            floatingLabelText="Last name"
            value={this.state.last_name}
            onChange={this.onChange}
            errorText={this.state.errors.last_name}
            onFocus={this.clearErrorMessage}
            onBlur={this.setErrorMessage}
          />
          <br/>
          <TextField
            name="email"
            hintText="john@johnson.com"
            floatingLabelText="Your email"
            value={this.state.email}
            onChange={this.onChange}
            errorText={this.state.errors.email}
            onFocus={this.clearErrorMessage}
            onBlur={this.setErrorMessage}
          />
          <br/>
          <TextField
            name="password"
            hintText="Minimum 6 characters"
            floatingLabelText="Choose a password"
            type="password"
            value={this.state.password}
            onChange={this.onChange}
            errorText={this.state.errors.password}
            onFocus={this.clearErrorMessage}
            onBlur={this.setErrorMessage}
          />
          <br/>
          <TextField
            name="password_confirmation"
            hintText="Must match the password above"
            floatingLabelText="Confirm your password"
            type="password"
            value={this.state.password_confirmation}
            onChange={this.onChange}
            errorText={this.state.errors.password_confirmation}
            onFocus={this.clearErrorMessage}
            onBlur={this.setErrorMessage}
          />
          <br/>
          <RaisedButton
            label="Sign me up!"
            primary={true}
            style={buttonStyle}
            onClick={this.onSubmit}
            disabled={this.state.buttonDisabled}
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
