import React, { Component } from 'react';
import Person from '../Persons/Person/Person3';

class Pmbc extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 }, // Read elem value, so we make a two ways binding
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }


  render () {
    // Super Basic ways of styling, with this type not all the power of css can be used.
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    }

    return (
        
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* Pass a parameter and bind this to this class context. ARROW FUNCTION WAY */}
        {/* This can be inefficient, and bind way is preferred */}
        <button 
            style={style} //Add inline style
            onClick={() => this.switchNameHandler('Maximilian!!')}>
            Switch Name
        </button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
//        Pass a parameter and bind this to this class context. EXPLICIT BIND WAY
          click={this.switchNameHandler.bind(this, 'Max!')}
//        Pass a function to child. It is an arrow function, so it binds "this" to this class.
          changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default Pmbc;
