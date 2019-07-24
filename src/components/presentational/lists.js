import React, { Component } from 'react';
import Person from './Person';

class Lists extends Component {
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

  handleDeletePerson = (personIndex) => {
    // THIS IS A BAD IDEA. As persons is a pointer, we are mutating the original data
    // with splice. And this can lead to unpredictable apps
    // const persons = this.state.persons // pointer
    
    // THE WAY: this two are equivalent. But spread operator (...) is the modern way
    // We whould always update in an unmutable fashion, i.e not updating the original data
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]

    persons.splice(personIndex,1)
    this.setState({persons:persons})
  }

  render() {

    let persons = null;

    if( this.state.showPersons ){
      persons = (
          <div>
              {this.state.persons.map( (person,index) => {
                return (
                  <Person
                  clickDelete={this.handleDeletePerson.bind(this,index)}
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
      <div className="App">
        <h1>Lists</h1>
        <button onClick={this.togglePerson}>Switch Name</button>
        {/* We can only use simple expressions in the curly braces. Not block expressions like if(){} */}
        {persons}
      </div>
    );
  }
}

export default Lists;
