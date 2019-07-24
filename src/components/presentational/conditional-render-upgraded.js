import React, { Component } from 'react';
import Person from './Person';

class ConditionalRenderUpgraded extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
    ],
    showPersons: false
  };

  togglePerson = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {

    // Every time this component renders, it will execute this code.
    // So persons will go null, and only if showPersons is true, persons
    // will have the code inside the if. So there is no need to put an else
    // in the if, as it will always start with null value in each render.
    let persons = null;

    if( this.state.showPersons ){
      persons = (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
            >
              My Hobbies: Racing
            </Person>
          </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.togglePerson}>Switch Name</button>
        {/* We can only use simple expressions in the curly braces. Not block expressions like if(){} */}
        {persons}
      </div>
    );
  }
}

export default ConditionalRenderUpgraded;
