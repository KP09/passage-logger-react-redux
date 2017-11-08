// External
import React from 'react';
import ReactDOM from 'react-dom';

// Internal
import registerServiceWorker from './registerServiceWorker';
import { App } from './containers/App/App';

// Internal styles
import './styles/index.css';

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles/muiTheme';

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'));

registerServiceWorker();
