import React from 'react';
import './Person.css' 
import Radium from 'radium'

// Use of media queries with Radium

// Besides wraping the component with Radium, we also need to:
// To wrap the root component with StyleRoot, like this:

// class App extends Component {
//     render() {
//       return (
//         <StyleRoot>
//               <div className="App">
//                  ........
//               </div>
//         </StyleRoot>

// If not, we will have this error (in the dev consol):
// Uncaught Error: To use plugins requiring `addCSS` (e.g. keyframes, media queries), 
// please wrap your application in the StyleRoot component. 

const person = ( props ) => {
    const style = {
        '@media (min-width: 500px)': { // Radium understand this media query selector
            width: '450px'
        }
    };

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            {props.clickDelete && <button onClick={props.clickDelete}>Delete me</button>}
        </div>
    )
};

export default Radium(person);