import React, { Component } from 'react';
import Person from '../Persons/Person/Person';
import Aux from '../../hoc/Aux'
import withClass from '../../hoc/withClassFunc'

// File to demonstrate how to use a HOC component, functional.

class HocFunction extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
    ],
  };

  render() {
    return (
      <Aux>
        <h1>Hoc:</h1>
        <p>This text should be centered!</p>
        <p>Prop text: {this.props.text}</p>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
      </Aux>
    );
  }
}

// Usage of HOC component
export default withClass(HocFunction, "App");
