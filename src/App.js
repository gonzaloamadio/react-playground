import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { StyleRoot } from 'radium'

// import StateClassBased from './components/state/class-based'
// import StateHook from './components/state/use-state-hoook'
// import Pmbc from './components/events-functions/pass-methods-btw-components'
// import ConditionalRender from './components/presentational/conditional-render'
// import ConditionalRenderUpgraded from './components/presentational/conditional-render-upgraded'
// import UnmutableWayOfUpdateState from './components/state/unmutable-way'
// import Lists from './components/presentational/lists'
// import ListsBinding from './components/presentational/lists-function-binding'
// import DynamicStyling fro./components/styling/02-dynamic-stylingtyling'
import RadiumStyling from './components/styling/03-radium-styling'

class App extends Component {
  render() {
    return (
      <StyleRoot>
      <div className="App">
        {/* <StateClassBased /> */}
        {/* <StateHook /> */}
        {/* <Pmbc /> */}
        {/* <ConditionalRender /> */}
        {/* <ConditionalRenderUpgraded /> */}
        {/* <UnmutableWayOfUpdateState /> */}
        {/* <Lists /> */}
        {/* <ListsBinding /> */}
        {/* <DynamicStyling /> */}
        <RadiumStyling />
      </div>
      </StyleRoot>
    );
  }
}

export default App;
