import React from 'react';
import { SignUpForm } from '../../components/SignUpForm/SignUpForm';

export class SignUp extends React.Component {
  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <SignUpForm />
      </div>
    );
  }
}
