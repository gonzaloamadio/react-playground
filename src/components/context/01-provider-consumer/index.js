import React, { Component } from 'react';

import classes from './../../../containers/App.css';
import Persons from './Persons';
import Cockpit from './Cockpit';

import AuthContext from '../../../context/auth-context'

// AuthContext can be used as a componen and it should wrap, and this is IMPORTANT,
// all the parts of your application that needs to access to this context.

// Can only be used with classes.

export default class Context01 extends Component {
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
        {/* The .Provider actually gives you a provider JSX component. 
            Now inside Cockpit, and persons you will be able to access the context.
            Also in this Context01 component, because we are setting it up here as well.*/}
        {/* If we change something in a context, react will not re-render, only when 
        state or props change, thats why we still mange auth state in the state of the component. */}
        {/* With this, we AVOID props chaining, i.e. passing props to Persons, only to forward them 
          Person component. */}
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