import React, { Component } from 'react';

import classes from '../../containers/App.css';
import Persons from '../Persons/Persons';

// HOW TO SET STATE IF WE DEPEND ON OLD STATE

export default class SetStateCorrectly extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    showPersons: false,
    keyCounter: 0
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // This is a good way, but despite we use setState sincronously here, 
    // it is not guaranteed. So IF WE DEPEND ON THE PREVIOUS STATE, this may fail.
    // In simple apps like this, it will not happen, but it can in more complex ones.

    // this.setState({ persons: persons });

    // this.setState({ 
        // persons: persons ,
        // keyCounter : this.state.keyCounter + 1 // This may fail, *1
    // });

    // *1 : this.state is not guaranted to have desired value. Maybe another state modification that was run
    // almost at the same time as this one, finish before and change the value of keyCounter.

    // CORRECT WAY : function that takes 2 params. First one is old state. 2nd the current props.
    // With this, react guarantees that this will be the actual prev state as you would expect for this
    // setState update
    this.setState((prevState) => { 
        return {
            persons: persons ,
            keyCounter : prevState.keyCounter + 1
        }    
    });

  };

  render() {

      const persons = (
        <Persons
          persons={this.state.persons}
          changed={this.nameChangedHandler}
        />
      );

    return (
      <div className={classes.App}>
        {persons}
        <p>Amount of key strokes</p>
        {this.state.keyCounter}
      </div>
    );
  }
}