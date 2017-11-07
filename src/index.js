// External
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

// Internal
import registerServiceWorker from './registerServiceWorker';
import Home from './containers/home/Home';
import SignUp from './containers/signup/SignUp'

// Internal styles
import './styles/index.css';

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/NavBar';
import muiTheme from './styles/muiTheme';

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <NavBar title="My AppBar" />
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root'));

registerServiceWorker();
