import React, { Component } from 'react';

import classes from '../../../containers/App.css';
import Persons from './Persons';
import Persons2 from './Persons2';


// RELEVANT CODE INSIDE Person.js , THIS IS JUST LOGIC TO USE EXAMPLE

export default class Ref extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
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
    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const persons = (
      <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />
     );
     const persons2 = (
      <Persons2
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />
     );

    return (
      <div className={classes.App}>
        <p>Example on how to use refs. Important code should be inside
          Person.js and Person2.js, in the folder of this example.
        </p>
        <h3>WAY 1 of declaring references.</h3>
        <p> Should focus on last input </p>
        {persons}
        <h3>WAY 2 of declaring references.</h3>
        <p>After React 16.3 </p>
        {persons2}
      </div>
    );
  }
}