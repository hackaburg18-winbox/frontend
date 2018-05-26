import React, { Component } from 'react';
import logo from './winbox logo.png';
import './App.css';
import Inbox from './components/inbox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">WINBOX</h1>
        </header>
          <Inbox />
      </div>
    );
  }
}

export default App;
