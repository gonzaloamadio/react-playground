import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StateClassBased from './components/state/class-based'
import StateHook from './components/state/use-state-hoook'

class App extends Component {
  render() {
    return (
      <div className="App">
        <StateClassBased />
        <StateHook />
      </div>
    );
  }
}

export default App;
