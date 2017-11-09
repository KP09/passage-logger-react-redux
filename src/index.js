// External
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

// Internal
import registerServiceWorker from './registerServiceWorker';
import { App } from './containers/App/App';

// Internal styles
import './styles/index.css';

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles/muiTheme';

// Redux store
const store = createStore(
  (state = {}) => state, // reducer
  applyMiddleware(thunk) // middleware
);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
