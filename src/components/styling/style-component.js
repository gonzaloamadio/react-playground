import React, { Component } from 'react';
import Person from './Person';

class StyleComponent extends Component {
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
        <h1>Styling</h1>
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
          age={this.state.persons[1].age} />
      </div>
    );
  }
}

export default StyleComponent;
