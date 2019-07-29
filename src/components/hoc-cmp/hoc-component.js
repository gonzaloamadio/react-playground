import React, { Component } from 'react';
import Person from '../Persons/Person/Person';
import WithClass from '../../hoc/WithClass'

class HocComponent extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
    ],
  };

  render() {
    return (
        // Usage of a hoc to add a class. Of course we can pass a varaible with
        // several css class names, as normal css styling techniques.
      <WithClass classes={"App"}>
        <h1>Hoc:</h1>
        <p>This text should be centered!</p>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
      </WithClass>
    );
  }
}

export default HocComponent;
