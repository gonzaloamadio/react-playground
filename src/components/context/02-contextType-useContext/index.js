import React, { Component } from 'react';

import classes from './../../../containers/App.css';
import Persons from './Persons';
import Cockpit from './Cockpit';

import AuthContext from '../../../context/auth-context'

// From :  +React 16.6

// More elegant way than the Consumer-Provider
// contextType for class components, and useContext Hook for functional.
// useContext is for functional, what contextType is for class based components we can say.

// Context is all about managing data accross components without need to pass data around with props.
// REDUX will help with this also.

// Also, Consumer-Provider pattern only gives you access to the component it wraps.
// If for example we want to use it in ComponentDidMount, it is not possible.
// With this other solution, it is. 

// HOW?
// Add special static property called contextType.
// Written exactly like that, and static so it can be accese from outside
// without having to instantiate class.

export default class Context02 extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    showPersons: false,
    authenticated: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  loginHandler = () => {
    this.setState({authenticated: true})
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <p>Another component/element that does not use the context</p>
        <AuthContext.Provider 
          value={{
            authenticated : this.state.authenticated,
            login: this.loginHandler
            }}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
        </AuthContext.Provider>
      </div>
    );
  }
}