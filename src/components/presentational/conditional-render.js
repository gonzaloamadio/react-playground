import React, { Component } from 'react';
import Person from '../Persons/Person/Person';


class ConditionalRender extends Component {
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
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.togglePerson}>Switch Name</button>
        {/* We can only use simple expressions in the curly braces. Not block expressions like if(){} */}
        {this.state.showPersons ?
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
          : null
        }
      </div>
    );
  }
}

export default ConditionalRender;
