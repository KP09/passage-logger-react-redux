import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const paperStyle = {
  height: "50vh",
  width: "80vw",
  margin: "auto",
  textAlign: 'center',
  display: 'inline-block',
};

export class SignUpForm extends React.Component {
  render() {
    return (
      <div>
        <Paper style={paperStyle} zDepth={2}>
          <TextField
            hintText="Hint Text"
            floatingLabelText="Floating Label Text"
          />
        </Paper>
      </div>
    );
  }
}
