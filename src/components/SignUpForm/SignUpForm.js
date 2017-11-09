// External
import React from 'react';
import PropTypes from 'prop-types';

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
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
          />
          <br/>
          <TextField
            name="last_name"
            hintText="Johnson"
            floatingLabelText="Last name"
            value={this.state.last_name}
            onChange={this.onChange}
            errorText={this.state.errors.last_name}
          />
          <br/>
          <TextField
            name="email"
            hintText="john@johnson.com"
            floatingLabelText="Your email"
            value={this.state.email}
            onChange={this.onChange}
            errorText={this.state.errors.email}
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
          />
          <br/>
          <RaisedButton
            label="Sign me up!"
            primary={true}
            style={buttonStyle}
            onClick={this.onSubmit}
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
