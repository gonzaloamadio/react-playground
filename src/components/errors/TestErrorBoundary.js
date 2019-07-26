import React, { Component } from 'react';
import Person from '../Persons/Person/Person';
import ErrorBoundary from './ErrorBoundary'

export default class TestErrorBoundary extends Component {
  state = {
    persons: [
      { id: 'asd', name: 'Max', age: 28 },
    ],
  };

  throwErrorOnPurpose = () => {
    throw new Error("This is a sweet error")
  };

  render() {
    return (
      <div className="App">
        <h1>Test Error Boundary</h1>
        {this.state.persons.map( (person,index) => {
                return (
                // Key moved to outer element!
                <ErrorBoundary key={person.id}>
                  <Person
                  name={person.name}
                  age={person.age}
                  click={this.throwErrorOnPurpose}
                  />
                 </ErrorBoundary>
                )
              })
        }
      </div>
    );
  }
}
