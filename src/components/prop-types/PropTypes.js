import React, { Component } from 'react';

import classes from '../../containers/App.css';
import Persons from '../Persons/Persons';

// The first object pass a string in age.
// Should give the warning in console:
// Warning: Failed prop type: Invalid prop `age` of type `string` supplied to `person`, expected `number`

export default class PropTypesCmp extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: "28" },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
  };

  render() {

      const persons = (
        <Persons
          persons={this.state.persons}
          clicked={() => {}}
          changed={() => {}}
        />
      );

    return (
      <div className={classes.App}>
        {persons}
      </div>
    );
  }
}