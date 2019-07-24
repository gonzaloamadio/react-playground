import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import StateClassBased from './components/state/class-based'
// import StateHook from './components/state/use-state-hoook'
import Pmbc from './components/events-functions/pass-methods-btw-components'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <StateClassBased /> */}
        {/* <StateHook /> */}
        <Pmbc />
      </div>
    );
  }
}

export default App;
