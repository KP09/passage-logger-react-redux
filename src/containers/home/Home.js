import React from 'react';
import './Home.css';
import NavBar from '../../components/NavBar/NavBar';

export class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar title="My AppBar" />
      </div>
    );
  }
}
