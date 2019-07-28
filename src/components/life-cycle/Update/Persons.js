import React, { Component } from 'react';

import Person from './Person/Person';

// The most used an importants are ComponentDidMount, DidUpdate
// And for performance, shouldComponentUpdate

class Persons extends Component {
  // If we do not have an initial state, this execution will give a warning
  // That initial state is not defined and  this method is not recommended
  // The recommendation is to define inital state so this method have a 
  // consistent shape.  
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // DEPRECATED: Should not be used
  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  // This will trigger when we start typing something in the input text of Person.
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  // DEPRECATED: Should not be used
  // componentWillUpdate() {

  // }

  // This one will trigger each time a state is updated.
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
