// External
import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// Material UI
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';

// Internal
import paperStyle from '../../styles/paperStyle';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onToggle = this.onToggle.bind(this);
  }

  onChange(e) {
    this.props.setLoginField(e.target.name, e.target.value);
  }

  onClick() {
    this.props.userLoginRequest(this.props.email, this.props.password);
  }

  onToggle(event, isInputChecked) {
    this.props.setLoginField('rememberMe', isInputChecked);
  }

  render() {
    if (this.props.auth_token) {
      // this.props.addFlashMessage({
      //   text: "You are already logged in",
      //   style: "error"
      // });
      return <Redirect to='/passages' />
    } else {
      return (
        <div>
          <Paper style={paperStyle} zDepth={1}>
            <h1>Log in!</h1>
            <TextField
              name="email"
              hintText="john@johnson.com"
              floatingLabelText="Email"
              value={this.props.email}
              errorText={this.props.error}
              onChange={this.onChange}
              // onFocus={}
              // onBlur={}
              errorStyle={errorStyle}
              style={textFieldStyle}
            />
            <br/>
            <TextField
              name="password"
              hintText="Your password"
              floatingLabelText="Password"
              type="password"
              value={this.props.password}
              // errorText={}
              onChange={this.onChange}
              // onFocus={}
              // onBlur={}
              // errorStyle={}
              style={textFieldStyle}
            />
            <br/>
            <Toggle
              label="Remember me"
              labelPosition="right"
              labelStyle={{textAlign: "left"}}
              style={toggleStyle}
              toggled={this.props.rememberMe}
              onToggle={this.onToggle}
            />
            <br/>
            <RaisedButton
              label="Log me in!"
              primary={true}
              style={buttonStyle}
              fullWidth={true}
              onClick={this.onClick}
              type="button"
              // disabled={}
            />
            <Link to="/signup">
              <p>Don't have an account yet?</p>
            </Link>
          </Paper>
        </div>
      );
    }
  }
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  rememberMe: PropTypes.bool.isRequired,
  auth_token: PropTypes.string,
  error: PropTypes.string,
  setLoginField: PropTypes.func.isRequired,
  userLoginRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

const buttonStyle = {
  marginTop: 10
}

const errorStyle = {
  textAlign: "left",
  borderWidth: 2
}

const toggleStyle = {
  margin: "20px 0 0 0"
};

const textFieldStyle = {
  width: "100%"
}
