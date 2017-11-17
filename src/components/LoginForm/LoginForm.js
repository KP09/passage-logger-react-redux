// External
import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

// Internal
// import { history } from '../../history';

// Material UI
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.setLoginField(e.target.name, e.target.value)
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
            // value={}
            // errorText={}
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
            // value={}
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
            // onClick={}
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

// LoginForm.propTypes = {
//
// }

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
