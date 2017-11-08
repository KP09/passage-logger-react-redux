import React from 'react';
import { SignUpForm } from '../../components/SignUpForm/SignUpForm';

export class SignUp extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <SignUpForm />
      </div>
    );
  }
}

const divStyle = {
  textAlign: "center",
}
