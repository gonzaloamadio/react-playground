import React, { Component } from 'react';
import classes from './App.css';

// import { StyleRoot } from 'radium'

// import StateClassBased from '../components/state/class-based'
// import StateHook from '../components/state/use-state-hoook'
// import UnmutableWayOfUpdateState from '../components/state/unmutable-way'
// import Pmbc from '../components/events-functions/pass-methods-btw-components'
// import ConditionalRender from '../components/presentational/conditional-render'
// import ConditionalRenderUpgraded from '../components/presentational/conditional-render-upgraded'
// import Lists from '../components/presentational/lists'
// import ListsBinding from '../components/presentational/lists-function-binding'
// import DynamicStyling from '../components/styling/02-dynamic-styling'
// import RadiumStyling from '../components/styling/03-radium-styling'
// import CssModulesStyling from '../components/styling/04-css-modules'
// import TestErrorBoundary from '../components/errors/TestErrorBoundary'
// import ContainerPresentational from './ContainerPresentational'

// LIFECYCLES
// import LifeCycleCreation from '../components/life-cycle/LifeCycle-Creation'
// import LifeCycleUpdate from '../components/life-cycle/Update/Update'
import LfuseEffect from '../components/life-cycle/hook-useEffect'

class App extends Component {
  render() {
    return (
      // <StyleRoot>   // Comment this, because we configure css modules.
      <div className={classes.App}>
        
        {/* ----- STATE MODIFICATION EXAMPLES ----- */}
        
        {/* <StateClassBased /> */}
        {/* <StateHook /> */}
        {/* <UnmutableWayOfUpdateState /> */}

        {/* ----- COMUNICATION BETWEEN COMPONENTS ----- */}

        {/* <Pmbc /> */}

        {/* ----- RENDERING / PRESENTATIONAL ----- */}

        {/* <ConditionalRender /> */}
        {/* <ConditionalRenderUpgraded /> */}
        {/* <Lists /> */}
        {/* <ListsBinding /> */}
        {/* <ContainerPresentational /> */}

        {/* ----- STYLING ----- */}

        {/* <DynamicStyling /> */}
        {/* <RadiumStyling /> */} {/* To use this, undo css modules config? */} 
        {/* <CssModulesStyling /> */}
        {/* <TestErrorBoundary /> */}

        {/* ----- LIFE CYCLE ----- */}

        {/* <LifeCycleCreation /> */}
        {/* <LifeCycleUpdate /> */}
        {/* <LfuseEffect> */}

      </div>
     // </StyleRoot>
    );
  }
}

export default App;
