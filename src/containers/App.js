import React, { Component } from 'react';
import classes from './App.css';

// import { StyleRoot } from 'radium'

// import StateClassBased from '../components/state/class-based'
// import StateHook from '../components/state/use-state-hoook'
// import UnmutableWayOfUpdateState from '../components/state/unmutable-way'
// import SetStateCorrectly from '../components/state/setStateCorrectly'
// import Pmbc from '../components/communication/pass-methods-btw-components'
// import Ref from '../components/communication/references/Ref'
// import RefWithHooks from '../components/communication/references/RefWithHooks'
// import ConditionalRender from '../components/presentational/conditional-render'
// import ConditionalRenderUpgraded from '../components/presentational/conditional-render-upgraded'
// import Lists from '../components/presentational/lists'
// import ListsBinding from '../components/presentational/lists-function-binding'
// import DynamicStyling from '../components/styling/02-dynamic-styling'
// import RadiumStyling from '../components/styling/03-radium-styling'
// import CssModulesStyling from '../components/styling/04-css-modules'
// import TestErrorBoundary from '../components/errors/TestErrorBoundary'
// import ContainerPresentational from './ContainerPresentational'
// import LifeCycleCreation from '../components/life-cycle/LifeCycle-Creation'
// import LifeCycleUpdate from '../components/life-cycle/Update/Update'
// import LfuseEffect from '../components/life-cycle/hook-useEffect'
// import AdjacentElements from '../components/presentational/return-adjacent-jsx-elems'
// import HocComponent from '../components/hoc-cmp/hoc-component'
// import HocFunction from '../components/hoc-cmp/hoc-function'
// import PropTypesCmp from '../components/prop-types/PropTypes'
// import ContextConsumerProvider from '../components/context/01-provider-consumer'
import ContexMoreElegant from '../components/context/02-contextType-useContext'


class App extends Component {
  render() {
    return (
      // <StyleRoot>   // Comment this, because we configure css modules.
      <div className={classes.App}>
        
        {/* ----- STATE MODIFICATION EXAMPLES ----- */}
        
        {/* <StateClassBased /> */}
        {/* <StateHook /> */}
        {/* <UnmutableWayOfUpdateState /> */}
        {/* <SetStateCorrectly /> */}

        {/* ----- COMUNICATION BETWEEN COMPONENTS ----- */}

        {/* <Pmbc /> */}
        {/* <Ref /> */}
        {/* <RefWithHooks /> */}

        {/* ----- RENDERING / PRESENTATIONAL ----- */}

        {/* <ConditionalRender /> */}
        {/* <ConditionalRenderUpgraded /> */}
        {/* <Lists /> */}
        {/* <ListsBinding /> */}
        {/* <ContainerPresentational /> */}
        {/* <AdjacentElements /> */}

        {/* ----- STYLING ----- */}

        {/* <DynamicStyling /> */}
        {/* <RadiumStyling /> */} {/* To use this, undo css modules config? */} 
        {/* <CssModulesStyling /> */}

        {/* ----- Errors ----- */}

        {/* <TestErrorBoundary /> */}

        {/* ----- LIFE CYCLE ----- */}

        {/* <LifeCycleCreation /> */}
        {/* <LifeCycleUpdate /> */}
        {/* <LfuseEffect> */}

        {/* ----- HOC ----- */}

        {/* <HocComponent /> */}
        {/* <HocFunction text={'Mi texto de prueba'}/> */}

        {/* ----- Prop Types ----- */}
        {/* <PropTypesCmp /> */}

        {/* ----- Context ----- */}
        {/* <ContextConsumerProvider /> */}
        <ContexMoreElegant />


      </div>
     // </StyleRoot>
    );
  }
}

export default App;
