import React, { Component } from 'react';
import classes from './App.css';

// import { StyleRoot } from 'radium'

// import StateClassBased from './components/state/class-based'
// import StateHook from './components/state/use-state-hoook'
// import Pmbc from './components/events-functions/pass-methods-btw-components'
// import ConditionalRender from './components/presentational/conditional-render'
// import ConditionalRenderUpgraded from './components/presentational/conditional-render-upgraded'
// import UnmutableWayOfUpdateState from './components/state/unmutable-way'
// import Lists from './components/presentational/lists'
// import ListsBinding from './components/presentational/lists-function-binding'
// import DynamicStyling fro./components/styling/02-dynamic-stylingtyling'
// import RadiumStyling from './components/styling/03-radium-styling'
// import CssModulesStyling from './components/styling/04-css-modules'
import TestErrorBoundary from './components/errors/TestErrorBoundary'

class App extends Component {
  render() {
    return (
      // <StyleRoot>   // Comment this, because we configure css modules.
      <div className={classes.App}>
        {/* <StateClassBased /> */}
        {/* <StateHook /> */}
        {/* <Pmbc /> */}
        {/* <ConditionalRender /> */}
        {/* <ConditionalRenderUpgraded /> */}
        {/* <UnmutableWayOfUpdateState /> */}
        {/* <Lists /> */}
        {/* <ListsBinding /> */}
        {/* <DynamicStyling /> */}
        {/* <RadiumStyling /> */} {/* To use this, undo css modules config? */} 
        {/* <CssModulesStyling /> */}
        <TestErrorBoundary />
      </div>
     // </StyleRoot>
    );
  }
}

export default App;
