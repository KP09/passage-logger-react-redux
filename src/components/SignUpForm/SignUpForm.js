import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: ''
    };
  }

  render() {
    return (
      <div>
        <Paper style={paperStyle} zDepth={2}>
          <h1>Get started!</h1>
          <TextField
            hintText="john@johnson.com"
            floatingLabelText="Your email"
            value={this.state.email}
            // onChange={this.onChange.bind(this)}
          />
          <br/>
          <TextField
            hintText="Minimum 6 characters"
            floatingLabelText="Choose a password"
            type="password"
          />
          <br/>
          <TextField
            hintText="Must match the password above"
            floatingLabelText="Confirm your password"
            type="password"
          />
          <br/>
          <RaisedButton label="Sign me up!" primary={true} style={buttonStyle} />
        </Paper>
      </div>
    );
  }
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
