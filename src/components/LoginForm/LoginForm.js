// External
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Internal
import { history } from '../../history';

// Material UI
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.props.setLoginField(e.target.name, e.target.value);
  }

  onClick() {
    this.props.userLoginRequest(this.props.email, this.props.password);
  }

  componentWillMount() {
    if (this.props.auth_token) {
      history.replace('/');
    }
  }

  componentWillUpdate() {
    if (this.props.auth_token) {
      history.replace('/');
    }
  }

  componentDidUpdate() {
    if (this.props.auth_token) {
      history.replace('/');
    }
  }
  render() {
    return (
      <div>
        <Paper style={paperStyle} zDepth={2}>
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
          />
          <br/>
          <RaisedButton
            label="Log me in!"
            primary={true}
            style={buttonStyle}
            fullWidth={true}
            onClick={this.onClick}
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

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  auth_token: PropTypes.string,
  error: PropTypes.string,
  setLoginField: PropTypes.func.isRequired,
  userLoginRequest: PropTypes.func.isRequired
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
  textAlign: "left",
  borderWidth: 2
}
