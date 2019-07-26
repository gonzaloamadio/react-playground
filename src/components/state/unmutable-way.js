import React, { Component } from 'react';
import Person from '../Persons/Person/Person';

class UnmutableWayOfUpdateState extends Component {
  state = {
    persons: [
      { id: 'asd', name: 'Max', age: 28 },
      { id: 'qwe', name: 'Manu', age: 29 },
    ],
    showPersons: false
  };

  handleDeletePerson = (personIndex) => {
    // THIS IS A BAD IDEA. As persons is a pointer, we are mutating the original data
    // with splice. And this can lead to unpredictable apps
    // const persons = this.state.persons // pointer
    // persons.splice(personIndex,1)

    // THE WAY: this two are equivalent. But spread operator (...) is the modern way
    // We whould always update in an unmutable fashion, i.e not updating the original data.
    // With splice or spread operator we are making a copy.
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    //Alternative way
    // const persons = Object.assign({}, this.state.persons)

    persons.splice(personIndex,1)
    this.setState({persons:persons})

    // SEE ANOTHER EXAMPLE in presentational/lists-function-binding.js
  }

  render() {

    // Every time this component renders, it will execute this code.
    // So persons will go null, and only if showPersons is true, persons
    // will have the code inside the if. So there is no need to put an else
    // in the if, as it will always start with null value in each render.
    const persons = (
        <div>
            {this.state.persons.map( (person,index) => {
            return (          
                <Person
                click={this.handleDeletePerson.bind(this,index)}
                name={person.name}
                age={person.age}
                key={person.id}
                />
            )
            })
            }
        </div>
    );

    return (
      <div className="App">
        <h1>Unmutable way of muting state</h1>
        {persons}
      </div>
    );
  }
}

export default UnmutableWayOfUpdateState;
