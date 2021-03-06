// External
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router } from 'react-router-dom'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware';

// Internal
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/rootReducer';
import App from './containers/App/App';
import { history } from './history';
import createCookieMiddleware from './middleware/createCookieMiddleware';

// Internal styles
import './styles/index.css';

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles/muiTheme';

// Redux store
const store = createStore(
  rootReducer, // reducer
  compose(
    applyMiddleware(
      thunk,
      promiseMiddleware(),
      createCookieMiddleware(),
      logger
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={history} >
        <App />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
