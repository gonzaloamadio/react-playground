import React, { Component } from 'react';
import Person from '../Persons/Person/Person';
import Aux from '../../hoc/Aux'

export default class AdjacentElements extends Component {
  state = {
    persons: [
      { id: 'asd', name: 'Max', age: 28 },
      { id: 'qwe', name: 'Manu', age: 29 },
    ],
    showPersons: false
  };

  togglePerson = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {

    let persons = null;

    if( this.state.showPersons ){
      persons = (
          <div>
              {this.state.persons.map( (person,index) => {
                return (
                  <Person
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  />
                )
              })
              }
          </div>
      );
    }

    return (
    //   <div className="App">
    // Instead of using a div, we use a high order component that only return it childrens
    // without rendering another thing.
    // After react 16.2, we can use the built-in React.Fragment instead of Aux. They do the same.
    <Aux> 
        <h1>Lists</h1>
        <button onClick={this.togglePerson}>Switch Name</button>
        {/* We can only use simple expressions in the curly braces. Not block expressions like if(){} */}
        {persons}
    </Aux>
    //   </div>
    );
  }
}